<template>
  <div class="mini-cart">
    <div v-if="cart_products.length === 0">
      <h5>Your cart is empty</h5>
    </div>
    <div v-if="cart_products.length > 0" class="mini-cart-inner">
      <ul
        :class="`mini-cart-list ${
          cart_products.length === 1
            ? 'slider-height_1'
            : cart_products.length === 2
            ? 'slider-height_2'
            : 'slider-height'
        }`"
      >
        <li v-for="(item, i) in cart_products" :key="i">
          <div class="cart-img f-left">
            <nuxt-link :href="`/product-details/${item.id}`">
              <img :src="item.product.data.image" alt="" />
            </nuxt-link>
          </div>
          <div class="cart-content f-left text-left">
            <h5>
              <nuxt-link :href="`/product-details/${item.id}`">
                <span v-html="item.product.data.name"></span>
              </nuxt-link>
            </h5>
            <div class="cart-price">
              <span class="ammount"
                >{{ item.quantity }}<i class="fal fa-times mx-2"></i
              ></span>
              <span class="price"> {{ item.price }}</span>
            </div>
          </div>
          <div class="del-icon f-right mt-30" @click="deleteItem(item)">
            <a>
              <i
                style="font-size: 19px"
                class="fas fa-times-hexagon text-danger pointer"
              ></i>
            </a>
          </div>
        </li>
      </ul>
      <div class="total-price d-flex justify-content-between mb-30">
        <span>{{ $t("c.cartTotal") }} :</span>
        <span>{{ total }} {{ currency }}</span>
      </div>
      <div class="checkout-link">
        <nuxt-link href="/cart" class="os-btn">
          {{ $t("action.preview") }}
        </nuxt-link>
        <!-- <nuxt-link class="os-btn os-btn-black" href="/checkout"
          >Checkout</nuxt-link
        > -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "~~/store/useCart";
import { storeToRefs } from "pinia";
import { IAction } from "~~/types/action";
import { IProduct } from "~~/types";

const store = useCartStore();
const { getAction, hasAction } = $FN();
const { cart_products, total,currency } = storeToRefs(store);
const { setLoader } = useLoader();

// const subString = (str: string, len: number, char = "...") => {
//   if (str.length > len) {
//     return str.substring(0, len) + char;
//   }
//   return str;
// };

const deleteItem = async (item: IProduct) => {
  const action: IAction = getAction(item, "delete_product_from_cart");
  try {
    setLoader(true);
    const res = await fetch(action.endpoint_url, {
      method: "delete",
    });
    console.log(res);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
  } finally {
    setLoader(false);
  }
};
</script>
