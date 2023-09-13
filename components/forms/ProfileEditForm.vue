<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <h3 class="text-center py-3">Profile Edit</h3>
    <!-- <div class="row">
      <div class="text-center">
        <div class="circle">
          <img
            class="profile-pic"
            :src="
              image.url
                ? image.url
                : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
            "
          />
        </div>
        <div class="p-image">
          <i
            @click="$refs.imageUploader.click()"
            class="fa fa-camera upload-button"
          ></i>
          <input
            class="file-upload"
            ref="imageUploader"
            type="file"
            accept="image/*"
            @change="getselectedFile($event)"
          />
        </div>
      </div>
    </div> -->
    <div class="profile__edit-input">
      <p>{{ $t("form.name") }}</p>
      <Field
        name="name"
        type="text"
        :placeholder="$t('form.enter') + $t('form.name')"
      />
      <ErrorMessage name="name" class="text-danger" />
    </div>

    <div class="profile__edit-input">
      <p>{{ $t("form.email") }}</p>
      <Field
        name="email"
        id="email-id"
        type="text"
        :placeholder="$t('form.enter') + $t('form.name')"
      />
      <ErrorMessage name="email" class="text-danger" />
    </div>

    <div class="profile__edit-input">
      <p>{{ $t("form.mobile") }}</p>
      <Field
        name="mobile_number"
        id="mobile_number"
        type="number"
        :placeholder="$t('form.enter') + $t('form.mobile')"
      />
      <ErrorMessage name="email" class="text-danger" />
    </div>

    <div class="profile__edit-input" v-if="countries && countries.length">
      <p>{{ $t("form.country") }}</p>
      <Field
        name="country_id"
        id="country_id"
        as="select"
        :placeholder="$t('form.country') + $t('form.name')"
      >
        <option
          v-for="(item, index) in countries"
          :key="item.id"
          :value="item.id"
        >
          {{ item.name }}
        </option>
      </Field>
      <ErrorMessage name="country_id" class="text-danger" />
    </div>

    <div class="profile__edit-input">
      <p>
        {{ $t("form.password") }}
      </p>
      <Field
        name="password"
        id="pass"
        type="password"
        :placeholder="$t('form.enter') + $t('form.password')"
      />
      <ErrorMessage name="password" class="text-danger" />
    </div>
    <div class="profile__edit-input">
      <p>
        {{ $t("form.passwordConfierm") }}
      </p>
      <Field
        name="password_confirmation"
        id="password_confirmation"
        type="password"
        :placeholder="$t('form.enter') + $t('form.passwordConfierm')"
      />
      <ErrorMessage name="password_confirmation" class="text-danger" />
    </div>

    <div class="profile__edit-input">
      <button
        :disabled="busySubmit"
        type="submit"
        class="os-btn os-btn-black w-100"
      >
        <i
          class="far fa-spinner-third fa-spin text-success mx-2"
          style="font-size: 22px"
          v-if="busySubmit"
        ></i>

        {{ $t("action.update") }}
      </button>
    </div>

    <!-- <div class="or-divide"><span>or</span></div>
      <nuxt-link href="/login" class="os-btn os-btn-black w-100"
      >login Now</nuxt-link
      > -->
  </Form>
</template>

<script lang="ts" setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useI18n } from "vue-i18n";
import { ICountry, ImageResponse } from "~~/types";

const { t } = useI18n();
// const { setLoader } = useLoader();
const fetch = $useHttpClient();
const countries = ref<ICountry[]>([]);
const busySubmit = ref<boolean>(false);
const image = ref<ImageResponse>({} as ImageResponse);
const lat = ref<any>(null);
const lng = ref<any>(null);
const schema = yup.object({
  name: yup.string().trim().required(t("_.required")).label(t("form.name")),
  email: yup
    .string()
    .trim()
    .required(t("_.required"))
    .email(t("_.email"))
    .label(t("form.email")),
  mobile_number: yup.number().required(t("_.required")).label(t("form.mobile")),
  country_id: yup.string().label(t("form.country")).required(t("_.required")),
  password: yup.string().trim().required().min(8).label(t("form.password")),
  password_confirmation: yup
    .string()
    .label(t("form.passwordConfierm"))
    .required(t("_.required"))
    .oneOf([yup.ref("password")], "Passwords must match"),
});

onMounted(() => {
  getCuntires();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat.value = position.coords.latitude;
      lng.value = position.coords.longitude;
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
    return;
  }
});

const getselectedFile = async (event: any) => {
  if (!event.target.files.length) return;
  let imgFile = event.target.files[0];
  const form = new FormData();
  form.append("media[]", imgFile);
  const res = await fetch("/media", {
    method: "post",
    body: form,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  image.value = res.data[0];
};
const getCuntires = async () => {
  try {
    const { data } = await fetch("/countries?page=1&per_page=1000", {
      method: "get",
    });
    countries.value = data;
  } catch (error) {
    console.log(error);
  }
};
const hideModal = () => {
  console.log("first");
  let closeEl = document.createElement("button");
  closeEl.setAttribute("type", "button");
  closeEl.setAttribute("data-bs-dismiss", "modal");
  closeEl.setAttribute("aria-label", "Close");
  closeEl.click();
  // @ts-ignore
  // Show the modal
  // $("#profile_edit_modal").modal("hide");

  // var myModal = new bootstrap.Modal(
  //   document.getElementById("profile_edit_modal"),
  //   {
  //     keyboard: false,
  //   }
  // );
  // myModal.hide();
};
const onSubmit = async (
  values: object,
  { resetForm }: { resetForm: () => void }
) => {
  try {
    // if (!image.value.id) {
    //   return useNuxtApp().$toast.error(t("_.image"));
    // }
    if (!lat.value) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          lat.value = position.coords.latitude;
          lng.value = position.coords.longitude;
          console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
        return;
      }
      return useNuxtApp().$toast.error(t("_.locationRequired"));
    }
    busySubmit.value = true;
    const { message } = await fetch("/profile/update", {
      method: "post",
      body: $payloadParser(
        {
          id: 1,
          ...values,
          profile_picture: image.value.id,
          lat: lat.value,
          lng: lng.value,
        },
        "user"
      ),
    });
    busySubmit.value = false;
    useNuxtApp().$toast.success(message);
    // navigateTo("/otp");
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    busySubmit.value = false;
  }
  // alert(JSON.tringify(values, null, 2));
  // resetForm();
};
</script>
<style>
.profile-pic {
  width: 200px;
  max-height: 200px;
  display: inline-block;
}

.file-upload {
  display: none;
}
.circle {
  border-radius: 100% !important;
  overflow: hidden;
  /* width: 128px;
  height: 128px; */
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
  /* top: 72px; */
}
img {
  max-width: 100%;
  height: auto;
}
.p-image {
  position: relative;
  /* top: 167px;
  right: 30px; */
  color: #666666;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.p-image:hover {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.upload-button {
  font-size: 1.2em;
}

.upload-button:hover {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: #999;
}
</style>
