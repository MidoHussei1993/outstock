<template>
  <tr>
    <td class="product-thumbnail">
      <nuxt-link :href="`/product-details/${item.id}`">
        <img :src="item.product.data.image" alt="" />
      </nuxt-link>
    </td>
    <td class="product-name">
      <nuxt-link :href="`/product-details/${item.id}`">
        <span v-html="item.product.data.name"></span>
      </nuxt-link>
    </td>
    <td class="product-price">
      <span class="amount">{{ item.price }} {{ state.currency }}</span>
    </td>
    <td class="product-quantity">
      <div class="cart-plus-minus">
        <input type="text" v-model="item.quantity" />
        <div
          @click="
            item.quantity > 1 ? (item.quantity = item.quantity - 1) : null
          "
          class="dec qtybutton"
        >
          -
        </div>
        <div @click="item.quantity = item.quantity + 1" class="inc qtybutton">
          +
        </div>
      </div>
    </td>
    <td class="product-subtotal">
      <span class="amount"
        >{{
          typeof item.quantity !== "undefined" && item.price * item.quantity
        }}
        {{ state.currency }}</span
      >
    </td>
    <td class="product-remove" @click.prevent="deleteItem()">
      <a href="#">
        <i class="fa fa-times"></i>
      </a>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { useCartStore } from "~~/store/useCart";
import { CartProduct } from "~~/types";
import { IAction } from "~~/types/action";

const state = useCartStore();
const { getAction, hasAction } = $FN();
const { setLoader } = useLoader();
const props = defineProps({
  item: { type: Object as PropType<CartProduct>, default: () => {} },
  index: { type: Number, default: () => null },
});
const emit = defineEmits(["deleteProduct"]);
const deleteItem = async () => {
  const action: IAction = getAction(props.item, "delete_product_from_cart");
  try {
    setLoader(true);
    const res = await fetch(action.endpoint_url, {
      method: "get",
    });
    console.log(res);
    emit("deleteProduct", props.index);
    setLoader(true);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(true);
  }
};
</script>
