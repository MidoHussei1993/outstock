<template>
  <layout-three>
    <main class="box-25">
      <home-two-hero-slider/>
      <category-area :style_2="true"/>
      <trending-product-three/>
      <shop-banner :style_2="true"/>
      <sale-off-product/>
      <home-three-testimonial/>
      <offer-products-slider/>
      <client-brand-slider :style_2="true"/>
      <subscribe-area :style_2="true"/>
      <blog-area :style_2="true"/>
    </main>
  </layout-three>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutThree from "~~/layout/LayoutThree.vue";
import CategoryArea from "~~/components/category/CategoryArea.vue";
import HomeTwoHeroSlider from "~~/components/hero-banner/HomeTwoHeroSlider.vue";
import TrendingProductThree from "~~/components/products/TrendingProductThree.vue";
import ShopBanner from "~~/components/shop-banner/ShopBanner.vue";
import SaleOffProduct from "~~/components/products/SaleOffProduct.vue";
import HomeThreeTestimonial from "~~/components/testimonial/HomeThreeTestimonial.vue";
import OfferProductsSlider from "~~/components/products/OfferProductsSlider.vue";
import ClientBrandSlider from "~~/components/client-brands/ClientBrandSlider.vue";
import SubscribeArea from "~~/components/subscribe/SubscribeArea.vue";
import BlogArea from "~~/components/blogs/BlogArea.vue";


export default defineComponent({
  components: {
    LayoutThree,
    HomeTwoHeroSlider,
    CategoryArea,
    TrendingProductThree,
    ShopBanner,
    SaleOffProduct,
    HomeThreeTestimonial,
    OfferProductsSlider,
    ClientBrandSlider,
    SubscribeArea,
    BlogArea,
  },
  setup() {
    useHead({
      title: "Home Three",
    });
  },
});
</script>


