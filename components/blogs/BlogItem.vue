<template>
  <div class="blog__item mb-30">
    <div class="blog__thumb fix">
      <nuxt-link :href="`/blog-details/${item.id}`" class="w-img">
        <img :src="item.img" alt="blog"/>
      </nuxt-link>
    </div>
    <div class="blog__content">
      <h4>
        <nuxt-link :href="`/blog-details/${item.id}`">
          <span v-html="item.title"></span>
        </nuxt-link>
      </h4>
      <div class="blog__meta">
        <span>By <a href="#">{{item.author}}</a></span>
        <span> / {{item.date}}</span>
      </div>
      <div v-if="!style_2">
        <p>
          {{item.desc}}
        </p>
        <nuxt-link :href="`/blog-details/${item.id}`" class="os-btn">read more</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import BlogType from "~~/types/blogType";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<BlogType>,
      default: {},
      required: true,
    },
    style_2:{
      type:Boolean,
      default:false,
    }
  },
});
</script>
