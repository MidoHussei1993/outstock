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

      <div
        class="p-2 d-flex justify-content-around duration"
        v-if="item.offer && item.offer.data && duration"
      >
        <div>
          <h4 class="d-inline">{{ item.offer.data.discount_percentage }} %</h4>
          <img
            v-if="item.offer"
            src="~/assets/img/offer.png"
            width="85"
            alt=""
          />
        </div>
        <div class="p-2 text-center">
          <div>
            {{ duration.days }}
          </div>
          <span class=""> {{ $t("c.days") }} </span>
        </div>
        <span class="p1 h2 mt-2"> : </span>
        <div class="p-2 text-center">
          <div>{{ duration.hours }}</div>
          <span class=""> {{ $t("c.hours") }} </span>
        </div>
        <span class="p1 h2 mt-2"> : </span>
        <div class="p-2 text-center">
          <div>{{ duration.minutes }}</div>
          <span class=""> {{ $t("c.minutes") }} </span>
        </div>
        <span class="p1 h2 mt-2"> : </span>
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
          <div
            class="card card-body my-2 py-0 rounded-3 pointer"
            :style="{width:size.selected?'50%':'145px'}"
            v-for="(size, i) in item.sizes.data"
            :key="i"
            @click.self="size.selected = !size.selected;getTotalPrice()"
            :class="{ 'border-success bg-light selected-size': size.selected }"
          >
            <div class="d-flex justify-content-around align-items-center"
            @click.self="size.selected = !size.selected;getTotalPrice()">
              <div class="p-1"  @click="size.selected = !size.selected;getTotalPrice()">
                <strong class="d-block text-center">
                  {{ $t("c.size") }}
                </strong>
                {{ size.size }}

                <strong class="d-block text-center">
                  {{ $t("c.price") }}
                </strong>
                <span class="text-warning font-weight-bold h5 py-2 pt-4">
                  <i class="fas fa-coins"></i>
                  {{
                    size.productSizeCountries.data.has_discount
                      ? size.productSizeCountries.data.price_after_discount
                      : size.productSizeCountries.data.price
                  }}
                </span>
              </div>
           
              <div class="p-1" v-if="size.selected">
                <strong class="text-center d-block">
                  {{ $t("c.quantity") }}
                </strong>
                <div class="product-quantity">
                  <div class="cart-plus-minus">
                    <input type="text" v-model="size.quantity" disabled />
                    <div
                      @click="
                        size.quantity > 1
                          ? size.quantity--
                          : (size.quantity = 1)
                     ;getTotalPrice() "
                      class="dec qtybutton"
                    >
                      -
                    </div>
                    <div
                      @click="size.quantity = size.quantity + 1;getTotalPrice()"
                      class="inc qtybutton"
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-1" v-if="size.selected">
                <strong>
                  {{ $t("c.price") }}
                </strong>
                <p class="text-center mb-0">
                  {{
                    size.productSizeCountries.data.has_discount
                      ? size.productSizeCountries.data.price_after_discount *
                        size.quantity
                      : size.productSizeCountries.data.price * size.quantity
                  }}
                </p>
              </div>
            </div>
          </div>
          <!-- <div class="d-flex flex-column justify-content-start">
            <div class="p-2"  v-for="(size, i) in item.sizes.data"
              :key="i">
              <p
              @click="item.selectedSize = size.id"
              :class="{ active: item.selectedSize == size.id }"
              class="p-2 btn border border-2 px-4 size-item mx-2"
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
           
          </div> -->
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
        <!-- <div class="product__modal-required mb-5" v-if="!item.selectedSize">
          <span>
            {{ $t("c.sizeValidation") }}
          </span>
        </div> -->
        <div class="pro-quan-area d-lg-flex align-items-center">
          <!-- <div class="product-quantity-title">
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
          </div> -->
          <div class="d-flex justify-content-between w-100">
            <div class="p-2">
              {{ $t('c.total') }}
              :
             {{ totalPrice}}
            </div>
            <div class="p-2">
              <div class="pro-cart-btn ml-20">
            <button
              v-if="hasAction(item, 'add_product_to_cart')"
              :disabled="!item.sizes.data.includes"
              @click.prevent="addProductToCart()"
              class="os-btn os-btn-black os-btn-3 mr-10"
            >
              <i class="fad fa-cart-plus h4 mx-2"></i>
              {{ $t("action.addToCart") }}
            </button>
          </div>
            </div>
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
import { IProduct, ISize } from "~~/types";
import { boolean } from "yup";
import { IAction } from "~~/types/action";
import { useI18n } from "vue-i18n";

const props = defineProps({
  item: { type: Object as PropType<IProduct>, default: () => {} },
  style_2: { type: Boolean, default: () => false },
  duration: { type: Object, default: () => {} },
});
const { t } = useI18n();
const fetch = $useHttpClient();
const { setLoader } = useLoader();
const state = useCartStore();
const { getAction, hasAction } = $FN();
const emit = defineEmits(["updateProductDetails"]);
const price = ref(0);
const totalPrice = ref(0);
const getTotalPrice = ()=>{
  totalPrice.value = 0
  const selectedSizes = props.item.sizes.data.filter((item) => item.selected);
  totalPrice.value = selectedSizes.reduce((acc, item) => {
    acc +=
      item.productSizeCountries.data.has_discount
        ? item.productSizeCountries.data.price_after_discount *
          item.quantity
        : item.productSizeCountries.data.price * item.quantity;
    return acc;
  }, 0);
}
const addProductToCart = async () => {
  const selectedSizes = props.item.sizes.data.filter((item) => item.selected);
  if (!selectedSizes.length) {
    useNuxtApp().$toast.error(t("_.size"));
    return;
  }
  const action: IAction = getAction(props.item, "add_product_to_cart");
  try {
    setLoader(true);
    const res = await fetch(action.endpoint_url, {
      method: "post",
      body: {
        data: {
          type: "user",
          id: "null",
          attributes: {
            sizes: selectedSizes.map((item) => {
              return {
                product_size_id: item.id,
                product_size_country_price_id:
                  item.productSizeCountries.data.id,
                quantity: item.quantity,
              };
            }),
          },
        },
      },
    });
    useNuxtApp().$toast.success('Success');
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
      min-width: 53px;
      padding-top: 11px;
      text-align: center;
      font-weight: 200;
      min-height: 45px;
      color: #bc8246;
      font-size: 23px;
      vertical-align: middle;
      margin-bottom: 1px;
      border-radius: 6px;
      border: 1px solid #bc8246;
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
.pointer {
  cursor: pointer;
}
.selected-size {
  strong {
    color: black;
  }
}
</style>
