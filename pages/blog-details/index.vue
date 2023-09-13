<template>
  <layout :white_bg="true">
    <blog-details-area :item="blogData[12]"/>
  </layout>
</template>

<script lang="ts">
import { defineComponent  } from "vue";
import Layout from "~~/layout/Layout.vue";
import blogData from "~~/mixins/blogData";
import BlogDetailsArea from "~~/components/blog-details/BlogDetailsArea.vue";


export default defineComponent({
  mixins:[blogData],
  components: {
    Layout,
    BlogDetailsArea,
  },
  setup() {

    useHead({
      title: "Blog Details",
    });
  },
});
</script>
