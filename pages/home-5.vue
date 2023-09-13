<template>
  <layout-five> 
    <home-five-hero-slider/>
    <div class="box-25">
      <trending-products :style_3="true"/>
      <shop-banner/>
      <subscribe-area/>
    </div>
  </layout-five>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutFive from "~~/layout/LayoutFive.vue";
import HomeFiveHeroSlider from "~~/components/hero-banner/HomeFiveHeroSlider.vue";
import TrendingProducts from "~~/components/products/TrendingProducts.vue";
import ShopBanner from "~~/components/shop-banner/ShopBanner.vue";
import SubscribeArea from "~~/components/subscribe/SubscribeArea.vue";

export default defineComponent({
  components: {
    LayoutFive,
    HomeFiveHeroSlider,
    TrendingProducts,
    ShopBanner,
    SubscribeArea
  },
  setup() {
    useHead({
      title: "Home Five",
    });
  },
});
</script>
