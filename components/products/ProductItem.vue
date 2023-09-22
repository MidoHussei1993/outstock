<template>
  <div class="product__wrapper mb-60">
    <div class="product__thumb">
      <nuxt-link :href="`/product-details/${item.id}`" class="w-img">
        <img :src="item.img" alt="product-img" />
        <img
          class="product__thumb-2"
          v-if="item.thumb_img"
          :src="item.thumb_img"
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
          <i class="fal fa-heart"></i>
        </a>
        <a
          @click.prevent="compareState.add_compare_product(item)"
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Compare"
        >
          <i class="fal fa-sliders-h"></i>
        </a>
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
      <!-- <div v-if="item.sale_of_per || item.new" class="product__sale">
        <span v-if="item.new || item.sale_of_per" class="new">new</span>
        <span v-if="item.sale_of_per" class="percent"
          >-{{ item.sale_of_per }}%</span
        >
      </div> -->
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
            {{ item.price.data.price_after_discount }}
            {{ item.price.data.currency }}
          </span>
          <span class="old-price">
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

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ProductType from "~/types/productType";
import { useCartStore } from "~~/store/useCart";
import { useWishlistStore } from "~~/store/useWishlist";
import { useCompareStore } from "~~/store/useCompare";
import ProductModal from "../common/modals/ProductModal.vue";
import { IProduct } from "~~/types";

export default defineComponent({
  components: { ProductModal },
  props: {
    item: {
      type: Object as PropType<IProduct>,
      default: {},
      required: true,
    },
  },
  setup() {
    const store = useCartStore();
    const wishlistState = useWishlistStore();
    const compareState = useCompareStore();
    return { store, wishlistState, compareState };
  },
});
</script>
