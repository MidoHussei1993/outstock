<template>
  <section :class="`client__area ${style_2 ? '' : 'pt-15 pb-140'}`">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <Carousel
            :items-to-show="5"
            :wrap-around="true"
            :snapAlign="'center'"
            :breakpoints="{
              1200: {
                itemsToShow: 5,
              },
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
            :class="`client__slider ${style_2 ? 'pt-80 pb-80 border-top-1' : ''} text-center`"
          >
            <Slide v-for="(brand, i) in brands" :key="i" class="client__thumb">
              <a style="cursor: pointer;">
                <img :src="brand" alt="client"/>
              </a>
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
import { defineComponent, reactive, toRefs } from "vue";
// internal
import b_img_1 from "~/assets/img/client/client-1.jpg";
import b_img_2 from "~/assets/img/client/client-2.jpg";
import b_img_3 from "~/assets/img/client/client-3.jpg";
import b_img_4 from "~/assets/img/client/client-4.jpg";
import b_img_5 from "~/assets/img/client/client-5.jpg";

export default defineComponent({
  components: { Carousel, Slide },
  props:{
    style_2:{
      type:Boolean,
      default:false,
    }
  },
  setup() {
    const state = reactive({
      brands: [b_img_1, b_img_2, b_img_3, b_img_4, b_img_5, b_img_2],
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
