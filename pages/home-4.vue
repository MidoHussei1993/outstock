<template>
  <layout-four> 
    <home-four-hero-slider/>
    <category-area :style_3="true"/>
    <trending-products :style_2="true"/>
    <shop-banner :style_2="true" :style_3="true"/>
    <offer-products-slider :style_2="true"/>
    <blog-area :style_3="true"/>
    <subscribe-area :style_3="true"/>
  </layout-four>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutFour from "~~/layout/LayoutFour.vue";
import HomeFourHeroSlider from "~~/components/hero-banner/HomeFourHeroSlider.vue";
import CategoryArea from "~~/components/category/CategoryArea.vue";
import TrendingProducts from "~~/components/products/TrendingProducts.vue";
import ShopBanner from "~~/components/shop-banner/ShopBanner.vue";
import OfferProductsSlider from "~~/components/products/OfferProductsSlider.vue";
import BlogArea from "~~/components/blogs/BlogArea.vue";
import SubscribeArea from "~~/components/subscribe/SubscribeArea.vue";

export default defineComponent({
  components: {
    LayoutFour,
    HomeFourHeroSlider,
    CategoryArea,
    TrendingProducts,
    ShopBanner,
    OfferProductsSlider,
    BlogArea,
    SubscribeArea,
  },
  setup() {
    useHead({
      title: "Home Four",
    });
  },
});
</script>
