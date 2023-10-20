<template>
  <section class="profile__area pt-120 pb-50 grey-bg">
    <div class="container">
      <div class="profile__basic-inner pb-20 bg-white">
        <div class="row align-items-center">
          <div class="col-xxl-6 col-md-6">
            <div
              class="profile__basic d-md-flex align-items-center"
              v-if="user"
            >
              <div
                class="profile__basic-thumb mr-30"
                v-if="user.profile_picture"
              >
                <img :src="user.profile_picture" alt="" />
              </div>
              <div class="profile__basic-content">
                <h3 class="profile__basic-title">
                  <span v-if="user.name">
                    {{ user.name }}
                  </span>
                </h3>
                <!-- <p>
                  {{ state.cart_products.length }} Running Products
                  <nuxt-link href="/cart">View Cart</nuxt-link>
                </p> -->
              </div>
            </div>
          </div>
          <!-- <div class="col-xxl-6 col-md-6">
            <div
              class="profile__basic-cart d-flex align-items-center justify-content-md-end"
            >
              <div class="cart-info mr-10">
                <nuxt-link href="/cart">View cart</nuxt-link>
              </div>
              <div class="cart-item">
                <nuxt-link href="/cart">
                  <i class="fa-regular fa-basket-shopping"></i>
                  <sofferspan class="cart-quantity">{{
                    state.cart_products.length
                  }}</sofferspan>
                </nuxt-link>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import { useCartStore } from "~~/store/useCart";
const props = defineProps({
  user: { type: Object, default: () => {} },
});
const state = useCartStore();
</script>
