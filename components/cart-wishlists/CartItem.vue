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
      <i
        v-if="item.quantity != itemClone?.quantity"
        @click="changeProductQuantity()"
        class="fas fa-check mx-3 pointer"
      ></i>
      <i
        v-if="item.quantity != itemClone?.quantity"
        @click="item.quantity = itemClone?.quantity!"
        class="fas fa-times pointer"
      ></i>
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
import { useI18n } from "vue-i18n";
import { useCartStore } from "~~/store/useCart";
import { CartProduct } from "~~/types";
import { IAction } from "~~/types/action";

const state = useCartStore();
const fetch = $useHttpClient();
const { getAction, hasAction } = $FN();
const { t } = useI18n();
const { setLoader } = useLoader();
const props = defineProps({
  item: { type: Object as PropType<CartProduct>, default: () => {} },
  index: { type: Number, default: () => null },
});
const itemClone = ref<CartProduct>();
// watch(() => props.selected, (first, second) => {
//       console.log(
//         "Watch props.selected function called with args:",
//         first,
//         second
//       );
//     });
const emit = defineEmits(["getCart"]);
const deleteItem = async () => {
  const action: IAction = getAction(props.item, "delete_product_from_cart");
  try {
    setLoader(true);
    const res = await fetch(action.endpoint_url, {
      method: "delete",
    });
    console.log(res);
    emit("getCart", {});
    state.getUserCart();
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
  } finally {
    setLoader(false);
  }
};

const changeProductQuantity = async () => {
  console.log("fireeeeeee");
  const action: IAction = getAction(
    props.item,
    "update_product_amount_in_cart"
  );
  try {
    setLoader(true);
    const res = await fetch(action.endpoint_url, {
      method: "post",
      body: $payloadParser(
        {
          id: 1,
          quantity: props.item.quantity,
        },
        "user"
      ),
    });
    console.log(res);
    // useNuxtApp().$toast.success("done");
    emit("getCart", {});
    // @ts-ignore
    itemClone.value.quantity = props.item.quantity;
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
  } finally {
    setLoader(false);
  }
};

onMounted(() => {
  itemClone.value = { ...props.item };
});
</script>
<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
