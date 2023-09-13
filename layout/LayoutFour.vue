<template>
  <div>
    <Header/>
    <main class="box-white grey-bg pt-50">
        <div class="container">
          <div class='box-white-inner'>
            <div class="row">
              <div class='col-xl-12'>
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer-two/>
    <back-to-top />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./headers/Header.vue";
import FooterTwo from "./footers/FooterTwo.vue";
import BackToTop from "~~/components/back-to-top/BackToTop.vue";

export default defineComponent({
  components: { Header, BackToTop, FooterTwo },
});
</script>
