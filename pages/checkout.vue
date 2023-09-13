<template>
  <layout :transparent="true">
    <breadcrumb-area title="Checkout" subtitle="Checkout" />
    <client-only>
      <div v-if="state.cart_products.length === 0" class="text-center pt-100 pb-100">
        <h3>No items found in cart to checkout</h3>
        <nuxt-link class="os-btn os-btn-black mt-15" to="/shop">
          Shop Now
        </nuxt-link>
      </div>
      <div v-if="state.cart_products.length > 0">
        <coupon-area />
        <checkout-area />
      </div>
    </client-only>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import CouponArea from "~~/components/checkout/CouponArea.vue";
import CheckoutArea from "~~/components/checkout/CheckoutArea.vue";
import { useCartStore } from "~~/store/useCart";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    CouponArea,
    CheckoutArea,
  },
  setup() {
    const state = useCartStore();
    useHead({
      title: "Checkout",
    });
    return { state };
  },
});
</script>
