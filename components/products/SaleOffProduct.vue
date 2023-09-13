<template>
  <section class="sale__area pb-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section__title-wrapper text-center mb-55">
            <div class="section__title mb-10">
              <h2>Sale Off</h2>
            </div>
            <div class="section__sub-title">
              <p>
                Mirum est notare quam littera gothica quam nunc putamus parum
                claram!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
        <div
          class="col"
          v-for="(item, i) in store.products
            .filter((p) => p.sale_of_per)
            .slice(0, 5)"
          :key="i"
        >
          <product-item :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// external
import { Carousel, Slide } from "vue3-carousel";
import { defineComponent } from "vue";
// internal
import ProductItem from "./ProductItem.vue";
import { useProductsStore } from "~~/store/useProducts";

export default defineComponent({
  components: { ProductItem, Carousel, Slide },
  setup() {
    const store = useProductsStore();
    return {
      store,
    };
  },
});
</script>

<style scoped>
.sale__area .carousel__slide.sale__item {
  padding: 0 15px;
}
</style>
