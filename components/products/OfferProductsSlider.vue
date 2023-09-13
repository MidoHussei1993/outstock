<template>
  <section :class="`product__offer ${style_2 ?'pb-45':'pt-115 pb-50'}`">
    <div :class="`${style_2?'custom-container':'container'}`">
      <div class="row">
        <!-- Trending Products start -->
        <div class="col-xl-4 col-lg-4 col-md-6">
          <div class="product__offer-inner mb-30">
            <div class="product__title mb-60">
              <h4>Trending Products</h4>
            </div>
            <div class="product__offer-slider p-relative">
              <Carousel
                :items-to-show="1"
                :wrap-around="true"
                :snapAlign="'center'"
                ref="slider_1"
              >
                <Slide
                  v-for="(item, i) in trending_products"
                  :key="i"
                  class="product__offer-wrapper"
                >
                  <div class="sidebar__widget-content">
                    <sm-product-item
                      v-for="(prd, i) in item.items"
                      :key="i"
                      :prd="prd"
                    />
                  </div>
                </Slide>
              </Carousel>
              <!-- nav button -->
              <div class="owl-nav">
                <div @click="handlePrev" class="owl-prev">
                  <button>
                    <i class="fal fa-angle-left"></i>
                  </button>
                </div>
                <div class="owl-next" @click="handleNext">
                  <button>
                    <i class="fal fa-angle-right"></i>
                  </button>
                </div>
              </div>
              <!-- nav button -->
            </div>
          </div>
        </div>
        <!-- Trending Products end -->

         <!-- sale off Products start  -->
        <div class="col-xl-4 col-lg-4 col-md-6">
          <div class="product__offer-inner mb-30">
            <div class="product__title mb-60">
              <h4>On Sale Products</h4>
            </div>
            <div class="product__offer-slider p-relative">
              <Carousel
                :items-to-show="1"
                :wrap-around="true"
                :snapAlign="'center'"
                ref="slider_2"
              >
                <Slide
                  v-for="(item, i) in sale_products"
                  :key="i"
                  class="product__offer-wrapper"
                >
                  <div class="sidebar__widget-content">
                    <sm-product-item
                      v-for="(prd, i) in item.items"
                      :key="i"
                      :prd="prd"
                    />
                  </div>
                </Slide>
              </Carousel>
              <!-- nav button -->
              <div class="owl-nav">
                <div @click="handlePrevTwo" class="owl-prev">
                  <button>
                    <i class="fal fa-angle-left"></i>
                  </button>
                </div>
                <div class="owl-next" @click="handleNextTwo">
                  <button>
                    <i class="fal fa-angle-right"></i>
                  </button>
                </div>
              </div>
              <!-- nav button -->
            </div>
          </div>
        </div>
         <!-- sale off Products end  -->

        <!-- Top Rated Products start  -->
        <div class="col-xl-4 col-lg-4 col-md-6">
          <div class="product__offer-inner mb-30">
            <div class="product__title mb-60">
              <h4>Top Rated Products</h4>
            </div>
            <div class="product__offer-slider p-relative">
              <Carousel
                :items-to-show="1"
                :wrap-around="true"
                :snapAlign="'center'"
                ref="slider_3"
              >
                <Slide
                  v-for="(item, i) in top_products"
                  :key="i"
                  class="product__offer-wrapper"
                >
                  <div class="sidebar__widget-content">
                    <sm-product-item
                      v-for="(prd, i) in item.items"
                      :key="i"
                      :prd="prd"
                    />
                  </div>
                </Slide>
              </Carousel>
             <!-- nav button -->
              <div class="owl-nav">
                <div @click="handlePrevThree" class="owl-prev">
                  <button>
                    <i class="fal fa-angle-left"></i>
                  </button>
                </div>
                <div class="owl-next" @click="handleNextThree">
                  <button>
                    <i class="fal fa-angle-right"></i>
                  </button>
                </div>
              </div>
              <!-- nav button -->
            </div>
          </div>
        </div>
         <!-- Top Rated Products end  -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
// internal
import { useProductsStore } from "~~/store/useProducts";
import SmProductItem from "./SmProductItem.vue";

// interface
interface sliderRef {
  next(): void;
  prev(): void;
}

export default defineComponent({
  components: { Carousel, Slide, SmProductItem },
  props:{
    style_2: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleNext() {
      const sliderRef = this.$refs.slider_1 as sliderRef;
      sliderRef.next();
    },
    handlePrev() {
      const sliderRef = this.$refs.slider_1 as sliderRef;
      sliderRef.prev();
    },
    handleNextTwo() {
      const sliderRef = this.$refs.slider_2 as sliderRef;
      sliderRef.next();
    },
    handlePrevTwo() {
      const sliderRef = this.$refs.slider_2 as sliderRef;
      sliderRef.prev();
    },
    handleNextThree() {
      const sliderRef = this.$refs.slider_3 as sliderRef;
      sliderRef.next();
    },
    handlePrevThree() {
      const sliderRef = this.$refs.slider_3 as sliderRef;
      sliderRef.prev();
    },
  },
  setup() {
    const store = useProductsStore();
    const trending_products = [
      { id: 1, items: store.products.filter((p) => p.trending).slice(0, 3) },
      { id: 2, items: store.products.filter((p) => p.trending).slice(3, 6) },
    ];
    const sale_products = [
      { id: 1, items: store.products.filter((p) => p.sale_of_per).slice(0, 3) },
      { id: 2, items: store.products.filter((p) => p.sale_of_per).slice(3, 6) },
    ];
    const top_products = [
      { id: 1, items: store.products.filter((p) => p.topRated).slice(0, 3) },
      { id: 2, items: store.products.filter((p) => p.topRated).slice(3, 6) },
    ];
    return {
      trending_products,
      sale_products,
      top_products,
    };
  },
});
</script>

<style scoped>
.carousel__slide {
  display: block;
}
</style>
