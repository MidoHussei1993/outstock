<template>
  <div class="product__wrapper mb-40">
      <div class="row">
          <div class="col-xl-4 col-lg-4">
              <div class="product__thumb">
                  <nuxt-link :href="`/product-details/${item.id}`" class="w-img">
                      <img :src="item.img" alt="product-img">
                      <img class="product__thumb-2" :src="item.thumb_img" alt="product-img">
                  </nuxt-link>
                  <div v-if="item.sale_of_per || item.new" class="product__sale">
                    <span v-if="item.new || item.sale_of_per" class="new">new</span>
                    <span v-if="item.sale_of_per" class="percent">-{{item.sale_of_per}}%</span>
                 </div>
              </div>
          </div>
          <div class="col-xl-8 col-lg-8">
              <div class="product__content p-relative">
                  <div class="product__content-inner list">
                      <h4>
                        <nuxt-link :href="`/product-details/${item.id}`">
                          <span v-html="item.title"></span>
                        </nuxt-link>
                      </h4>
                      <div class="product__price-2 mb-10">
                        <span>${{typeof item.price === 'number' ? item.price.toFixed(2) : item.price}}</span>
                      <span v-if="item.old_price" class="old-price">${{item.old_price}}</span>
                      </div>
                      <p>{{item.sm_desc}}</p>
                      <div class="product__list mb-30">
                          <ul>
                              <li v-for="(list,i) in item.details.details_list?.slice(0,3)" :key="i">
                                <span>{{list}}</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="add-cart-list d-sm-flex align-items-center">
                      <a href="#" class="add-cart-btn mr-10">+ Add to Cart</a>
                      <div class="product__action-2 transition-3 mr-20">
                        <a @click.prevent="wishlistState.add_wishlist_product(item)" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
                          <i class="fal fa-heart"></i>
                        </a>
                        <a @click.prevent="compareState.add_compare_product(item)" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                            <i class="fal fa-sliders-h"></i>
                        </a>
                        <!-- Button trigger modal -->
                        <a @click.prevent="store.initialOrderQuantity" href="#" data-bs-toggle="modal" :data-bs-target="`#productModalListId-${item.id}`">
                            <i class="fal fa-search"></i>
                        </a>
                      </div>
                  </div>
                  <!-- shop modal start -->
              </div>
          </div>
      </div>
  </div>

  <!-- product modal start -->
  <product-modal :item="item" :list="true"/>
  <!-- product modal end -->
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue'
import ProductType from '~~/types/productType';
import ProductModal from '../common/modals/ProductModal.vue';
import { useCartStore } from '~~/store/useCart';
import { useCompareStore } from '~~/store/useCompare';
import { useWishlistStore } from '~~/store/useWishlist';

export default defineComponent({
  components: { ProductModal },
  props:{
    item:{
      type:Object as PropType<ProductType>,
      default:{},
      required:true
    }
  },
  setup () {
    const store = useCartStore();
    const compareState = useCompareStore();
    const wishlistState = useWishlistStore();
    return {store,compareState,wishlistState}
  }
})
</script>

<style scoped>

</style>