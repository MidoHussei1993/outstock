<template>
  <div>
    <Loader v-if="loading" />
    <header-two />
    <div class="" style="position: relative; top: 84px">
      <slot></slot>
    </div>
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
  setup() {
    const { loading } = useLoader();

    return { loading };
  },
});
</script>
