<template>
  <div v-if="hasAction(item, 'rate_product')">
    <div class="post-comments-title mb-30">
      <h3>Your Review</h3>
      <div class="post-rating">
        <span>Your Rating :</span>
        <ul>
          <li>
            <a @click="rate = 1" :class="{ 'selcted-star': rate >= 1 }">
              <i class="fas fa-star"></i>
            </a>
          </li>
          <li>
            <a @click="rate = 2" :class="{ 'selcted-star': rate >= 2 }">
              <i class="fas fa-star"></i>
            </a>
          </li>
          <li>
            <a @click="rate = 3" :class="{ 'selcted-star': rate >= 3 }">
              <i class="fas fa-star"></i>
            </a>
          </li>
          <li>
            <a @click="rate = 4" :class="{ 'selcted-star': rate >= 4 }">
              <i class="fas fa-star"></i>
            </a>
          </li>
          <li>
            <a @click="rate = 5" :class="{ 'selcted-star': rate >= 5 }">
              <i class="fas fa-star"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <form
      id="contacts-form"
      class="conatct-post-form"
      @submit.prevent="handleSubmit"
    >
      <div class="row">
        <div class="col-xl-12">
          <div class="contact-icon p-relative contacts-message">
            <textarea
              name="comments"
              id="comments"
              v-model="comment"
              cols="30"
              rows="10"
              placeholder="Comments"
            ></textarea>
          </div>
        </div>
        <div class="col-xl-12">
          <button
            class="os-btn os-btn-black"
            type="submit"
            :disabled="!comment.length"
            @click="postComment()"
            v-if="hasAction(item, 'rate_product')"
          >
            Post comment
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { IProduct } from "~~/types";
import { IAction } from "~~/types/action";

const props = defineProps({
  item: { type: Object as PropType<IProduct>, default: () => {} },
});
const fetch = $useHttpClient();
const { setLoader } = useLoader();
const { getAction, hasAction } = $FN();
const comment = ref("");
const rate = ref(0);
const emit = defineEmits(["updateProductDetails"]);

const postComment = async () => {
  const action: IAction = getAction(props.item, "rate_product");
  try {
    setLoader(true);
    const res = await fetch(action.endpoint_url, {
      method: "post",
      body: $payloadParser(
        {
          id: 1,
          rate: rate.value,
          comment: comment.value,
        },
        "user"
      ),
    });
    console.log(res);
    emit("updateProductDetails", {});
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
  } finally {
    setLoader(false);
  }
};
</script>

<style lang="scss" scoped>
.selcted-star {
  color: #bc8246 !important;
}
.fa-star {
  cursor: pointer;
}
</style>
