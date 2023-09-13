<template>
  <tr>
    <td class="product-thumbnail">
      <nuxt-link :href="`/product-details/${item.id}`">
        <img :src="item.img" alt="" />
      </nuxt-link>
    </td>
    <td class="product-name">
      <nuxt-link :href="`/product-details/${item.id}`">
        <span v-html="item.title"></span>
      </nuxt-link>
    </td>
    <td class="product-price">
      <span class="amount">${{ item.price }}</span>
    </td>
    <td class="product-quantity">
      <div class="cart-plus-minus">
        <input type="text" v-model="item.orderQuantity" />
        <div @click="state.quantityDecrement(item)" class="dec qtybutton">
          -
        </div>
        <div @click="state.add_cart_product(item)" class="inc qtybutton">+</div>
      </div>
    </td>
    <td class="product-subtotal">
      <span class="amount"
        >${{
          typeof item.orderQuantity !== "undefined" &&
          item.price * item.orderQuantity
        }}</span
      >
    </td>
    <td class="product-remove" @click.prevent="state.remover_cart_products(item)">
      <a href="#">
        <i class="fa fa-times"></i>
      </a>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ProductType from "~~/types/productType";
import { useCartStore } from "~~/store/useCart";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ProductType>,
      default: {},
      required: true,
    },
  },
  setup() {
    const state = useCartStore();
    return { state };
  },
});
</script>
