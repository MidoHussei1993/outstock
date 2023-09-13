<template>
  <div class="product__details-review">
      <div class="postbox__comments">
          <div class="postbox__comment-title mb-30">
              <h3>Reviews (32)</h3>
          </div>
          <div class="latest-comments mb-30">
              <ul>
                  <li v-for="(review, index) in item.reviews" :key="index" 
                  :class="`${review.children ? 'children' : ''}`">
                    <div class="comments-box">
                      <div class="comments-avatar">
                        <img :src="review.img" alt="" />
                      </div>
                      <div class="comments-text">
                        <div class="avatar-name">
                          <h5>{{review.name}}</h5>
                          <span> - {{review.time}} </span>
                          <a class="reply" href="#">Leave Reply</a>
                        </div>
                        <div class="user-rating">
                          <ul>
                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                            <li><a href="#"><i class="fal fa-star"></i></a></li>
                          </ul>
                        </div>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <span>“lorem ipsum”</span> will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                      </div>
                    </div>
                  </li>
              </ul>
          </div>
      </div>
      <div class="post-comments-form mb-100">
          <div class="post-comments-title mb-30">
              <h3>Your Review</h3>
              <div class="post-rating">
                  <span>Your Rating :</span>
                  <ul>
                      <li>
                          <a href="#">
                              <i class="fal fa-star"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i class="fal fa-star"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i class="fal fa-star"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i class="fal fa-star"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i class="fal fa-star"></i>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <!-- review-form -->
          <review-form/>
          <!-- review-form -->
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue'
import ProductType from '~~/types/productType';
import ReviewForm from '../forms/ReviewForm.vue';

export default defineComponent({
  components: { ReviewForm },
  props:{
    item:{
      type:Object as PropType<ProductType>,
      default:{},
      required:true
    },
  },
  setup () {
    return {}
  }
})
</script>
