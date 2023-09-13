<template>
  <layout-seven>
    <home-seven-hero-slider />
    <category-area-two />
    <best-saller-products />
    <video-box/>
    <featured-products/>
    <home-seven-testimonial/>
    <blog-area-two/>
    <client-brand-slider-two/>
  </layout-seven>
</template>

<script lang="ts">
import LayoutSeven from "~~/layout/LayoutSeven.vue";
import HomeSevenHeroSlider from "~~/components/hero-banner/HomeSevenHeroSlider.vue";
import CategoryAreaTwo from "~~/components/category/CategoryAreaTwo.vue";
import BestSallerProducts from "~~/components/products/BestSallerProducts.vue";
import VideoBox from "~~/components/video-box/VideoBox.vue";
import FeaturedProducts from "~~/components/products/FeaturedProducts.vue";
import HomeSevenTestimonial from "~~/components/testimonial/HomeSevenTestimonial.vue";
import BlogAreaTwo from "~~/components/blogs/BlogAreaTwo.vue";
import ClientBrandSliderTwo from "~~/components/client-brands/ClientBrandSliderTwo.vue";

export default defineComponent({
  components: {
    LayoutSeven,
    HomeSevenHeroSlider,
    CategoryAreaTwo,
    BestSallerProducts,
    VideoBox,
    FeaturedProducts,
    HomeSevenTestimonial,
    BlogAreaTwo,
    ClientBrandSliderTwo,
  },
  setup() {
    useHead({
      title: "Home Seven",
    });
  },
});
</script>
