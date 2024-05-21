<template>
  <div
    class="loader d-flex flex-column align-items-center justify-content-center"
  >
    <div>
      <client-only>
        <Vue3Lottie
          :animationData="animationData.default"
          :height="400"
          :width="400"
        />
      </client-only>
    </div>
    <h3>Loading...</h3>
  </div>
</template>

<script setup>
import * as animationData from "@/assets/lottie/loader.json";
// import "vue3-lottie/dist/src/components/Vue3Lottie.css";
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: wait;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 9999;
}
</style>
