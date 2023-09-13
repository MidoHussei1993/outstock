<template>
  <layout :transparent="true">
    <breadcrumb-area title="Shop" subtitle="Shop"/>
    <shop-four-col/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import ShopFourCol from "~~/components/shop/ShopFourCol.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    ShopFourCol,
  },
  setup() {
    useHead({
      title: "Shop 4 Column",
    });
  },
});
</script>
