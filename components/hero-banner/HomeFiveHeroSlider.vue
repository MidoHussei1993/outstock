<template>
  <section
    class="slider__area slider__area-3 tp_hero p-relative"
    v-if="images.length"
  >
    <Carousel :items-to-show="1" :wrap-around="true" class="slider-active">
      <Slide
        v-for="item in images"
        :key="item.id"
        class="single-slider single-slider-2 slider__height-5 d-flex align-items-center"
        :style="{ backgroundImage: `url(${item.image})` }"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-lg-7 col-md-10">
              <div class="slider__content slider__content-3 pl-250">
                <!-- <h2 v-html="item.title"></h2>
                <p v-html="item.subtile"></p> -->
                <!-- <nuxt-link href="/shop" class="os-btn os-btn-2 hero-slider-btn">
                  Discover now
                </nuxt-link> -->
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
import slider_img_1 from "~/assets/img/slider/slider-1.jpg";
import slider_img_2 from "~/assets/img/slider/slider-2.jpg";
import slider_img_3 from "~/assets/img/slider/slider-3.jpg";

export default defineComponent({
  components: { Carousel, Slide, Pagination },
  props: {
    images: {
      type: Array as () => { id: string; image: string }[],
      default: () => [],
    },
  },
  setup() {
    const slider_data = ref<any[]>([
      {
        id: 1,
        bgImg: slider_img_1,
        // title: "Handmade <br> Hand carved Coffee",
        // subtile:
        //   "As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day.",
      },
      {
        id: 2,
        bgImg: slider_img_2,
        // title: "Think Different &<br> Do it otherwise",
        // subtile:
        //   "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
      },
      {
        id: 3,
        bgImg: slider_img_3,
        // title: "High Beam<br> by Tom Chung",
        // subtile:
        //   "High Beam is an adjustable desk or shelf light that offers a wide variety of lighting possibilities",
      },
    ]);
    return { slider_data };
  },
});
</script>
