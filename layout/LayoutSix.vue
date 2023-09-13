<template>
  <div>
    <header-three />
    <slot></slot>
    <Footer />
    <back-to-top />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderThree from "./headers/HeaderThree.vue";
import Footer from "./footers/Footer.vue";
import BackToTop from "~~/components/back-to-top/BackToTop.vue";

export default defineComponent({
  components: { HeaderThree,Footer,BackToTop },
});
</script>
