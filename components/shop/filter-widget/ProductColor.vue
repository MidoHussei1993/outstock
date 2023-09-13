<template>
  <div class="sidebar__widget mb-60">
    <div class="sidebar__widget-title mb-20">
      <h3>Choose Color</h3>
    </div>
    <div class="sidebar__widget-content">
      <div class="color__pick">
        <form>
          <ul>
            <li v-for="(color, i) in allColor?.slice(0, 8)" :key="i">
              <button
                @click.prevent="state.handleColor(color)"
                type="button"
                :class="`color color-${i + 1} ${state.activeCls === color ? `active-${i+1}` : ''}`"
              >
            </button>
            </li>
          </ul>
        </form>
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
    let allColor = [] as any;
    state.products.forEach((product) => {
      let uniqueColor = new Set(product.colors);
      allColor = [...new Set([...allColor, ...uniqueColor])];
    });
    return { state, allColor };
  },
});
</script>
