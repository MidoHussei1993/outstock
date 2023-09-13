<template>
  <layout :transparent="true">
    <breadcrumb-area title="Blog 3 Column" subtitle="Blog 3 Column"/>
    <blog-three-col-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import BlogThreeColArea from "~~/components/blogs/BlogThreeColArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    BlogThreeColArea,
  },
  setup() {
    useHead({
      title: "Blog 3 Col",
    });
  },
});
</script>
