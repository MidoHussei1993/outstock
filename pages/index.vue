<template>
  <layout-five>
    <home-five-hero-slider />
    <div class="row mt-4">
      <div class="col-xl-12">
        <div class="mb-55 p-relative">
          <div class="section__title-wrapper text-center mb-55">
            <div class="section__title mb-10">
              <h2>
                {{ $t("c.brands") }}
              </h2>
            </div>
          </div>
          <div class="mb-10">
            <div class="row mx-3">
              <div
                class="col-lg-2 col-md-4 col-sm-6"
                v-for="(item, index) in brands"
                :key="item.id"
              >
                <div
                  class="card brand"
                  :style="{ background: `url('${item.image}')` }"
                >
                  <div class="card-body"></div>
                  <div class="card-footer">
                    <h4 class="text-white" style="font-weight: 600">
                      {{ item.name }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="row mx-2">
        <div class="col-12">
          <h3 class="mb-2 mx-2 font-weight-bolder mb-2">
            <i
              style="
                background: blanchedalmond;
                padding: 14px;
                border-radius: 50%;
                color: #214681;
              "
              class="fas fa-bed-alt"
            ></i>
            {{ $t("c.categories") }}
          </h3>
          <div class="d-flex justify-content-around">
            <div
              class="card card-body d-inline p-2 mx-2 py-3"
              v-for="(item, index) in categories"
              :key="index + 'category'"
            >
              <h5
                class="text-center font-weight-bolder mb-0"
                style="font-weight: 600"
              >
                {{ item.name }}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="box-25">
        <trending-products
          :mostSoledProducts="most_soled_products"
          :style_3="true"
        />
        <section class="product__area pt-60 pb-100">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-12">
                <div :class="`section__title-wrapper text-center mb-55 `">
                  <div class="section__title mb-10">
                    <h2>
                      {{ $t("c.products") }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="`product__slider ${style_2 ? 'product__slider-4' : ''}`"
            >
              <div class="row">
                <div
                  v-for="(item, index) in products"
                  :key="item.id"
                  :class="`${
                    style_3 ? 'col-xl-2 col-lg-3 col-md-4' : 'col-lg-3 col-md-4'
                  } product__item`"
                >
                  <product-item :item="item" />
                </div>
              </div>
            </div>
            <!-- <div class="row" v-if="perView < trending_prd.length">
        <div class="col-xl-12">
          <div class="product__load-btn text-center mt-25">
            <a @click.prevent="handleLoadMore" href="#" class="os-btn os-btn-3">Load More</a>
          </div>
        </div>
      </div> -->
          </div>
        </section>
        <!-- <shop-banner />
      <subscribe-area /> -->
      </div>
    </div>
  </layout-five>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import LayoutFive from "~~/layout/LayoutFive.vue";
import HomeFiveHeroSlider from "~~/components/hero-banner/HomeFiveHeroSlider.vue";
import TrendingProducts from "~~/components/products/TrendingProducts.vue";
import ShopBanner from "~~/components/shop-banner/ShopBanner.vue";
import SubscribeArea from "~~/components/subscribe/SubscribeArea.vue";
import { useI18n } from "vue-i18n";
import { IBrand, ICategory, IProduct } from "~~/types";
import { Formatter } from "sarala-json-api-data-formatter";
import ProductItem from "~~/components/products/ProductItem.vue";

const { t } = useI18n();
useHead({
  title: "Home",
});
const fetch = $useHttpClient();
const country_id = ref<number | null>(40);
const formatter = new Formatter();
const banners = ref<any[]>([]);
const brands = ref<IBrand[]>([]);
const offers = ref<any[]>([]);
const products = ref<IProduct[]>([]);
const most_soled_products = ref<IProduct[]>([]);
const quality_levels = ref<any[]>([]);
const categories = ref<ICategory[]>([]);

onMounted(() => {
  getHomePageData();
});

const getHomePageData = async () => {
  try {
    const res = await fetch("/pages/home-page", {
      method: "get",
      params: {
        ...(country_id && { country_id: country_id.value }),
      },
    });
    const data = formatter.deserialize(res);
    banners.value = data.banners.data;
    brands.value = data.brands.data;
    categories.value = data.categories.data;
    most_soled_products.value = data.most_soled_products.data;
    console.log(
      "🚀 ~ file: index.vue:111 ~ getHomePageData ~ most_soled_products.value:",
      most_soled_products.value
    );
    offers.value = data.offers.data;
    products.value = data.products.data;
    console.log(
      "🚀 ~ file: index.vue:36 ~ getHomePageData ~ res:",
      formatter.deserialize(res)
    );
  } catch (error) {}
};
</script>
<style scoped lang="scss">
.brand {
  height: 186px;
  min-width: 250px;
  background-position: center !important;
  background-size: cover !important;
  // filter: drop-shadow(2px 4px 6px black);
  div.card-body {
    display: grid;
    place-items: center;
    h4 {
      font-weight: bolder;
    }
  }
  div.card-footer {
    background: linear-gradient(to bottom, transparent, black);
    border: none;
  }
}
.bg-1 {
  background-image: linear-gradient(
      112.5deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(
      157.5deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(
      135deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(90deg, rgb(195, 195, 195), rgb(228, 228, 228));
  background-blend-mode: overlay, overlay, overlay, normal;
}
</style>
