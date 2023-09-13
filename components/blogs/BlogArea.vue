<template>
  <section :class="`blog__area ${style_2 ? 'pt-90' : ''} pb-70`">
    <div :class="`${style_3?'custom-container' : 'container'}`">
      <div class="row">
        <div class="col-xl-12">
          <div class="section__title-wrapper text-center mb-55">
            <div class="section__title mb-10">
              <h2>Our Blog Posts</h2>
            </div>
            <div class="section__sub-title">
              <p>
                Mirum est notare quam littera gothica quam nunc putamus parum
                claram!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <Carousel
            :items-to-show="3"
            :wrap-around="true"
            :snapAlign="'center'"
            :breakpoints="{
              992: {
                itemsToShow: 3,
              },
              700: {
                itemsToShow: 2,
              },
              0: {
                itemsToShow: 1,
              },
            }"
            class="blog__slider"
          >
            <Slide
              v-for="(item, i) in blogData.filter((b) => b.blog === 'home')"
              :key="i"
            >
              <blog-item :item="item" />
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// external
import { Carousel, Slide } from "vue3-carousel";
import { defineComponent } from "vue";
// internal
import blogData from "~~/mixins/blogData";
import BlogItem from "./BlogItem.vue";

export default defineComponent({
  mixins: [blogData],
  components: { Carousel, Slide, BlogItem },
  props:{
    style_2:{
      type:Boolean,
      default:false,
    },
    style_3:{
      type:Boolean,
      default:false,
    },
  },
});
</script>

<style scoped>
  .blog__area .carousel__slide {
    padding: 0 15px;
  }
</style>
