<template>
  <layout :transparent="true">
    <breadcrumb-area title="Wishlist" subtitle="Wishlist"/>
    <wishlist-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import WishlistArea from "~~/components/cart-wishlists/WishlistArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    WishlistArea,
  },
  setup() {
    useHead({
      title: "Wishlist",
    });
  },
});
</script>
