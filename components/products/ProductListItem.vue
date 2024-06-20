<template>
  <div class="product__wrapper mb-40 border p-2 py-3 rounded-4">
    <div class="row align-items-center">
      <div class="col-xl-4 col-lg-4">
        <div class="product__thumb">
          <nuxt-link :href="`/product-details/${item.id}`" class="w-img">
            <img :src="item.image" alt="product-img" />
            <img class="product__thumb-2" :src="item.image" alt="product-img" />
          </nuxt-link>
          <!-- <div v-if="item.sale_of_per || item.new" class="product__sale">
                    <span v-if="item.new || item.sale_of_per" class="new">new</span>
                    <span v-if="item.sale_of_per" class="percent">-{{item.sale_of_per}}%</span>
                 </div> -->
        </div>
      </div>
      <div class="col-xl-8 col-lg-8">
        <div class="product__content p-relative">
          <div class="product__content-inner list">
            <h4>
              <nuxt-link class="h5" :href="`/product-details/${item.id}`">
                {{ item.name }}
              </nuxt-link>
            </h4>
            <div class="rating rating-shop mb-1">
              <ul>
                <li>
                  <span
                    ><i
                      :class="{
                        fas: item.rate_avr >= 1,
                        fal: item.rate_avr < 1,
                      }"
                      class="fa-star"
                    ></i
                  ></span>
                </li>
                <li>
                  <span
                    ><i
                      :class="{
                        fas: item.rate_avr >= 2,
                        fal: item.rate_avr < 2,
                      }"
                      class="fa-star"
                    ></i
                  ></span>
                </li>
                <li>
                  <span
                    ><i
                      :class="{
                        fas: item.rate_avr >= 3,
                        fal: item.rate_avr < 3,
                      }"
                      class="fa-star"
                    ></i
                  ></span>
                </li>
                <li>
                  <span
                    ><i
                      :class="{
                        fas: item.rate_avr >= 4,
                        fal: item.rate_avr < 4,
                      }"
                      class="fa-star"
                    ></i
                  ></span>
                </li>
                <li>
                  <span
                    ><i
                      :class="{
                        fas: item.rate_avr >= 5,
                        fal: item.rate_avr < 5,
                      }"
                      class="fa-star"
                    ></i
                  ></span>
                </li>
              </ul>
              <br />

              <span class="rating-no ml-10" v-if="item.rate_avr">
                {{ item.rate_avr }} {{ $t("c.rate") }}
              </span>
            </div>
            <div
              class="product__price-2 mb-1"
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
              <span
                v-if="item.price.data.price && item.price.data.has_discount"
                class="old-price"
              >
                {{ item.price.data.price }} {{ item.price.data.currency }}
              </span>
            </div>
            <p class=" ">
              {{ item.mini_description }}
            </p>
            <!-- <div class="product__list mb-30">
                          <ul>
                              <li v-for="(list,i) in item.details.details_list?.slice(0,3)" :key="i">
                                <span>{{list}}</span>
                              </li>
                          </ul>
                      </div> -->
          </div>
          <div class="add-cart-list d-sm-flex align-items-center mt-1">
            <nuxt-link
              class="add-cart-btn mr-10"
              :to="`/product-details/${item.id}`"
            >
              {{ $t("c.viewProduct") }}
            </nuxt-link>
            <div class="product__action-2 transition-3 mr-20">
              <a
                v-if="
                  hasAction(item, 'favourite_product') && !item.is_favourite
                "
                @click="addToFavourite()"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                <i
                  class="fal fa-heart"
                  :style="{ color: item.is_favourite ? '#e30000' : '' }"
                ></i>
              </a>
              <a
                v-if="
                  hasAction(item, 'un_favourite_product') && item.is_favourite
                "
                @click="removeFromFavourite()"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                <i
                  class="fal fa-heart"
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
              <!-- <a
                @click.prevent="store.initialOrderQuantity"
                href="#"
                data-bs-toggle="modal"
                :data-bs-target="`#productModalListId-${item.id}`"
              >
                <i class="fal fa-search"></i>
              </a> -->
            </div>
          </div>
          <!-- shop modal start -->
        </div>
      </div>
    </div>
  </div>

  <!-- product modal start -->
  <product-modal :item="item" :list="true" />
  <!-- product modal end -->
</template>

<script lang="ts" setup>
import { defineComponent, PropType } from "vue";
import ProductType from "~~/types/productType";
import ProductModal from "../common/modals/ProductModal.vue";
import { useCartStore } from "~~/store/useCart";
import { useCompareStore } from "~~/store/useCompare";
import { useWishlistStore } from "~~/store/useWishlist";
import { IProduct } from "~~/types";
import { emit } from "process";
import { IAction } from "~~/types/action";

const props = defineProps({
  item: { type: Object as PropType<IProduct>, default: () => {} },
});
const emit = defineEmits(["getProductList"]);

const store = useCartStore();
const compareState = useCompareStore();
const wishlistState = useWishlistStore();
const { getAction, hasAction } = $FN();
const { setLoader } = useLoader();
const fetch = $useHttpClient();
const removeFromFavourite = async () => {
  const action: IAction = getAction(props.item, "un_favourite_product");
  try {
    setLoader(true);
    const res = await fetch(action.endpoint_url, {
      method: "post",
    });
    console.log(res);
    emit("getProductList", {});
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
  } finally {
    setLoader(false);
  }
};
const addToFavourite = async () => {
  const action: IAction = getAction(props.item, "favourite_product");
  try {
    setLoader(true);
    const res = await fetch(action.endpoint_url, {
      method: "post",
    });
    emit("getProductList", {});
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
  } finally {
    setLoader(false);
  }
};
</script>

<style scoped>
.description {
  max-height: 150px;
  overflow-y: scroll;
  padding-inline: 5px;
}

.description::-webkit-scrollbar {
  height: 15px;
}

.description::-webkit-scrollbar-thumb,
.description::-webkit-scrollbar-track {
  border-radius: 92px;
}

.description::-webkit-scrollbar-thumb {
  background: #bc8246;
}

.description::-webkit-scrollbar-track {
  background: #edf2f4;
}
</style>
