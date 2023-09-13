<template>
  <div
    :class="`shop-pagination-wrapper ${style_2?'':'d-md-flex justify-content-between align-items-center'}`"
  >
    <div class="basic-pagination">
      <ul>
        <li class="page-item"
            :class="{'disabled': (currPage === 1)}"
            @click.prevent="setPage(currPage-1)">
            <a href="#">
              <i class="fal fa-angle-left"></i>
            </a>
        </li>

        <li class="page-item"
            v-for="n in totalPage"
            @click.prevent="setPage(n)" :key="n">
            <a :class="[`page-link`, {'active': (currPage === (n))}]" href="">
                {{n}}
            </a>
        </li>
        <li class="page-item"
            :class="{'disabled': (currPage === totalPage)}"
            @click.prevent="setPage(currPage + 1)">
            <a href="#">
              <i class="fal fa-angle-right"></i>
            </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: [],
    },
    countOfPage: {
      type: Number,
      default: 8,
    },
    paginationClass: {
      type: String,
    },
    style_2:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      currPage: 1,
    };
  },
  computed: {
    filteredRows() {
      return this.items;
    },
    pageStart() {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage() {
      return Math.ceil(this.filteredRows.length / this.countOfPage);
    },
  },
  methods: {
    setPage(idx: number) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
      window.scrollTo(0, 0);
      this.$emit(
        "paginatedData",
        this.filteredRows,
        this.pageStart,
        this.countOfPage
      );
    },
  },
  mounted() {
    this.$emit(
      "paginatedData",
      this.filteredRows,
      this.pageStart,
      this.countOfPage
    );
  },
  setup() {
    return {};
  },
});
</script>

