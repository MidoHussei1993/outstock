<template>
  <section class="shop__area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="shop__content-area">
            <div
              class="shop__header d-sm-flex justify-content-between align-items-center mb-40"
            >
              <div class="shop__header-left">
                <div class="show-text " v-if="pagination && pagination.total_pages">
                  <span
                    > 
                    {{ $t('c.currentPage') }}
                    {{pagination.current_page }}
                    {{ $t('c.of') }}
{{pagination.total_pages }} </span
                  >
                </div>
              </div>
              <div
                class="shop__header-right d-flex align-items-center justify-content-between justify-content-sm-end"
              >
                <!-- sort-filtering -->
                <!-- <sort-filtering /> -->
                <!-- sort-filtering -->
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="pills-grid-tab"
                      data-bs-toggle="pill"
                      href="#pills-grid"
                      role="tab"
                      aria-controls="pills-grid"
                      aria-selected="true"
                      ><i class="fas fa-th"></i
                    ></a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-list-tab"
                      data-bs-toggle="pill"
                      href="#pills-list"
                      role="tab"
                      aria-controls="pills-list"
                      aria-selected="false"
                      ><i class="fas fa-list-ul"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-grid"
                role="tabpanel"
                aria-labelledby="pills-grid-tab"
              >
                <div class="row custom-row-10">
                  <div
                    v-for="(item, i) in products"
                    :key="i"
                    class="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10"
                  >
                    <product-item :item="item" />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-list"
                role="tabpanel"
                aria-labelledby="pills-list-tab"
              >
                <product-list-item
                  v-for="(item, i) in products"
                  :key="i"
                  :item="item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import SortFiltering from "./filter-widget/SortFiltering.vue";
import { useProductsStore } from "~~/store/useProducts";
import ProductItem from "../products/ProductItem.vue";
import ProductListItem from "../products/ProductListItem.vue";
import Pagination from "~~/ui/Pagination.vue";
import { IPagination, IProduct } from "~~/types";

const props = defineProps({
  products: { type: Array as PropType<IProduct[]>, default: () => [] },
    pagination: { type: Object as PropType<IPagination>, default: () =>{} },
});

const state = useProductsStore();
const filteredRows = ref<any[]>([]);
const countOfPage = ref<number>(12);
const pageStart = ref<number>(0);

const paginatedData = (
  filteredRows: [],
  pageStart: number,
  countOfPage: number
) => {
  //   filteredRows.value = filteredRows;
  //   pageStart.value = pageStart;
  //   countOfPage.value = countOfPage;
};
</script>
