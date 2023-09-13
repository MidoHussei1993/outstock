<template>
  <section class="slider__area slider__area-4 tp_hero p-relative">

    <Carousel :items-to-show="1" :wrap-around="true" class="slider-active">
      <Slide
        v-for="item in slider_data"
        :key="item.id"
        class="single-slider single-slider-2 slider__height-4 d-flex align-items-center"
        :style="{ backgroundImage: `url(${item.bgImg})` }"
      >
      <div class="container">
          <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-9 col-sm-11 col-12">
                  <div class="slider__content slider__content-4">
                      <h2 v-html="item.title"></h2>
                      <p>{{item.subtile}}</p>
                      <a href="#" class="os-btn os-btn-2 hero-slider-btn">Discover now</a>
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
import { HeroSliderType } from "~/types/HeroSliderDataType";
import slider_img_1 from "~/assets/img/slider/04/slider-01.jpg";
import slider_img_2 from "~/assets/img/slider/slider-2.jpg";
import slider_img_3 from "~/assets/img/slider/slider-3.jpg";

export default defineComponent({
  components: { Carousel, Slide, Pagination },
  setup() {
    const slider_data = ref<HeroSliderType[]>([
      {
        id: 1,
        bgImg: slider_img_1,
        title: "Handmade <br /> Hand carved Coffee",
        subtile:
          "As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day.",
      },
      {
        id: 2,
        bgImg: slider_img_2,
        title: "Think Different &<br /> Do it otherwise",
        subtile:
          "As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day.",
      },
      {
        id: 3,
        bgImg: slider_img_3,
        title: "High Beam<br /> by Tom Chung",
        subtile:
          "As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day.",
      },
    ]);
    return { slider_data };
  },
});
</script>