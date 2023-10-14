<template>
  <layout :transparent="true">
    <breadcrumb-area :title="$t('c.cart')" :subtitle="$t('c.cart')" />
    <cart-area />
  </layout>
</template>

<script lang="ts" setup>
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import CartArea from "~~/components/cart-wishlists/CartArea.vue";

useHead({
  title: "Cart",
});
</script>
