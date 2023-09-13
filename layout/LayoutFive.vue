<template>
  <div>
    <header-two />
    <slot></slot>
    <Footer />
    <back-to-top />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderTwo from "./headers/HeaderTwo.vue";
import Footer from "./footers/Footer.vue";
import BackToTop from "~~/components/back-to-top/BackToTop.vue";

export default defineComponent({
  components: { BackToTop, HeaderTwo, Footer },
});
</script>
