<template>
  <div>
    <Header :header_big="true" />
    <slot></slot>
    <div class="box-25 box-m-15 box-pb-40">
      <Footer/>
    </div>
    <back-to-top />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./headers/Header.vue";
import Footer from "./footers/Footer.vue";
import BackToTop from "~~/components/back-to-top/BackToTop.vue";

export default defineComponent({
  components: { Header, Footer, BackToTop },
});
</script>
