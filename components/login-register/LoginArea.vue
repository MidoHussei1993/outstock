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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
// import {
//   GoogleSignInButton,
//   type CredentialResponse,
// } from "nuxt-vue3-google-signin";
import { defineComponent } from "vue";
import LoginForm from "../forms/LoginForm.vue";
</script>
