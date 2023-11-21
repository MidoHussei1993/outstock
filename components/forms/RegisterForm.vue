<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="row">
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
    </div>
    <div class="mb-20">
      <label for="name"> {{ $t("form.name") }} <span>**</span></label>
      <Field
        name="name"
        type="text"
        :placeholder="$t('form.enter') + ' ' + $t('form.name')"
      />
      <ErrorMessage name="name" class="text-danger" />
    </div>

    <div class="mb-20">
      <label for="email-id">{{ $t("form.email") }} <span>**</span></label>
      <Field
        name="email"
        id="email-id"
        type="text"
        :placeholder="$t('form.enter') + ' ' + $t('form.name')"
      />
      <ErrorMessage name="email" class="text-danger" />
    </div>

    <div class="mb-20">
      <label for="mobile_number">{{ $t("form.mobile") }} <span>**</span></label>
      <Field
        name="mobile_number"
        id="mobile_number"
        type="number"
        :placeholder="$t('form.enter') + ' ' + $t('form.mobile')"
      />
      <ErrorMessage name="mobile_number" class="text-danger" />
    </div>

    <div class="mb-20" v-if="countries && countries.length">
      <label for="country_id">{{ $t("form.country") }} <span>**</span></label>
      <Field
        name="country_id"
        id="country_id"
        as="select"
        :placeholder="$t('form.country') + ' ' + $t('form.name')"
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
    <div class="mb-20">
      <label for="pass">
        {{ $t("config.token") }}
      </label>
      <Field
        name="token"
        v-model="token"
        id="token"
        type="text"
        :placeholder="$t('form.enter') + ' ' + $t('config.token')"
      />
      <!-- <ErrorMessage name="password" class="text-danger" /> -->
    </div>
    <div class="mb-20">
      <label for="pass">
        {{ $t("form.password") }}
        <span>**</span></label
      >
      <Field
        name="password"
        id="pass"
        type="password"
        :placeholder="$t('form.enter') + ' ' + $t('form.password')"
      />
      <ErrorMessage name="password" class="text-danger" />
    </div>
    <div class="mb-20">
      <label for="password_confirmation">
        {{ $t("form.passwordConfierm") }}
        <span>**</span></label
      >
      <Field
        name="password_confirmation"
        id="password_confirmation"
        type="password"
        :placeholder="$t('form.enter') + ' ' + $t('form.passwordConfierm')"
      />
      <ErrorMessage name="password_confirmation" class="text-danger" />
    </div>

    <div class="mt-10"></div>
    <button type="submit" class="os-btn w-100" :disabled="busySubmit">
      <i
        class="far fa-spinner-third fa-spin text-success mx-2"
        style="font-size: 22px"
        v-if="busySubmit"
      ></i>
      {{ $t("action.save") }}
    </button>
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
const { setLoader } = useLoader();
const fetch = $useHttpClient();
const token = ref("");
const countries = ref<ICountry[]>([]);
const busySubmit = ref<boolean>(false);
const image = ref<ImageResponse>({} as ImageResponse);
const lat = ref<any>(null);
const lng = ref<any>(null);
const { query } = useRoute();
const schema = yup.object({
  name: yup.string().trim().required(t("_.required")).label(t("form.name")),
  email: yup
    .string()
    .trim()
    .required(t("_.required"))
    .email(t("_.email"))
    .label(t("form.email")),
  mobile_number: yup.number().required(t("_.required")).label(t("form.mobile")),
  invitation_token: yup.string().label(t("config.token")),
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
  if (query.invitation_token) {
    token.value = query.invitation_token.toString();
  }
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
const onSubmit = async (
  values: object,
  { resetForm }: { resetForm: () => void }
) => {
  if (!image.value.id) {
    return useNuxtApp().$toast.error(t("_.image"));
  }
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
  try {
    busySubmit.value = true;
    setLoader(true);
    const { message } = await fetch("/auth/register", {
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
    setLoader(false);
    busySubmit.value = false;
    useNuxtApp().$toast.success(message);
    navigateTo("/otp");
  } catch (error) {
    setLoader(false);
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
