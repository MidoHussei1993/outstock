<template>
  <section class="blog__area pt-100 pb-100">
    <div class="container">
      <div class="row grid">
        <masonry-wall
          :items="blogData.filter((b) => b.blog === 'blog-masonry')"
          :gap="30"
        >
          <template #default="{ item }">
            <div class="blog__wrapper">
              <div class="blog__item mb-60">
                <div class="blog__thumb fix">
                  <nuxt-link :href="`/blog-details/${item.id}`" class="w-img">
                    <img :src="item.img" alt="blog" />
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
                    <span>/ {{item.date}}</span>
                  </div>
                  <p>
                    {{item.desc}} [...]
                  </p>
                  <nuxt-link :href="`/blog-details/${item.id}`" class="os-btn">read more</nuxt-link>
                </div>
              </div>
            </div>
          </template>
        </masonry-wall>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import blogData from "~~/mixins/blogData";

export default defineComponent({
  mixins: [blogData],
  setup() {
    return {};
  },
});
</script>
