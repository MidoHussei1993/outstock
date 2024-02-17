<template>
  <NuxtPage></NuxtPage>
</template>
<script lang="ts" setup> 

import { useCartStore } from "./store/useCart";
 
const store = useCartStore();
onMounted(() => {
 
  store.getUserCart();
});
</script>
