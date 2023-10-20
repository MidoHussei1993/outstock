<template>
  <div class="product__wrapper mb-60">
    <div class="product__thumb">
      <nuxt-link :href="`/product-details/${item.id}`" class="w-img">
        <img
          :src="item.image"
          alt="product-img"
          style="height: 200px; object-fit: contain"
        />
        <img
          class="product__thumb-2"
          v-if="item.image"
          :src="item.image"
          style="height: 200px; object-fit: contain"
          alt="product-img"
        />
      </nuxt-link>
      <div class="product__action transition-3">
        <a
          @click.prevent="wishlistState.add_wishlist_product(item)"
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Add to Wishlist"
        >
          <i
            v-if="hasAction(item, 'favourite_product')"
            class="fad fa-heart-circle h4 pointer"
            :title="getAction(item, 'favourite_product').label"
            style="cursor: pointer"
            @click="addToFavourite()"
            :style="{ color: item.is_favourite ? '#e30000' : '' }"
          ></i>

          <i
            v-if="hasAction(item, 'un_favourite_product')"
            class="fad fa-heart-circle h4 pointer mb-0"
            :title="getAction(item, 'un_favourite_product').label"
            style="cursor: pointer"
            @click="removeFromFavourite()"
            :style="{ color: item.is_favourite ? '#e30000' : '' }"
          ></i>
        </a>
        <!-- <a
          @click.prevent="compareState.add_compare_product(item)"
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Compare"
        >
          <i class="fal fa-sliders-h"></i>
        </a> -->
        <!-- Button trigger modal -->
        <a
          @click.prevent="store.initialOrderQuantity"
          href="#"
          data-bs-toggle="modal"
          :data-bs-target="`#productModalId-${item.id}`"
        >
          <i class="fal fa-search"></i>
        </a>
      </div>
      <div class="product__sale" v-if="item.offer && item.offer.data">
        <span class="new">new</span>
        <span class="percent">-{{ item.offer.data.discount_percentage }}%</span>
      </div>
    </div>
    <div class="product__content p-relative">
      <div class="product__content-inner">
        <nuxt-link :href="`/product-details/${item.id}`">
          <span v-html="item.name"></span>
        </nuxt-link>
        <div
          class="product__price transition-3"
          v-if="item.price && item.price.data"
        >
          <span>
            {{
              item.price.data.has_discount
                ? item.price.data.price_after_discount
                : item.price.data.price
            }}
            {{ item.price.data.currency }}
          </span>
          <span class="old-price" v-if="item.price.data.has_discount">
            {{ item.price.data.price }} {{ item.price.data.currency }}</span
          >
        </div>
      </div>
      <div class="add-cart p-absolute transition-3">
        <a @click.prevent="store.add_cart_product(item)" href="#"
          >+ Add to Cart</a
        >
      </div>
    </div>
  </div>

  <!-- product modal start -->
  <product-modal :item="item" />
  <!-- product modal end -->
</template>

<script lang="ts" setup>
import { defineComponent, PropType } from "vue";
import ProductType from "~/types/productType";
import { useCartStore } from "~~/store/useCart";
import { useWishlistStore } from "~~/store/useWishlist";
import { useCompareStore } from "~~/store/useCompare";
import ProductModal from "../common/modals/ProductModal.vue";
import { IProduct } from "~~/types";
import { IAction } from "~~/types/action";

const props = defineProps({
  item: { type: Object as PropType<IProduct>, default: () => {} },
  style_2: { type: Boolean, default: () => false },
});

const { getAction, hasAction } = $FN();
const store = useCartStore();
const wishlistState = useWishlistStore();
const compareState = useCompareStore();
const { setLoader } = useLoader();
const emit = defineEmits(["updateProductDetails"]);

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
