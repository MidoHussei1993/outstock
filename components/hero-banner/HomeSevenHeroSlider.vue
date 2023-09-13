<template>
  <section class="slider__area slider__area-3 tp_hero p-relative">
    <div class="slider-active-3">
    <Carousel :items-to-show="1" :wrap-around="true" ref="slider_1">
      <Slide
        v-for="item in slider_data"
        :key="item.id"
        class="single-slider single-slider-2 slider__height-6 d-flex align-items-center"
        :style="{ backgroundImage: `url(${item.bgImg})` }"
      >
      <div class="container custom-container-2">
          <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-10">
                  <div class="slider__content slider__content-5">
                      <span :class="`${item.meta?'meta':''}`">{{item.sm_title}}</span>
                      <h2 v-html="item.title"></h2>
                      <p v-html="item.subtitle"></p>
                      <nuxt-link href="/shop" class="os-btn-4 hero-slider-btn">Shop Now</nuxt-link>
                  </div>
              </div>
          </div>
      </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <div>
      <button @click="handlePrev" type="button" class="slick-prev slick-arrow">
        <i class="fal fa-angle-left"></i>
      </button>
      <button @click="handleNext" type="button" class="slick-next slick-arrow">
        <i class="fal fa-angle-right"></i>
      </button>
    </div>
  </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
// external
import { HeroSliderTypeThree } from "~/types/HeroSliderDataType";
import slider_img_1 from "~/assets/img/slider/05/slide111.webp";
import slider_img_2 from "~/assets/img/slider/05/slide112.webp";
import slider_img_3 from "~/assets/img/slider/05/slide113.webp";

// interface
interface sliderRef {
  next(): void;
  prev(): void;
}

export default defineComponent({
  components: { Carousel, Slide, Pagination },
  methods:{
    handleNext() {
      const sliderRef = this.$refs.slider_1 as sliderRef;
      sliderRef.next();
    },
    handlePrev() {
      const sliderRef = this.$refs.slider_1 as sliderRef;
      sliderRef.prev();
    },
  },
  setup() {
    const slider_data = ref<HeroSliderTypeThree[]>([
      {
        id: 1,
        bgImg: slider_img_1,
        sm_title:'up to 50% off',
        meta:true,
        title: "Life style that you <br/>need, Yo.",
        subtitle: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
      },
      {
        id: 2,
        bgImg: slider_img_2,
        sm_title:'Quick parcel delivery',
        title: "Creative theme <br/>Awesome.",
        subtitle: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
      },
      {
        id: 3,
        bgImg: slider_img_3,
        sm_title:'Quick parcel delivery',
        title: "The world is<br/>make all.",
        subtitle: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
      }
    ]);
    return { slider_data };
  },
});
</script>