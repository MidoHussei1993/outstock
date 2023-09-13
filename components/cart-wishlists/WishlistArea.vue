<template>
  <client-only>
  <section class="cart-area pt-100 pb-100">
    <div class="container">
        <div class="row">
            <div class="col-12">
              <div v-if="state.wishlists.length === 0" class='text-center'>
                  <h3>No wishlist product</h3>
                  <nuxt-link class="os-btn os-btn-black mt-20" to="/shop">
                     Shop Now
                  </nuxt-link>
                </div>
                <form v-if="state.wishlists.length > 0" action="#">
                    <div class="table-content table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="product-thumbnail">Images</th>
                                    <th class="cart-product-name">Product</th>
                                    <th class="product-price">Unit Price</th>
                                    <th class="product-quantity">Quantity</th>
                                    <th class="product-subtotal">Total</th>
                                    <th class="product-remove">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <wishlist-item v-for="(item,i) in state.wishlists" :key="i" :item="item"/>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </section>
</client-only>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWishlistStore } from '~~/store/useWishlist';
import WishlistItem from './WishlistItem.vue';

export default defineComponent({
  components: { WishlistItem },
  setup () {
    const state = useWishlistStore();
    return {state}
  },
  created(){
    this.state.get_wishlist_products
  }
})
</script>
