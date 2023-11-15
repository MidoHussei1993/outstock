<template>
  <section class="login-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="basic-login">
            <h3 class="text-center mb-60">
              {{ $t("config.login") }}
            </h3>
            <!-- form start -->
            <login-form />
            <!-- form end -->
            <client-only>
              <button :disabled="!isReady" @click="() => login()">
                Login with Google
              </button>
            </client-only>
            <client-only>
              <VFacebookLogin class="button" appId="871199088044654">
              </VFacebookLogin>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- <script lang="ts">
// import VFacebookLogin from "vue-facebook-login-component";
// import facebookLogin from "facebook-login-vuejs";
export default {
  components: {
    VFacebookLogin,
  },
};
</script> -->
<script lang="ts" setup>
import VFacebookLogin from "vue-facebook-login-component-next";
// import {
//   GoogleSignInButton,
//   type CredentialResponse,
// } from "nuxt-vue3-google-signin";
import { defineComponent } from "vue";
import LoginForm from "../forms/LoginForm.vue";
import {
  AuthCodeFlowErrorResponse,
  AuthCodeFlowSuccessResponse,
} from "vue3-google-signin/dist/composables/useTokenClient";

const handleOnSuccess = (response: AuthCodeFlowSuccessResponse) => {
  console.log(response);
  console.log("Access Token: ", response.access_token);
};

const handleOnError = (errorResponse: AuthCodeFlowErrorResponse) => {
  console.log("Error: ", errorResponse);
};

const { isReady, login } = useTokenClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
  // other options
});
</script>
