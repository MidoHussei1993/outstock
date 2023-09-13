<template>
  <div class="product__view-area pt-60 pb-60">
    <div class="container custom-container-2">
        <div class="row">
            <div class="col-xl-12">
                <div class="section__wrapper text-center">
                    <h3 class="section__title-2"><span>BESTSELLER PRODUCTS</span></h3>
                    <p>Eodem modo typi, qui nunc nobis videntur parum clari</p>
                </div>
            </div>
        </div>
        <div class="row mt-40">
            <div class="col-xl-6 col-lg-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div v-for="(item,i) in sm_best_prd.slice(0,2)" :key="i" class="col-xl-6 col-lg-12 col-md-6">
                                <div class="product__item mb-40">
                                  <product-item-two :item="item" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="product__big-image effectThree mb-40">
                            <nuxt-link :href="`/product-details/${big_prd_1.id}`">
                              <img :src="big_prd_1.big_img" alt="">
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-lg-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product__big-image effectThree mb-40">
                            <nuxt-link :href="`/product-details/${big_prd_2.id}`">
                              <img :src="big_prd_2.big_img" alt="product img">
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="row">
                            <div v-for="(item,i) in sm_best_prd.slice(2,4)" :key="i" class="col-xl-6 col-lg-12 col-md-6">
                                <div class="product__item mb-40">
                                  <product-item-two :item="item" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useProductsStore } from "~~/store/useProducts";
import ProductItemTwo from './ProductItemTwo.vue';

export default defineComponent({
  components: { ProductItemTwo },
  setup() {
    const store = useProductsStore();
    const best_sale_prd = store.products.filter((p) => p.bestSeller);
    const big_prd_1 = best_sale_prd.filter(p => p.big_img)[0];
    const big_prd_2 = best_sale_prd.filter(p => p.big_img)[1];
    const sm_best_prd = best_sale_prd.filter(p => !p.big_img);
    return {
      big_prd_1,
      big_prd_2,
      sm_best_prd,
    }
  }
})
</script>
