<template>
  <div>
    <Header :transparent="transparent" :white_bg="white_bg" />
    <slot></slot>
    <Footer />
    <back-to-top />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./headers/HeaderTwo.vue";
import Footer from "./footers/Footer.vue";
import BackToTop from "~~/components/back-to-top/BackToTop.vue";

export default defineComponent({
  components: { Header, Footer, BackToTop },
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
    white_bg: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
