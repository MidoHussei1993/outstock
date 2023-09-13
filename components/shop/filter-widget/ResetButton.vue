<template>
  <div class="reset-button mt-20 mb-30">
    <button class="os-btn os-btn-black" @click="state.handleResetFilter">
      Reset Filter
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductsStore } from "~~/store/useProducts";

export default defineComponent({
  setup() {
    const state = useProductsStore();
    return { state };
  },
});
</script>

