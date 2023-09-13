<template>
  <section class="blog__area pt-100 pb-100">
    <div class="container">
      <div class="row">
          <div
            v-for="(blog, i) in filteredRows.slice(
              pageStart,
              pageStart + countOfPage
            )"
            :key="i"
            class="col-xl-6 col-lg-6 col-md-6"
          >
            <blog-standard-item :blog="blog" :style_2="true" />
          </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <pagination
            :items="blogData.filter((b) => b.blog === 'blog-standard')"
            :count-of-page="4"
            @paginatedData="paginatedData"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import blogData from "~~/mixins/blogData";
import BlogType from "~~/types/blogType";
import Pagination from "~~/ui/Pagination.vue";
import BlogStandardItem from "./BlogStandardItem.vue";

export default defineComponent({
  components: { Pagination, BlogStandardItem },
  mixins: [blogData],
  data() {
    return {
      filteredRows: [] as BlogType[],
      pageStart: 0 as number,
      countOfPage: 4 as number,
    };
  },
  methods: {
    paginatedData(
      filteredRows: BlogType[],
      pageStart: number,
      countOfPage: number
    ) {
      this.filteredRows = filteredRows;
      this.pageStart = pageStart;
      this.countOfPage = countOfPage;
    },
  },
  setup() {
    return {};
  },
});
</script>
