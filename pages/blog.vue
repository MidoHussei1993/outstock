<template>
  <layout :transparent="true">
    <breadcrumb-area title="News & Blog" subtitle="Blog Standard"/>
    <blog-standard-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import BlogStandardArea from "~~/components/blogs/BlogStandardArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    BlogStandardArea,
  },
  setup() {
    useHead({
      title: "Blog",
    });
  },
});
</script>
