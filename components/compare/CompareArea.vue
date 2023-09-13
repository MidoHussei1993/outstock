<template>
  <section class="compare__area pt-120 pb-120">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
              <client-only>
                <div v-if="state.compare.length === 0" class='text-center'>
                  <h3>No Compare product</h3>
                  <nuxt-link class="os-btn os-btn-black mt-20" to="/shop">
                     Shop Now
                  </nuxt-link>
                </div>
                <div v-if="state.compare.length > 0" class="tp-compare-table text-center">
                    <table class="table table-responsive">
                        <tbody>
                          <tr>
                            <th>Product</th>
                            <td v-for="(item,i) in state.compare" :key="i">
                                <div class="tp-compare-thumb">
                                    <img :src="item.img" alt="">
                                    <h4 class="tp-compare-product-title">
                                        <a href="#" v-html="item.title"></a>
                                    </h4>
                                </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Description</th>
                            <td v-for="(item,i) in state.compare" :key="i">
                                <div class="tp-compare-desc">
                                    <p>{{item.sm_desc}}</p>
                                </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Price</th>
                            <td v-for="(item,i) in state.compare" :key="i">
                                <div class="tp-compare-price">
                                  <span>${{item.price.toFixed(2)}}</span>
                                   <span v-if="item.old_price" class="old-price">${{item.old_price}}</span>
                                </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Add to cart</th>
                            <td v-for="(item,i) in state.compare" :key="i">
                                <div @click.prevent="cartState.add_cart_product(item)" class="tp-compare-add-to-cart">
                                    <a href="#" class="os-btn os-btn-black">Add to Cart</a>
                                </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Rating</th>
                            <td v-for="(item,i) in state.compare" :key="i">
                                <div class="tp-compare-rating">
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <strong class="mx-2">{{item.rating}}</strong>
                                </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Remove</th>
                            <td v-for="(item,i) in state.compare" :key="i">
                                <div class="tp-compare-remove">
                                    <button @click="state.removeCompare(item)">
                                      <i class="fal fa-trash-alt"></i>
                                    </button>
                                </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                </div>
              </client-only>
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '~~/store/useCart';
import { useCompareStore } from '~~/store/useCompare';

export default defineComponent({
  setup () {
    const state = useCompareStore();
    const cartState = useCartStore()
    return {state,cartState}
  },
  created(){
    this.state.get_compare_products
  }
})
</script>
