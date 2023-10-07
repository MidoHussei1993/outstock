<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="mb-20">
      <label for="email-id">
        {{ $t("form.email") }}
        <span>**</span></label
      >
      <Field
        name="email"
        id="email-id"
        type="text"
        placeholder="Email address..."
      />
      <ErrorMessage name="email" class="text-danger" />
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
        placeholder="Enter password..."
      />
      <ErrorMessage name="password" class="text-danger" />
    </div>

    <!-- <div class="login-action mb-20 fix">
      <span class="log-rem f-left">
        <input id="remember" type="checkbox" />
        <label for="remember">Remember me!</label>
      </span>
      <span class="forgot-login f-right">
        <a href="#">Lost your password?</a>
      </span>
    </div> -->
    <button class="os-btn w-100">
      <i
        v-if="busySubmit"
        class="fa fa-spinner fa-spin h4 mx-2 text-primary"
        aria-hidden="true"
      ></i>
      <span v-if="!busySubmit">
        {{ $t("config.login") }}
      </span>
    </button>
    <div class="or-divide"><span>or</span></div>
    <nuxt-link href="/register" class="os-btn os-btn-black w-100">
      {{ $t("config.registerNow") }}
    </nuxt-link>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { setToken, setUser } from "~~/util";

export default defineComponent({
  components: { Field, Form, ErrorMessage },
  setup() {
    const fetch = $useHttpClient();
    const busySubmit = ref<boolean>(false);
    const schema = yup.object({
      email: yup.string().required().email().label("Email"),
      password: yup.string().required().min(6).label("Password"),
    });

    const onSubmit = async (
      values: object,
      { resetForm }: { resetForm: () => void }
    ) => {
      console.log(values);
      try {
        busySubmit.value = true;
        const res = await fetch("/auth/login", {
          method: "post",
          body: $payloadParser({ id: 1, ...values }, "user"),
        });
        setUser(res.data.attributes);
        setToken(res.meta.token);
        busySubmit.value = false;
        navigateTo("/");
      } catch (error) {
        console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
        busySubmit.value = false;
      }
    };

    return { schema, onSubmit, busySubmit };
  },
});
</script>
