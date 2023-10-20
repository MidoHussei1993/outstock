<template>
  <div
    :class="`product__modal-content ${
      style_2 ? 'product__modal-content-2' : ''
    }`"
  >
    <div class="d-flex justify-content-around align-items-center">
      <div class="p-2">
        <h4>
          <nuxt-link :href="`/product-details/${item.id}`">
            <span v-html="item.name"></span>
          </nuxt-link>
        </h4>
      </div>
      <div
        class="p-2 d-flex justify-content-around duration"
        v-if="item.offer && item.offer.data && duration"
      >
        <div class="p-2 text-center">
          <div>
            {{ duration.days }}
          </div>
          <span class=""> {{ $t("c.days") }} </span>
        </div>
        <div class="p-2 text-center">
          <div>{{ duration.hours }}</div>
          <span class=""> {{ $t("c.hours") }} </span>
        </div>
        <div class="p-2 text-center">
          <div>{{ duration.minutes }}</div>
          <span class=""> {{ $t("c.minutes") }} </span>
        </div>
        <div class="p-2 text-center">
          <div>{{ duration.seconds }}</div>
          <span class=""> {{ $t("c.seconds") }} </span>
        </div>
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
          <div class="d-flex justify-content-start">
            <p
              @click="item.selectedSize = size.id"
              :class="{ active: item.selectedSize == size.id }"
              class="p-2 btn border border-2 px-4 size-item mx-2"
              v-for="(size, i) in item.sizes.data"
              :key="i"
            >
              <span class="text-dark">
                {{ size.size }}
              </span>
              <br />
              <span class="text-warning font-weight-bold h5 py-2 pt-4">
                <i class="fas fa-coins"></i>
                {{
                  size.productSizeCountries.data.has_discount
                    ? size.productSizeCountries.data.price_after_discount
                    : size.productSizeCountries.data.price
                }}
              </span>
            </p>
          </div>
          <!-- <select v-model="item.selectedSize" @input="setProductPrice($event)">
            <option
              :value="size.id"
              v-for="(size, i) in item.sizes.data"
              :key="i"
            >
              {{ size.size }}
            </option>
          </select> -->
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
  duration: { type: Object, default: () => {} },
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
    emit("updateProductDetails", {});
    state.getUserCart();
    setLoader(false);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(false);
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
<style lang="scss" scoped>
.duration {
  div {
    div {
      min-width: 77px;
      background: #bc8246;
      padding-top: 11px;
      text-align: center;
      font-weight: 500;
      min-height: 45px;
      color: white;
      font-size: 29px;
      vertical-align: middle;
      margin-bottom: 5px;
      border-radius: 9px;
      text-shadow: 3px 4px 5px #000000ad;
    }
  }
}
.size-item {
  &.active {
    color: white;
    background: #437797;
    border-color: #315178 !important;
  }
  &:hover {
    background: antiquewhite;
    border-color: currentColor !important;
  }
}
</style>
