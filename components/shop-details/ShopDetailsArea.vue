<template>
  <section class="shop__area pb-65" v-if="item">
    <div class="shop__top grey-bg-6 pt-100 pb-90">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-10 col-md-12 mx-auto">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-12">
                <div class="product__modal-box d-flex justify-content-center">
                  <div class="product__modal-nav mr-20">
                    <nav>
                      <div
                        class="nav nav-tabs"
                        id="product-details"
                        role="tablist"
                        v-if="
                          item.images &&
                          item.images.data &&
                          item.images.data.length
                        "
                      >
                        <button
                          v-for="(img, i) in item.images.data"
                          :key="i"
                          :class="`nav-item nav-link ${
                            img === active_img ? 'active' : ''
                          }`"
                          @click="handleActiveImg(img)"
                          style="margin-bottom: 5px"
                        >
                          <div
                            class="product__nav-img w-img"
                            v-if="img.type == 'image'"
                          >
                            <img
                              :src="img.file"
                              class="w-100"
                              alt="image"
                              style="
                                width: 95px;
                                height: 120px;
                                object-fit: cover;
                              "
                            />
                          </div>
                          <div v-if="img.type == 'video'" class="text-center">
                            <img
                              src="~/assets/img/video.png"
                              style="max-width: 70px"
                            />
                          </div>
                        </button>
                      </div>
                    </nav>
                  </div>
                  <div class="tab-content mb-20" id="product-detailsContent">
                    <div class="product__modal-img product__thumb w-img">
                      <img
                        v-if="active_img?.type == 'image'"
                        :src="active_img?.file"
                        alt="product_img"
                        loading="lazy"
                      />
                      <video
                        controls
                        style="width: 94%"
                        class="mx-1"
                        :src="active_img?.file"
                        v-if="active_img?.type == 'video'"
                      ></video>
                      <div
                        class="product__sale"
                        v-if="item.offer && item.offer.data"
                      >
                        <span class="new">new</span>
                        <span class="percent">
                          % {{ item.offer.data.discount_percentage }}
                        </span>
                      </div>
                      margin-bottom: 5px;
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-8 col-lg-8 col-md-12">
                <product-details-content
                  :item="item"
                  :style_2="true"
                  :duration="duration"
                  @updateProductDetails="getProductDetails(selectedCountryId)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container-fluid my-4"
      v-if="item.sections && item.sections.data"
    >
      <div class="row">
        <div class="col-lg-10 col-md-12 mx-auto">
          <div class="card">
            <Panel
              :header="section.title"
              toggleable
              v-for="(section, index) in item.sections.data"
              :key="index"
            >
              <div class="row">
                <div class="col-md-10 col-sm-12 mx-auto">
                  <Carousel
                    :items-to-show="1"
                    :wrap-around="true"
                    class="slider-active"
                  >
                    <Slide
                      class="single-slider single-slider-2 slider__height-5 d-flex align-items-center"
                      style="height: 300px"
                      :style="{ backgroundImage: `url(${section.image})` }"
                    >
                    </Slide>
                    <Slide
                      class="single-slider single-slider-2 slider__height-5 d-flex align-items-center"
                      style="height: 300px"
                      :style="{ backgroundImage: `url(${section.image2})` }"
                    >
                    </Slide>
                    <Slide
                      class="single-slider single-slider-2 slider__height-5 d-flex align-items-center"
                      style="height: 300px"
                      :style="{ backgroundImage: `url(${section.image3})` }"
                    >
                    </Slide>
                    <template #addons>
                      <Pagination />
                    </template>
                  </Carousel>
                </div>
              </div>
              <span class="m-0" v-html="section.description"></span>
              <div class="text-center">
                <video
                  controls
                  autoplay
                  style="height: 350px"
                  class="mx-1 my-2"
                  :src="section.video"
                  v-if="section.video"
                ></video>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
    <div class="shop__bottom">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="product__details-tab">
              <div class="product__details-tab-nav text-center mb-45">
                <nav>
                  <div
                    class="nav nav-tabs justify-content-start justify-content-sm-center"
                    id="pro-details"
                    role="tablist"
                  >
                    <!-- <a
                      class="nav-item nav-link active"
                      id="des-tab"
                      data-bs-toggle="tab"
                      href="#des"
                      role="tab"
                      aria-controls="des"
                      aria-selected="true"
                      >Description</a
                    > -->
                    <a
                      class="nav-item nav-link"
                      id="add-tab"
                      data-bs-toggle="tab"
                      href="#add"
                      role="tab"
                      aria-controls="add"
                      aria-selected="false"
                      >Additional Information</a
                    >
                    <a
                      class="nav-item nav-link active"
                      id="review-tab"
                      data-bs-toggle="tab"
                      href="#review"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                      >Reviews (
                      {{
                        item.rates && item.rates.data
                          ? item.rates.data.length
                          : 0
                      }}
                      )</a
                    >
                  </div>
                </nav>
              </div>
              <div class="tab-content" id="pro-detailsContent">
                <!-- <div class="tab-pane fade show active" id="des" role="tabpanel">
                  <div class="product__details-des">
                    <p v-html="item.description"></p>
                    <div class="product__details-des-list mb-20">
                      <ul>
                        <li v-for="(list,i) in item.details.details_list" :key="i">
                                              <span>{{list}}</span>
                                            </li>
                      </ul>
                    </div>
                    <p>{{item.details.details_text_2}}</p>
                  </div>
                </div> -->
                <div class="tab-pane fade" id="add" role="tabpanel">
                  <div class="product__details-add">
                    <ul>
                      <li><span>Weight</span></li>
                      <li><span>.25 KG</span></li>
                      <li><span>Dimention</span></li>
                      <li><span>62 × 56 × 12 cm</span></li>
                      <li><span>Size</span></li>
                      <li><span>XL, XXL, LG, SM, MD</span></li>
                    </ul>
                  </div>
                </div>
                <div class="tab-pane fade" id="review" role="tabpanel">
                  <product-details-review
                    :item="item"
                    @updateProductDetails="getProductDetails(selectedCountryId)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- related products start -->
  <!-- <related-products :item="item"/> -->
  <!-- related products end -->
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";

import ProductDetailsContent from "./ProductDetailsContent.vue";
import ProductDetailsReview from "./ProductDetailsReview.vue";
import RelatedProducts from "./RelatedProducts.vue";
import { IMedia, IProduct } from "~~/types";
import { storeToRefs } from "pinia";
import { UseCountryStore } from "~~/store/country";
import { Formatter } from "sarala-json-api-data-formatter";
// const props = defineProps({
//   item: { type: Object as PropType<IProduct>, default: () => {} },
// });
const fetch = $useHttpClient();
const { setLoader } = useLoader();
const formatter = new Formatter();
const productId = useRoute().params.id;
const countryStore = UseCountryStore();
const { selectedCountryId } = storeToRefs(countryStore);
const item = ref<IProduct>();
const duration = ref<any>({});
const active_img = ref<IMedia>();
const emit = defineEmits(["getProduct"]);
let timer: any;

watch(selectedCountryId, async (newVal, oldVal) => {
  await getProductDetails(selectedCountryId.value);
});

const getProductDetails = async (countryId: any) => {
  try {
    setLoader(true);
    const res = await fetch(`/products/${productId}?country_id=${countryId}`, {
      method: "get",
    });
    const data: IProduct = formatter.deserialize(res);
    data.orderQuantity = 1;
    item.value = data;
    if (item.value.offer && item.value.offer.data)
      timer = setInterval(() => {
        showRemaining(item.value?.offer.data.end_date);
      }, 1000);

    emit("getProduct", data);
    if (item.value?.images && item.value?.images.data) {
      active_img.value = item.value?.images.data[0];
    } else if (item.value?.image) {
      active_img.value = {
        file: item.value?.image,
      } as IMedia;
    }
    item.value.sizes.data.map((size) => {
      size.quantity = 1;
      size.selected = false;
      return size;
    });
    console.log("🚀 ~ file: [id].vue:28 ~ getProductDetails ~ data:", data);
  } catch (error) {
    setLoader(false);
  }
};
const handleActiveImg = (img: IMedia): void => {
  active_img.value = img;
};

const showRemaining = (end: any) => {
  let _second = 1000;
  let _minute = _second * 60;
  let _hour = _minute * 60;
  let _day = _hour * 24;
  let now = new Date();
  // @ts-ignore
  let distance = new Date(end) - now;
  if (distance < 0) {
    clearInterval(timer);
    // document.getElementById("countdown").innerHTML = "EXPIRED!";

    return;
  }
  let days = Math.floor(distance / _day);
  let hours = Math.floor((distance % _day) / _hour);
  let minutes = Math.floor((distance % _hour) / _minute);
  let seconds = Math.floor((distance % _minute) / _second);
  duration.value = {
    days,
    hours,
    minutes,
    seconds,
  };
};

onMounted(() => {
  if (selectedCountryId.value) {
    getProductDetails(selectedCountryId.value);
  }
});
</script>
