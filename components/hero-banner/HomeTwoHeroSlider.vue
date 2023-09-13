<template>
  <section class="slider__area slider__area-2 tp_hero p-relative pl-15 pr-15">
    <Carousel :items-to-show="1" :wrap-around="true" class="slider-active">
      <Slide
        v-for="item in slider_data"
        :key="item.id"
        class="single-slider single-slider-2 slider__height-2 d-flex align-items-center"
        :style="{ backgroundImage: `url(${item.bgImg})` }"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10 col-12">
              <div
                :class="`slider__content ${
                  item.isDark ? 'slider__content-black' : ''
                } slider__content-3 pl-250`"
              >
                <h2 data-animation="fadeInUp" data-delay=".2s" v-html="item.title"></h2>
                <p data-animation="fadeInUp" data-delay=".4s" v-html="item.subtile"></p>
                <a
                  href="#"
                  :class="`os-btn ${item.isDark ? 'os-btn-white' : 'os-btn-2'} hero-slider-btn`"
                  data-animation="fadeInUp"
                  data-delay=".6s">
                  Discover now
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
// external
import { HeroSliderTypeTwo } from "~/types/HeroSliderDataType";
import slider_img_1 from "~/assets/img/slider/03/slider-01.jpg";
import slider_img_2 from "~/assets/img/slider/03/slider-02.jpg";
import slider_img_3 from "~/assets/img/slider/03/slider-03.jpg";

export default defineComponent({
  components: { Carousel, Slide, Pagination },
  setup() {
    const slider_data = ref<HeroSliderTypeTwo[]>([
      {
        id: 1,
        bgImg: slider_img_1,
        isDark: true,
        title: "Lighting <br /> Creative Furniture",
        subtile:
          "From luxury watches and chronographs to wall clocks and weather stations, Henning Koppels.",
      },
      {
        id: 2,
        bgImg: slider_img_2,
        title: "Clock <br /> Creative Furniture",
        subtile:
          "The Drop™ chair was designed by Arne Jacobsen in 1958 as part of his masterpiece, the legendary Radisson Blu Royal Hotel in Copenhagen.",
      },
      {
        id: 3,
        bgImg: slider_img_3,
        title: "Drop Chair <br /> The Black Leather Edition",
        subtile:
          "From luxury watches and chronographs to wall clocks and weather stations, Henning Koppels.",
      },
    ]);
    return { slider_data };
  },
});
</script>
