<template>
  <div class="loader">
    <client-only>
      <Vue3Lottie
        :animationData="animationData.default"
        :height="400"
        :width="400"
      />
    </client-only>
  </div>
</template>

<script setup>
import * as animationData from "@/assets/lottie/loader.json";
import "vue3-lottie/dist/style.css";
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
}
</style>
