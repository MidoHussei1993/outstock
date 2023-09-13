<template>
  <section class="sale__area pb-55">
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
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12">
          <div class="sale__area-slider-2">
            <div class="row">
              <div
                v-for="(item, i) in sell_products"
                :key="i"
                class="col-xl-2 col-lg-3 col-md-4 col-6 sale__item"
              >
                <product-item :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductsStore } from "~~/store/useProducts";
import ProductItem from "./ProductItem.vue";

export default defineComponent({
  components: { ProductItem },
  setup() {
    const store = useProductsStore();
    const sell_products = store.products
      .filter((p) => typeof p.sale_of_per === "number" && p.sale_of_per > 0)
      .slice(0, 12);
    return {
      sell_products,
    };
  },
});
</script>
