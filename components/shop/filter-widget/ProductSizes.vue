<template>
  <div class="sidebar__widget mb-55">
    <div class="sidebar__widget-title mb-30">
      <h3>Any Size</h3>
    </div>
    <div class="sidebar__widget-content">
      <div class="size">
        <ul>
          <li
            v-for="(size, i) in allSizes"
            :key="i"
            :class="`${state.activeCls === size ? 'active' : ''}`"
          >
            <a @click.prevent="state.handleSize(size)" href="#">{{ size }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductsStore } from "~~/store/useProducts";

export default defineComponent({
  setup() {
    const state = useProductsStore();
    let allSizes = [] as any;
    state.products.forEach((product) => {
      let uniqueSizes = new Set(product.sizes);
      allSizes = [...new Set([...allSizes, ...uniqueSizes])];
    });
    return { state, allSizes };
  },
});
</script>
