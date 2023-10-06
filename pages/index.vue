<template>
  <layout-five>
    <home-five-hero-slider :images="banners" />
    <div class="row mt-4">
      <div class="col-xl-12">
        <div class="mb-55 p-relative">
          <!-- <div class="section__title-wrapper text-center mb-55">
            <div class="section__title mb-10">
              <h2>
                {{ $t("c.brands") }}
              </h2>
            </div>
          </div> -->
          <div class="w-100 px-2" v-if="brands.length">
            <h2>
              <i
                style="padding: 14px; border-radius: 50%; color: #214681"
                class="fad fa-copyright"
              ></i>
              {{ $t("c.brands") }}
            </h2>
            <client-only>
              <Carousel :items-to-show="5" :wrap-around="true" :autoplay="2000">
                <Slide v-for="(item, index) in brands" :key="item.id">
                  <div
                    @click="navigateTo(`brand-categories/${item.id}`)"
                    class="carousel__item brand d-flex flex-column justify-content-end pointer"
                    :style="{ background: `url('${item.image}')` }"
                  >
                    <h3 class="w-100 text-center">{{ item.name }}</h3>
                  </div>
                </Slide>
                <template #addons>
                  <Navigation />
                  <Pagination />
                </template>
              </Carousel>
            </client-only>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="w-100 px-2" v-if="categories.length">
        <h2>
          <i
            style="
              background: rgba(14, 36, 62, 0.092);
              padding: 14px;
              border-radius: 50%;
              color: #214681;
            "
            class="fas fa-bed-alt"
          ></i>
          {{ $t("c.categories") }}
        </h2>
        <client-only>
          <Carousel :items-to-show="5" :wrap-around="true" :autoplay="2000">
            <Slide v-for="(item, index) in categories" :key="item.id">
              <div
                class="carousel__item brand d-flex flex-column justify-content-end"
                :style="{ background: `url('${item.image}')` }"
              >
                <h3 class="w-100 text-center">{{ item.name }}</h3>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </client-only>
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
            <div :class="`product__slider  product__slider-4`">
              <div class="row">
                <div
                  v-for="(item, index) in products"
                  :key="item.id"
                  :class="`col-xl-2 col-lg-3 col-md-4  product__item mt-3`"
                >
                  <!-- :class="`${
                    style_3 ? 'col-xl-2 col-lg-3 col-md-4' : 'col-lg-3 col-md-4'
                  } product__item`" -->
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
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { storeToRefs } from "pinia";
import LayoutFive from "~~/layout/LayoutFive.vue";
import HomeFiveHeroSlider from "~~/components/hero-banner/HomeFiveHeroSlider.vue";
import TrendingProducts from "~~/components/products/TrendingProducts.vue";
import ShopBanner from "~~/components/shop-banner/ShopBanner.vue";
import SubscribeArea from "~~/components/subscribe/SubscribeArea.vue";
import { useI18n } from "vue-i18n";
import { IBrand, ICategory, IProduct } from "~~/types";
import { Formatter } from "sarala-json-api-data-formatter";
import ProductItem from "~~/components/products/ProductItem.vue";
import { UseCountryStore } from "~~/store/country";

const { t } = useI18n();
useHead({
  title: "Home",
});
const fetch = $useHttpClient();
const country_id = ref<number | null>(null);
const formatter = new Formatter();
const banners = ref<any[]>([]);
const brands = ref<IBrand[]>([]);
const offers = ref<any[]>([]);
const products = ref<IProduct[]>([]);
const most_soled_products = ref<IProduct[]>([]);
const quality_levels = ref<any[]>([]);
const categories = ref<ICategory[]>([]);
const countryStore = UseCountryStore();
const { selectedCountryId } = storeToRefs(countryStore);
let scroolEvent = null;

watch(selectedCountryId, async (newVal, oldVal) => {
  country_id.value = newVal as any;
  getHomePageData();
});

onMounted(() => {
  console.log(
    "🚀 ~ file: index.vue:154 ~ onMounted ~ selectedCountryId:",
    selectedCountryId.value
  );
  if (selectedCountryId.value) {
    country_id.value = selectedCountryId.value as any;
    getHomePageData();
  }
});

const getCuntires = async () => {
  try {
    const { data } = await fetch("/countries?page=1&per_page=1000", {
      method: "get",
    });
    if (!localStorage.getItem("token")) {
      country_id.value = data[0].id;
    }
  } catch (error) {
    console.log(error);
  }
};
const getHomePageData = async () => {
  try {
    const res = await fetch("/pages/home-page", {
      method: "get",
      params: {
        country_id: country_id.value,
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
:root {
  --red: #ef233c;
  --darkred: #c00424;
  --platinum: #e5e5e5;
  --black: #2b2d42;
  --white: #fff;
  --thumb: #edf2f4;
}
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
    background: linear-gradient(to bottom, transparent, #0000008f);
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
.card-wrapper {
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding-bottom: 4px;
}

.cards {
  display: flex;
  padding: 25px 0px;
  list-style: none;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  .card {
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
  }

  .card:not(:last-child) {
    margin-right: 10px;
  }

  .card:hover {
    color: white;
    background: #ef233c;
  }

  .card .card-title {
    font-size: 20px;
  }

  .card .card-content {
    margin: 20px 0;
    max-width: 85%;
  }

  .card .card-link-wrapper {
    margin-top: auto;
  }

  .card .card-link {
    display: inline-block;
    text-decoration: none;
    color: white;
    background: #ef233c;
    padding: 6px 12px;
    border-radius: 8px;
    transition: background 0.2s;
  }

  .card:hover .card-link {
    background: #c00424;
  }

  @media (min-width: 500px) {
    .card {
      flex-basis: calc(50% - 10px);
    }

    .card:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media (min-width: 700px) {
    .card {
      flex-basis: calc(calc(100% / 3) - 20px);
    }

    .card:not(:last-child) {
      margin-right: 30px;
    }
  }

  @media (min-width: 1100px) {
    .card {
      flex-basis: calc(25% - 30px);
    }

    .card:not(:last-child) {
      margin-right: 40px;
    }
  }
}
.cards::-webkit-scrollbar {
  height: 7px;
}

.cards::-webkit-scrollbar-thumb,
.cards::-webkit-scrollbar-track {
  border-radius: 92px;
}

.cards::-webkit-scrollbar-thumb {
  background: #bc8246;
}

.cards::-webkit-scrollbar-track {
  background: #edf2f4;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.pointer {
  cursor: pointer !important;
}
</style>
