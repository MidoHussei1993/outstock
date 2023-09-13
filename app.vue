<template>
  <NuxtPage></NuxtPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from './store/useCart';

export default defineComponent({
  setup() {
    const state = useCartStore();
    return {state}
  },
  created(){
    this.state.get_cart_products;
  }
})
</script>

