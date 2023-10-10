<template>
  <div
    :class="`product__modal-content ${
      style_2 ? 'product__modal-content-2' : ''
    }`"
  >
    <div class="d-flex justify-content-between align-items-center">
      <div class="p-2">
        <h4>
          <nuxt-link :href="`/product-details/${item.id}`">
            <span v-html="item.name"></span>
          </nuxt-link>
        </h4>
      </div>
      <div class="p-2">
        <i
          v-if="hasAction(item, 'favourite_product')"
          class="fad fa-heart-circle mx-2 h2 pointer"
          :title="getAction(item, 'favourite_product').label"
          style="cursor: pointer"
          @click="addToFavourite()"
          :style="{ color: item.is_favourite ? '#e30000' : '' }"
        ></i>

        <i
          v-if="hasAction(item, 'un_favourite_product')"
          class="fad fa-heart-circle mx-2 h2 pointer"
          :title="getAction(item, 'un_favourite_product').label"
          style="cursor: pointer"
          @click="removeFromFavourite()"
          :style="{ color: item.is_favourite ? '#e30000' : '' }"
        ></i>
      </div>
    </div>

    <div class="rating rating-shop mb-15">
      <ul>
        <li>
          <span><i class="fas fa-star"></i></span>
        </li>
        <li>
          <span><i class="fas fa-star"></i></span>
        </li>
        <li>
          <span><i class="fas fa-star"></i></span>
        </li>
        <li>
          <span><i class="fas fa-star"></i></span>
        </li>
        <li>
          <span><i class="fal fa-star"></i></span>
        </li>
      </ul>
      <br />

      <span class="rating-no ml-10"> {{ item.rate_avr }} rating(s) </span>
    </div>
    <div class="product__price-2 mb-25" v-if="item.price && item.price.data">
      <span v-if="price == 0"
        >{{
          item.price.data.has_discount
            ? item.price.data.price_after_discount
            : item.price.data.price
        }}
        {{ item.price.data.currency }}</span
      >
      <span v-if="price">
        {{ price }}
      </span>
      <span
        v-if="item.price.data.price && item.price.data.has_discount"
        class="old-price"
        >{{ item.price.data.price }} {{ item.price.data.currency }}</span
      >
    </div>
    <div class="product__modal-des mb-30">
      <p v-html="item.description"></p>
    </div>
    <div class="product__modal-form">
      <form action="#">
        <div class="product__modal-input size mb-20" v-if="item.sizes">
          <label>
            {{ $t("c.size") }}
            <i class="fas fa-star-of-life"></i
          ></label>
          <select v-model="item.selectedSize" @input="setProductPrice($event)">
            <option
              :value="size.id"
              v-for="(size, i) in item.sizes.data"
              :key="i"
            >
              {{ size.size }}
            </option>
          </select>
        </div>
        <!-- <div class="product__modal-input color mb-20">
          <label>Color <i class="fas fa-star-of-life"></i></label>
          <select>
            <option>- Please select -</option>
            <option v-for="(clr, i) in item.colors" :key="i">{{ clr }}</option>
          </select>
        </div> -->
        <div class="product__modal-required mb-5" v-if="!item.selectedSize">
          <span>
            {{ $t("c.sizeValidation") }}
          </span>
        </div>
        <div class="pro-quan-area d-lg-flex align-items-center">
          <div class="product-quantity-title">
            <label class="lead mx-2">
              {{ $t("c.quantity") }}
            </label>
          </div>
          <div class="product-quantity">
            <div class="cart-plus-minus">
              <input type="text" v-model="item.orderQuantity" />
              <div
                @click="
                  item.orderQuantity > 1
                    ? item.orderQuantity--
                    : (item.orderQuantity = 1)
                "
                class="dec qtybutton"
              >
                -
              </div>
              <div
                @click="item.orderQuantity = item.orderQuantity + 1"
                class="inc qtybutton"
              >
                +
              </div>
            </div>
          </div>
          <div class="pro-cart-btn ml-20">
            <button
              v-if="hasAction(item, 'add_product_to_cart')"
              :disabled="!item.selectedSize"
              @click.prevent="addProductToCart()"
              class="os-btn os-btn-black os-btn-3 mr-10"
            >
              <i class="fad fa-cart-plus h4 mx-2"></i>
              {{ $t("action.addToCart") }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

import ProductType from "~~/types/productType";
import { useCartStore } from "~~/store/useCart";
import { IProduct } from "~~/types";
import { boolean } from "yup";
import { IAction } from "~~/types/action";

const props = defineProps({
  item: { type: Object as PropType<IProduct>, default: () => {} },
  style_2: { type: Boolean, default: () => false },
});
const fetch = $useHttpClient();
const { setLoader } = useLoader();
const state = useCartStore();
const { getAction, hasAction } = $FN();
const emit = defineEmits(["updateProductDetails"]);
const price = ref(0);
const size = ref();
const setProductPrice = (event: any) => {
  console.log(
    "🚀 ~ file: ProductDetailsContent.vue:161 ~ setProductPrice ~ size.value:",
    event.target.value
  );
  price.value = +props.item.sizes.data.filter(
    (item) => item.id == event.target.value
  )[0].productSizeCountries.data.price;
};
const addProductToCart = async () => {
  const action: IAction = getAction(props.item, "add_product_to_cart");
  const productSizeContries = props.item.sizes.data.filter(
    (item) => item.id == props.item.selectedSize
  );
  try {
    setLoader(true);
    const res = await fetch(action.endpoint_url, {
      method: "post",
      body: {
        data: {
          type: "user",
          id: "null",
          attributes: {
            product_size_id: props.item.selectedSize,
            product_size_country_price_id:
              productSizeContries[0].productSizeCountries.data.id,
            quantity: props.item.orderQuantity,
          },
        },
      },
    });
    console.log(res);
    emit("updateProductDetails", {});

    setLoader(true);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(true);
  }
};
const removeFromFavourite = async () => {
  const action: IAction = getAction(props.item, "un_favourite_product");
  try {
    setLoader(true);
    const res = await fetch(action.endpoint_url, {
      method: "post",
    });
    console.log(res);
    emit("updateProductDetails", {});

    setLoader(true);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(true);
  }
};
const addToFavourite = async () => {
  const action: IAction = getAction(props.item, "favourite_product");
  try {
    setLoader(true);
    const res = await fetch(action.endpoint_url, {
      method: "post",
    });
    console.log(res);
    emit("updateProductDetails", {});

    setLoader(true);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(true);
  }
};
</script>
