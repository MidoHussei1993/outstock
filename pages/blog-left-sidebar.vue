<template>
  <layout :transparent="true">
    <breadcrumb-area title="News & Blog" subtitle="Blog Standard"/>
    <blog-area :left_side="true"/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import BlogArea from "~~/components/blogs/BlogStandardArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    BlogArea,
  },
  setup() {
    useHead({
      title: "Blog",
    });
  },
});
</script>
