<template>
  <layout :transparent="true">
    <breadcrumb-area title="Register" :subtitle="t('form.otp')" />
    <section class="login-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="basic-login">
              <h3 class="text-center mb-60">
                {{ $t("form.otp") }}
              </h3>
              <Form :validation-schema="schema" @submit="onSubmit">
                <div class="mb-20">
                  <label for="name">
                    {{ $t("form.otpSent") }} <span>**</span></label
                  >
                  <Field
                    name="otp"
                    type="number"
                    :placeholder="$t('form.enter') + $t('form.otp')"
                  />
                  <ErrorMessage name="otp" class="text-danger" />
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
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script lang="ts" setup>
import { Field, Form, ErrorMessage } from "vee-validate";

import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import * as yup from "yup";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
useHead({
  title: t("form.otp"),
});
const fetch = $useHttpClient();
const busySubmit = ref<boolean>(false);
const schema = yup.object({
  otp: yup.number().required(t("_.required")).label(t("form.otp")),
});
const onSubmit = async (
  values: object,
  { resetForm }: { resetForm: () => void }
) => {
  try {
    busySubmit.value = true;
    const { message } = await fetch("/auth/confirm-otp", {
      method: "post",
      body: $payloadParser({ id: 1, ...values }, "user"),
    });
    busySubmit.value = false;
    useNuxtApp().$toast.success(message);
    navigateTo("/login");
  } catch (error) {
    busySubmit.value = false;
  }

  try {
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:150 ~ setup ~ error:", error);
  }
};
</script>
