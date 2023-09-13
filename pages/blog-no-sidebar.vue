<template>
  <layout :transparent="true">
    <breadcrumb-area title="News & Blog" subtitle="Blog Standard"/>
    <blog-no-sidebar-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import BlogNoSidebarArea from "~~/components/blogs/BlogNoSidebarArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    BlogNoSidebarArea,
  },
  setup() {
    useHead({
      title: "Blog",
    });
  },
});
</script>
