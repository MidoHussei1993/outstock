<template>
  <layout-six> 
    <home-hero-slider :style_2="true"/>
    <category-area :style_4="true"/>
    <trending-product-three/>
    <shop-banner/>
    <sale-off-product/>
    <blog-area/>
    <subscribe-area/>
  </layout-six>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutSix from "~~/layout/LayoutSix.vue";
import HomeHeroSlider from "~~/components/hero-banner/HomeHeroSlider.vue";
import CategoryArea from "~~/components/category/CategoryArea.vue";
import TrendingProductThree from "~~/components/products/TrendingProductThree.vue";
import ShopBanner from "~~/components/shop-banner/ShopBanner.vue";
import SaleOffProduct from "~~/components/products/SaleOffProduct.vue";
import BlogArea from "~~/components/blogs/BlogArea.vue";
import SubscribeArea from "~~/components/subscribe/SubscribeArea.vue";

export default defineComponent({
  components: {
    LayoutSix,
    HomeHeroSlider,
    CategoryArea,
    TrendingProductThree,
    ShopBanner,
    SaleOffProduct,
    BlogArea,
    SubscribeArea
  },
  setup() {
    useHead({
      title: "Home Six",
    });
  },
});
</script>
