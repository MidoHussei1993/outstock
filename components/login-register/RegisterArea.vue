<template>
  <section class="login-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="basic-login">
            <h3 class="text-center mb-60">Signup From Here</h3>
            <register-form />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterForm from "../forms/RegisterForm.vue";

export default defineComponent({
  components: { RegisterForm },
  setup() {
    return {};
  },
});
</script>
