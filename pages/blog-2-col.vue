<template>
  <layout :transparent="true">
    <breadcrumb-area title="Blog 2 Column" subtitle="Blog 2 Column"/>
    <blog-two-col-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import BlogTwoColArea from "~~/components/blogs/BlogTwoColArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    BlogTwoColArea,
  },
  setup() {
    useHead({
      title: "Blog 2 Col",
    });
  },
});
</script>
