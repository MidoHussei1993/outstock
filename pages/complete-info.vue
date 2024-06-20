<template>
  <layout :transparent="true">
    <breadcrumb-area
      :title="$t('c.completeInfo')"
      :subtitle="$t('c.completeInfo')"
    />
    <section class="login-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="basic-login">
              <h3 class="text-center mb-60">
                {{ $t("c.completeInfo") }}
              </h3>
              <Form :validation-schema="schema" @submit="onSubmit">
                <div class="mb-20">
                  <label for="mobile_number"
                    >{{ $t("form.mobile") }} <span>**</span></label
                  >
                  <Field
                    name="mobile_number"
                    id="mobile_number"
                    type="number"
                    :placeholder="$t('form.enter') + ' ' + $t('form.mobile')"
                  />
                  <ErrorMessage name="mobile_number" class="text-danger" />
                </div>

                <div class="mb-20" v-if="countries && countries.length">
                  <label for="country_id"
                    >{{ $t("form.country") }} <span>**</span></label
                  >
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

                <div class="mt-10"></div>
                <button
                  type="submit"
                  class="os-btn w-100"
                  :disabled="busySubmit"
                >
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import * as yup from "yup";
import { useI18n } from "vue-i18n";
import { ICountry } from "~~/types/country";
import { Formatter } from "sarala-json-api-data-formatter";

const { setLoader } = useLoader();
const { t } = useI18n();
const fetch = $useHttpClient();
const countries = ref<ICountry[]>([]);
const busySubmit = ref<boolean>(false);
const lat = ref<any>(null);
const lng = ref<any>(null);
const schema = yup.object({
  mobile_number: yup.number().required(t("_.required")).label(t("form.mobile")),
  country_id: yup.string().label(t("form.country")).required(t("_.required")),
});
const getCuntires = async () => {
  try {
    setLoader(true);
    const { data } = await fetch("/countries?page=1&per_page=1000", {
      method: "get",
    });
    countries.value = data;
  } catch (error) {
    console.log(error);
  } finally {
    setLoader(false);
  }
};
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
const onSubmit = async (
  values: object,
  { resetForm }: { resetForm: () => void }
) => {
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
  if (!localStorage.getItem("tempUser")) return navigateTo("/login");
  const user = JSON.parse(localStorage.getItem("tempUser")!);
  try {
    busySubmit.value = true;
    setLoader(true);
    const res = await fetch("/auth/complete-social-user-data", {
      method: "post",
      body: $payloadParser(
        {
          ...values,
          id: user.id,
          user_id: user.id,
          lat: lat.value,
          lng: lng.value,
        },
        "user"
      ),
    });
    setLoader(false);
    busySubmit.value = false;
    const formatter = new Formatter();
    const data = formatter.deserialize(res);
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", res.meta.token);
    useNuxtApp().$toast.success(res.meta.message);
    navigateTo("/");
  } catch (error) {
    setLoader(false);
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    busySubmit.value = false;
  }
  // alert(JSON.tringify(values, null, 2));
  // resetForm();
};
</script>
