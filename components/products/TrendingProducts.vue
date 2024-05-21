<template>
  <section
    class="product__area pt-60"
    v-if="mostSoledProducts && mostSoledProducts.length"
  >
    <div
      :class="`${
        style_2 ? 'custom-container' : style_3 ? 'container-fluid' : 'container'
      }`"
    >
      <div class="row">
        <div class="col-xl-12">
          <div
            :class="`section__title-wrapper text-center mb-4 ${
              style_2 ? 'p-relative' : ''
            }`"
          >
            <div class="section__title mb-10">
              <h2>
                {{ $t("c.mostSoledProducts") }}
              </h2>
            </div>
            <!-- <div class="section__sub-title">
              <p>
                Mirum est notare quam littera gothica quam nunc putamus parum
                claram!
              </p>
            </div> -->
          </div>
        </div>
      </div>
      <div :class="`product__slider ${style_2 ? 'product__slider-4' : ''}`">
        <div class="row">
          <div
            v-for="(item, index) in mostSoledProducts"
            :key="item.id"
            class="mb-3 col-xl-2 col-lg-3 col-md-4 product__item"
          >
            <product-item :item="item" />
          </div>
        </div>
      </div>
      <!-- <div class="row" v-if="perView < trending_prd.length">
        <div class="col-xl-12">
          <div class="product__load-btn text-center mt-25">
            <a @click.prevent="handleLoadMore" href="#" class="os-btn os-btn-3">Load More</a>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductsStore } from "~~/store/useProducts";
import ProductItem from "./ProductItem.vue";

export default defineComponent({
  components: { ProductItem },
  data() {
    return {
      perView: this.$props.style_3 ? 12 : 8,
    };
  },
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
    style_3: {
      type: Boolean,
      default: false,
    },
    mostSoledProducts: {
      type: Array,
      default: [],
    },
  },
  methods: {
    handleLoadMore() {
      this.perView = this.perView + 2;
    },
  },
  setup() {
    const store = useProductsStore();
    const trending_prd = store.products.filter((p) => p.trending);
    return {
      trending_prd,
    };
  },
});
</script>
