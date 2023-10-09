<template>
  <div class="product__details-review">
    <div class="postbox__comments">
      <div
        class="postbox__comment-title mb-30"
        v-if="item.rates && item.rates.data"
      >
        <h3>
          Reviews (
          {{ item.rates.data.length }}
          )
        </h3>
      </div>
      <div class="latest-comments mb-30">
        <ul v-if="item.rates && item.rates.data">
          <li v-for="(review, index) in item.rates.data" :key="index">
            <!-- :class="`${review.children ? 'children' : ''}`"> -->
            <div class="comments-box">
              <div class="comments-avatar">
                <img
                  :src="review.user.data.profile_picture"
                  style="width: 79px; height: 79px"
                  alt=""
                />
              </div>
              <div class="comments-text">
                <div class="avatar-name">
                  <h5>{{ review.user.data.name }}</h5>
                  <span>
                    - {{ moment(review.created_at).format("YYYY-MM-DD") }}
                  </span>
                  <!-- <a class="reply" href="#">Leave Reply</a> -->
                </div>
                <div class="user-rating">
                  <ul>
                    <li v-for="item in review.rate" :key="item">
                      <a href="#"><i class="fas fa-star"></i></a>
                    </li>
                  </ul>
                </div>
                <p>{{ review.comment }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="post-comments-form mb-100">
      <!-- review-form -->
      <review-form
        :item="item"
        @updateProductDetails="$emit('updateProductDetails', {})"
      />
      <!-- review-form -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, PropType } from "vue";
import ProductType from "~~/types/productType";
import ReviewForm from "../forms/ReviewForm.vue";
import { IProduct } from "~~/types";
import moment from "moment";

const props = defineProps({
  item: { type: Object as PropType<IProduct>, default: () => {} },
});
</script>
