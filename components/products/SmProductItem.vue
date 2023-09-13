<template>
  <div
    class="features__product-wrapper d-flex mb-20"
  >
    <div class="features__product-thumb mr-15">
      <nuxt-link :href="`/product-details/${prd.id}`">
        <img
          :src="prd.img"
          alt="pro-sm-1"
          style="width: 86px; height: 110px;object-fit: cover;"
        />
      </nuxt-link>
    </div>
    <div class="features__product-content">
      <h5>
        <nuxt-link :href="`/product-details/${prd.id}`">
          <span v-html="prd.title"></span>
        </nuxt-link>
      </h5>
      <div v-if="prd.topRated" class="rating rating-shop mb-5">
          <ul>
            <li><span><i class="fas fa-star"></i></span></li>
            <li><span><i class="fas fa-star"></i></span></li>
            <li><span><i class="fas fa-star"></i></span></li>
            <li><span><i class="fas fa-star"></i></span></li>
            <li><span><i class="fal fa-star"></i></span></li>
          </ul>
        </div>
      <div class="price">
        <span>${{prd.price.toFixed(2)}}</span>
        <span v-if="prd.sale_of_per" class="price-old">
          ${{(prd.price - prd.price * prd.sale_of_per / 100).toFixed(2)}}
        </span>
        <div class="add-cart p-absolute transition-3">
          <a @click.prevent="state.add_cart_product(prd)" href="#">+ Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,PropType } from "vue";
import { useCartStore } from "~~/store/useCart";
import ProductType from "~~/types/productType";

export default defineComponent({
  props:{
    prd:{
      type: Object as PropType<ProductType>,
      default: {},
      required: true,
    }
  },
  setup() {
    const state = useCartStore();
    return {state}
  }
});
</script>
