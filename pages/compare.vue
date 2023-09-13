<template>
  <layout :transparent="true">
    <breadcrumb-area title="Compare" subtitle="Compare"/>
    <compare-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import CompareArea from "~~/components/compare/CompareArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    CompareArea,
  },
  setup() {
    useHead({
      title: "Compare",
    });
  },
});
</script>
