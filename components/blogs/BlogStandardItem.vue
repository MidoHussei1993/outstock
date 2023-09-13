<template>
  <div :class="`blog__item mb-60 ${style_2?'':'blog__border-bottom pb-60'}`">
    <div class="blog__thumb fix">
      <nuxt-link :href="`/blog-details/${blog.id}`" class="w-img">
        <img :src="blog.img" alt="blog" />
      </nuxt-link>
    </div>
    <div class="blog__content">
      <h4 :class="`${style_3?'':'blog__title'}`">
        <nuxt-link :href="`/blog-details/${blog.id}`">
          <span v-html="blog.title"></span>
        </nuxt-link>
      </h4>
      <div class="blog__meta">
        <span>By <a href="#">{{ blog.author }}</a></span>
        <span>/ {{ blog.date }}</span>
      </div>
      <p>{{ style_3 ? blog.desc.slice(0,80) : blog.desc }} [...]</p>
      <nuxt-link :href="`/blog-details/${blog.id}`" class="os-btn">read more</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import BlogType from "~~/types/blogType";

export default defineComponent({
  props: {
    blog: {
      type: Object as PropType<BlogType>,
      default: {},
      required: true,
    },
    style_2:{
      type:Boolean,
      default:false,
    },
    style_3:{
      type:Boolean,
      default:false,
    }
  },
});
</script>
