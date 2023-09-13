<template>
  <section
    class="testimonial__area box-m-15 pt-100 pb-140"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
          <Carousel
            :items-to-show="3"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
            class="testimonial__nav"
          >
            <Slide v-for="item in nav_data" :key="item.id">
              <div
                @click="slideTo(item.id - 1)"
                class="testimonial__nav-thumb item-1"
              >
                <img :src="item.img" alt="person" />
              </div>
            </Slide>
          </Carousel>

          <Carousel
            class="testimonial__wrapper mt-40"
            :items-to-show="1"
            :wrap-around="false"
            v-model="currentSlide"
          >
            <Slide
              v-for="item in testimonial_data"
              :key="item.id"
              class="testimonial__item item-1"
            >
              <div class="avater__info mb-15">
                <h6>{{item.title}}</h6>
                <span>{{item.name}}</span>
              </div>
              <p>
                {{item.desc}}
              </p>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide,Pagination } from "vue3-carousel";
// internal
import user_1 from "~/assets/img/testimonial/person-1.jpg";
import user_2 from "~/assets/img/testimonial/person-2.jpg";
import user_3 from "~/assets/img/testimonial/person-3.jpg";
import user_4 from "~/assets/img/testimonial/person-4.jpg";
// bg
import bg from "~/assets/img/testimonial/testimonial-bg.jpg";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    currentSlide: 0,
    bg,
  }),
  methods: {
    slideTo(val: number) {
      this.currentSlide = val;
    },
  },
  setup() {
    const nav_data = [
      { id: 1, img: user_1 },
      { id: 2, img: user_2 },
      { id: 3, img: user_3 },
      { id: 4, img: user_4 },
    ];

    const testimonial_data = [
      {
        id: 1,
        name: "Mason Robinson",
        title: "UX - Designer",
        desc: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.",
      },
      {
        id: 2,
        name: "David Cruso",
        title: "Web Developer",
        desc: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.",
      },
      {
        id: 3,
        name: "Naim Ahmed",
        title: "Web Developer",
        desc: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.",
      },
      {
        id: 4,
        name: "Salim Rana",
        title: "WP Expert",
        desc: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.",
      },
    ];
    return {
      nav_data,
      testimonial_data,
    };
  },
});
</script>

<style scoped lang="scss">
.carousel__track {
  transform-style: preserve-3d;
}

.testimonial__area{
  & .testimonial__nav{
    & .carousel__slide--active{
      & .testimonial__nav-thumb{
        & img{
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
}
</style>
