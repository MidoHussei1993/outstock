<template>
  <layout :transparent="true">
    <breadcrumb-area title="Cart" subtitle="Cart"/>
    <cart-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import CartArea from "~~/components/cart-wishlists/CartArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    CartArea,
  },
  setup() {
    useHead({
      title: "Cart",
    });
  },
});
</script>
