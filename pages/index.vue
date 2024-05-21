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
              <Carousel :items-to-show="3" :wrap-around="true" :autoplay="2000">
                <Slide v-for="(item, index) in brands" :key="item.id">
                  <div
                    @click="navigateTo(`brand-categories/${item.id}`)"
                    class="carousel__item brand d-flex flex-column justify-content-end pointer"
                    style="object-fit: cover"
                    :style="{ background: `url('${item.image}')` }"
                  >
                    <h3 class="w-100 text-center slider-text py-2">
                      {{ item.name }}
                    </h3>
                  </div>
                </Slide>
                <template #addons>
                  <Navigation />
                  <!-- <Pagination /> -->
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
          <Carousel
            :items-to-show="5"
            :wrap-around="true"
            :autoplay="2000"
            dir="rtl"
          >
            <Slide v-for="(item, index) in categories" :key="item.id">
              <div
                class="carousel__item card bg-white h-100 pointer"
                @click="navigateToCategoryQualityLevel(item)"
              >
                <img
                  class="card-img-top w-100"
                  :src="item.image"
                  style="object-fit: contain"
                  height="200"
                  alt="Card image cap"
                />
                <div
                  class="card-body p-0 d-flex flex-column justify-content-between shadow-sm"
                >
                  <h4 class="text-center font-weight-bold my-1">
                    {{ item.name }}
                  </h4>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
              <!-- <Pagination /> -->
            </template>
          </Carousel>
        </client-only>
      </div>

      <div class="w-100 px-2 my-5" v-if="quality_levels.length">
        <h2>
          <i
            style="
              background: rgba(14, 36, 62, 0.092);
              padding: 14px;
              border-radius: 50%;
              font-size: 28px;
              color: #214681;
            "
            class="fas fa-procedures"
          ></i>
          {{ $t("c.quality_levels") }}
        </h2>
        <client-only>
          <Carousel :items-to-show="7" :wrap-around="true" :autoplay="2000">
            <Slide v-for="(item, index) in quality_levels" :key="item.id">
              <div
                @click="navigateToProducts(item)"
                class="carousel__item card bg-white h-100 pointer"
                style="min-height: 12px !important"
              >
                <div
                  class="card-body p-0 d-flex flex-column justify-content-center shadow-sm align-items-center"
                >
                  <h4 class="text-center font-weight-bold my-1">
                    {{ item.name }}
                  </h4>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
              <!-- <Pagination /> -->
            </template>
          </Carousel>
        </client-only>
      </div>

      <div class="box-25">
        <trending-products
          :mostSoledProducts="most_soled_products"
          :style_3="true"
        />
        <div class="row" v-if="offers.length">
          <div class="col-lg-8 col-md-8 col-sm-12 mx-auto">
            <client-only>
              <Carousel
                :items-to-show="1"
                :wrap-around="true"
                :autoplay="2000"
                dir="rtl"
              >
                <Slide v-for="(item, index) in offers" :key="item.id">
                  <div
                    class="carousel__item card bg-white pointer"
                    @click="navigateToProductsWithOffers(item)"
                  >
                    <img
                      :src="item.image"
                      alt="offers"
                      class="w-100"
                      height="300"
                    />
                  </div>
                </Slide>
                <template #addons>
                  <Navigation />
                  <!-- <Pagination /> -->
                </template>
              </Carousel>
            </client-only>
          </div>
        </div>
        <section class="product__area pt-3 pb-100" v-if="products.length">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-12">
                <div :class="`section__title-wrapper text-center mb-2 `">
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
import { IBrand, ICategory, IProduct, IQualityLevel } from "~~/types";
import { Formatter } from "sarala-json-api-data-formatter";
import ProductItem from "~~/components/products/ProductItem.vue";
import { UseCountryStore } from "~~/store/country";
import { IOffer } from "~~/types/offer";

const { t } = useI18n();
useHead({
  title: "Home",
});
const fetch = $useHttpClient();
const country_id = ref<number | null>(null);
const formatter = new Formatter();
const banners = ref<any[]>([]);
const brands = ref<IBrand[]>([]);
const offers = ref<IOffer[]>([]);
const products = ref<IProduct[]>([]);
const most_soled_products = ref<IProduct[]>([]);
const quality_levels = ref<IQualityLevel[]>([]);
const categories = ref<ICategory[]>([]);
const countryStore = UseCountryStore();
const { selectedCountryId } = storeToRefs(countryStore);
const router = useRouter();
const { getAction } = $FN();
const { setLoader } = useLoader();

watch(selectedCountryId, async (newVal, oldVal) => {
  country_id.value = newVal as any;
  getHomePageData();
});

const navigateToCategoryQualityLevel = (item: any) => {
  router.push({
    path: `/category-quality-levels/${item.id}`,
    query: {
      showAction: JSON.stringify(getAction(item, "quality_levels")),
    },
  });
};

const navigateToProducts = (item: any) => {
  router.push({
    path: `/products`,
    query: {
      showAction: JSON.stringify(getAction(item, "get_quality_level_product")),
    },
  });
};
const navigateToProductsWithOffers = (item: any) => {
  router.push({
    path: `/products`,
    query: {
      showAction: JSON.stringify(getAction(item, "get_offer_products")),
    },
  });
};
onMounted(async () => {
  if (selectedCountryId.value) {
    country_id.value = selectedCountryId.value as any;
    getHomePageData();
  }
});

const getHomePageData = async () => {
  try {
    setLoader(true);
    const res = await fetch("/pages/home-page", {
      method: "get",
      params: {
        country_id: country_id.value,
      },
    });
    const data = formatter.deserialize(res);
    console.log("🚀 ~ file: index.vue:292 ~ getHomePageData ~ data:", data);

    if (data.banners) banners.value = data.banners.data;
    if (data.brands) brands.value = data.brands.data;
    if (data.categories) categories.value = data.categories.data;
    if (data.most_soled_products)
      most_soled_products.value = data.most_soled_products.data;
    if (data.offers) offers.value = data.offers.data;
    if (data.quality_levels) quality_levels.value = data.quality_levels.data;
    if (data.products) products.value = data.products.data;
  } catch (error) {
    console.log("🚀 ~ file: index.vue:326 ~ getHomePageData ~ error:", error);
  } finally {
    setLoader(false);
  }
};
// const getHomeCategories = async () => {
//   try {
//     const res = await fetch("/pages/home-page-categories", {
//       method: "get",
//       params: {
//         country_id: country_id.value,
//       },
//     });
//     console.log("🚀 ~ file: index.vue:340 ~ getHomeCategories ~ res:", res);
//     if (res.data) categories.value = res.data;
//   } catch (error) {
//     console.log("🚀 ~ file: index.vue:326 ~ getHomePageData ~ error:", error);
//   }
// };
// const getHomeQualityLevel = async () => {
//   try {
//     const fetch = $useHttpClient();
//     const res = await fetch("/pages/home-page-quality-level", {
//       method: "get",
//       params: {
//         country_id: country_id.value,
//       },
//     });
//     console.log("🚀 ~ file: index.vue:356 ~ getHomeQualityLevel ~ res:", res);
//     if (res.data) quality_levels.value = res.data;
//   } catch (error) {
//     console.log("🚀 ~ file: index.vue:326 ~ getHomePageData ~ error:", error);
//   }
// };
</script>
<style scoped lang="scss">
.slider-text {
  /* From https://css.glass */
  background: rgb(255, 255, 255);
  border-radius: 9px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
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
