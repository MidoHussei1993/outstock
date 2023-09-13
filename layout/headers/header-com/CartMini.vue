<template>
    <div class="mini-cart">
    <div v-if="store.cart_products.length === 0">
        <h5>Your cart is empty</h5>
    </div>
      <div v-if="store.cart_products.length > 0" class="mini-cart-inner">
          <ul :class="`mini-cart-list ${store.cart_products.length === 1 ? 'slider-height_1' : 
          store.cart_products.length === 2 ? 'slider-height_2' : 'slider-height'}`">
              <li v-for="(item,i) in store.cart_products" :key="i">
                  <div class="cart-img f-left">
                      <nuxt-link :href="`/product-details/${item.id}`">
                          <img :src="item.img" alt="" />
                      </nuxt-link>
                  </div>
                  <div class="cart-content f-left text-left">
                      <h5>
                        <nuxt-link :href="`/product-details/${item.id}`">
                            <span v-html="item.title"></span>
                        </nuxt-link>
                      </h5>
                      <div class="cart-price">
                          <span class="ammount">{{item.orderQuantity}}<i class="fal fa-times"></i></span>
                          <span class="price">$ {{item.price}}</span>
                      </div>
                  </div>
                  <div class="del-icon f-right mt-30" @click="store.remover_cart_products(item)">
                      <a href="#">
                          <i class="fal fa-times"></i>
                      </a>
                  </div>
              </li>
          </ul>
          <div class="total-price d-flex justify-content-between mb-30">
              <span>Subtotal:</span>
              <span>${{store.totalPriceQuantity.total.toFixed(2)}}</span>
          </div>
          <div class="checkout-link">
              <nuxt-link href="/cart" class="os-btn">view Cart</nuxt-link>
              <nuxt-link class="os-btn os-btn-black" href="/checkout">Checkout</nuxt-link>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '~~/store/useCart';

export default defineComponent({
  setup () {
    const store = useCartStore();
    return {store}
  }
})
</script>
