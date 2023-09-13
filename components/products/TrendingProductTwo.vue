<template>
  <section class="product__area pt-60 pb-100">
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
      <div class="container-fluid">
          <div class="product__banner p-relative">
              <div class="product__banner-inner p-absolute fix d-none d-lg-block">
                  <div class="product__banner-img fix">
                      <nuxt-link :href="`/product-details/${big_item?.id}`">
                        <img :src="big_item?.big_img" alt="product-banner">
                      </nuxt-link>
                  </div>
                  <div class="product__banner-content p-absolute">
                      <h4>
                        <nuxt-link :href="`/product-details/${big_item?.id}`">
                          <span v-html="big_item?.title"></span>
                        </nuxt-link>
                      </h4>
                      <nuxt-link :href="`/product-details/${big_item?.id}`" class="link-btn">
                        discover now
                      </nuxt-link>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6">

                    <div class="product__slider-2">
                      <div class="row">
                        <div
                          v-for="item in trending_products"
                          :key="item.id"
                          class="col-lg-4 col-md-6 product__item"
                        >
                          <product-item :item="item" />
                        </div>
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
    const big_item = store.products.find(p => p.big_img);
    const trending_products = store.products.filter(p => p.trending).slice(0,6)
    return {
      big_item,
      trending_products,
    }
  }
});
</script>

