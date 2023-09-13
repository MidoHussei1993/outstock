<template>
  <section class="product__area pt-60 pb-65">
      <div class="container">
          <div class="row">
              <div class="col-xl-12">
                  <div class="section__title-wrapper text-center mb-55">
                      <div class="section__title mb-10">
                          <h2>Trending Products</h2>
                      </div>
                      <div class="section__sub-title">
                          <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="col-xl-6 col-lg-6">
                <div class="product__slider-3">
                    <div class="row">
                      <div
                        v-for="item in trending_products.slice(0,2)"
                        :key="item.id"
                        class="col-lg-6 col-md-6 product__item"
                      >
                        <product-item :item="item" />
                      </div>
                    </div>
                  </div>
                  <div class="product__banner mb-30">
                      <nuxt-link :href="`/product-details/${big_item_2.id}`" class="w-img">
                        <img :src="big_item_2.big_img" alt="product_img">
                      </nuxt-link>
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                  <div class="product__banner w-img pb-25 mb-30 p-relative">
                      <nuxt-link :href="`/product-details/${big_item_1.id}`" class="w-img">
                        <img :src="big_item_1.big_img" alt="product_img">
                      </nuxt-link>
                      <div class="product__banner-content p-absolute">
                          <h4>
                            <nuxt-link :href="`/product-details/${big_item_1.id}`">
                              <span v-html="big_item_1.title"></span>
                            </nuxt-link>
                          </h4>
                          <nuxt-link :href="`/product-details/${big_item_1.id}`" class="link-btn">
                            discover now
                          </nuxt-link>
                      </div>
                  </div>
                  <div class="product__slider-3">
                    <div class="row">
                      <div
                        v-for="item in trending_products.slice(2,4)"
                        :key="item.id"
                        class="col-lg-6 col-md-6 product__item"
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
    const big_item_1 = store.products.filter(p => p.big_img)[0];
    const big_item_2 = store.products.filter(p => p.big_img)[1];
    const trending_products = store.products.filter(p => p.trending).slice(0,4)
    return {
      big_item_1,
      big_item_2,
      trending_products,
    }
  }
});
</script>
