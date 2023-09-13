<template>
  <div class="blog__slider-area pt-100 pb-100">
    <div class="container custom-container-2">
      <div class="row">
        <div class="col-xl-12">
          <div class="row">
            <div class="col-xl-12">
              <div class="section__wrapper text-center">
                <h3 class="section__title-2"><span> From Our Blog </span></h3>
                <p>Update The Latest Fashion Trends in The World</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-40">
        <div class="col-xl-12">
          <div class="blog__slider-active p-relative">
            <Carousel :items-to-show="2" :wrap-around="false" ref="slider_1">
              <Slide
                v-for="item in blogData.filter((b) => b.blog === 'home-7')"
                :key="item.id"
                class="blog__slider-item"
              >
                <div class="blog-thumb m-img">
                  <img :src="item.img" alt="blog-img" />
                  <nuxt-link :href="`/blog-details/${item.id}`" class="btn">
                    <i class="fa fa-link"></i>
                  </nuxt-link>
                </div>
                <div class="blog__post-content">
                  <div class="blog__wrapper">
                    <h5 class="blog__post-title">
                    <nuxt-link :href="`/blog-details/${item.id}`" >
                      <span v-html="item.title"></span>
                    </nuxt-link>
                    </h5>
                    <div class="article-meta d-flex justify-content-center">
                      <span class="article-author">
                        <span>By</span> Theme_pure Admin</span>
                      <span> /</span>
                      <span class="article-publish">
                        <i class="fa fa-calendar-o"></i>
                        {{item.date}}
                        </span>
                    </div>
                  </div>
                </div>
              </Slide>
            </Carousel>
            <div class="owl-nav">
              <div class="owl-prev" @click="handlePrev">
                <button><i class="fal fa-angle-left"></i></button>
              </div>
              <div class="owl-next" @click="handleNext">
                <button><i class="fal fa-angle-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
// internal
import blogData from "~~/mixins/blogData";
// interface
interface sliderRef {
  next(): void;
  prev(): void;
}

export default defineComponent({
  components: { Carousel, Slide },
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
  mixins: [blogData],
  setup() {},
});
</script>

<style scoped>
.carousel__slide {
  display: block;
}
.blog__slider-area .carousel__slide.blog__slider-item {
  padding: 0 15px;
}
</style>
