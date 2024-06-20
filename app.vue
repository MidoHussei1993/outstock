<template>
  <NuxtPage></NuxtPage>
</template>
<script lang="ts" setup>
import { useCartStore } from "./store/useCart";

const store = useCartStore();
onMounted(() => {
  if (localStorage.getItem("token")) {
    store.getUserCart();
  }
});
</script>
