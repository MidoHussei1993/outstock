<template>
  <layout :transparent="true">
    <breadcrumb-area title="Shop" subtitle="Shop"/>
    <shop-three-col/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import ShopThreeCol from "~~/components/shop/ShopThreeCol.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    ShopThreeCol,
  },
  setup() {
    useHead({
      title: "Shop 3 Column",
    });
  },
});
</script>
