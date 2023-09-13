<template>
  <div class="product__wrapper">
      <div class="product__thumb">
          <nuxt-link :href="`/product-details/${item.id}`" class="w-img">
              <img :src="item.img" alt="product-img">
              <img class="product__thumb-2" :src="item.thumb_img" alt="product-img">
          </nuxt-link>
          <div class="product__action-3 transition-3">
              <a @click.prevent="store.add_cart_product(item)" href="#" class="action-btn"> 
                <i class="fal fa-plus"></i>Add to cart
              </a>
              <a @click.prevent="store.initialOrderQuantity" href="#" class="action-btn" data-bs-toggle="modal" :data-bs-target="`#productModalId-${item.id}`">
                <i class="fal fa-eye"></i>
              </a>
          </div>
          <div v-if="item.sale_of_per || item.new" class="product__sale product__sale-3">
              <span v-if="item.new || item.sale_of_per" class="new">new</span>
              <span v-if="item.sale_of_per" class="percent">-{{item.sale_of_per}}%</span>
          </div>
      </div>
      <div class="product__content product__content-2 p-relative text-center">
          <div class="product__content-inner">
              <div class="rating">
                  <a href="#"><i class="fal fa-star"></i></a>
                  <a href="#"><i class="fal fa-star"></i></a>
                  <a href="#"><i class="fal fa-star"></i></a>
                  <a href="#"><i class="fal fa-star"></i></a>
                  <a href="#"><i class="fal fa-star"></i></a>
              </div>
              <h4>
                <nuxt-link :href="`/product-details/${item.id}`">
                  <span v-html="item.title"></span>
                </nuxt-link>
              </h4>
              <div class="product__price-3">
                  <span>${{item.price.toFixed(2)}}</span>
                  <span v-if="item.old_price" class="old-price"><del>${{item.old_price}}</del></span>
              </div>
          </div>
      </div>
  </div>

  <!-- product modal start -->
  <product-modal :item="item"/>
  <!-- product modal end -->
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue';
import ProductType from '~/types/productType';
import { useCartStore } from '~~/store/useCart';
import ProductModal from '../common/modals/ProductModal.vue';

export default defineComponent({
  components: { ProductModal },
  props:{
    item:{
      type:Object as PropType<ProductType>,
      default:{},
      required:true
    }
  },
  setup() {
    const store = useCartStore();
    return {store}
  }
})
</script>
