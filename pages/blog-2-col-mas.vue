<template>
  <layout :transparent="true">
    <breadcrumb-area title="Blog 2 Col Masonry" subtitle="Blog 2 Col Masonry"/>
    <blog-two-col-masonry-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import BlogTwoColMasonryArea from "~~/components/blogs/BlogTwoColMasonryArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    BlogTwoColMasonryArea,
  },
  setup() {
    useHead({
      title: "Blog 2 Col Masonry",
    });
  },
});
</script>
