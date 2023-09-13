<template>
  <div class="modal fade" :id="`${list ? `productModalListId-${item.id}` : `productModalId-${item.id}`}`" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered product-modal" role="document">
          <div class="modal-content">
              <div class="product__modal-wrapper p-relative">
                  <div class="product__modal-close p-absolute">
                      <button data-bs-dismiss="modal"><i class="fal fa-times"></i></button>
                  </div>
                  <div class="product__modal-inner">
                      <div class="row">
                          <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                              <div class="product__modal-box">
                                  <div class="tab-content mb-20" id="nav-tabContent">
                                      <div class="product__modal-img w-img">
                                          <img :src="active_img" alt="product_img">
                                      </div>
                                  </div>
                                  <nav>
                                      <div class="nav nav-tabs justify-content-between">
                                        <button
                                          v-for="(img, i) in item.related_images"
                                            :key="i"
                                            :class="`nav-item nav-link ${ img === active_img ? 'active' : '' }`"
                                            @click="handleActiveImg(img)"
                                          >
                                            <img
                                              :src="img"
                                              alt="image"
                                              style="width: 90px; height: 90px;"
                                            />
                                          </button>
                                      </div>
                                      </nav>
                              </div>
                          </div>
                          <div class="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                              <product-details-content :item="item"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import ProductDetailsContent from '~~/components/shop-details/ProductDetailsContent.vue';
import ProductType from '~~/types/productType';

export default defineComponent({
  components: { ProductDetailsContent },
  props:{
    item:{
      type:Object as PropType<ProductType>,
      default:{},
      required:true
    },
    list:{
        type:Boolean,
        default:false,
    }
  },
  data () {
    return {
      active_img:this.item.img
    }
  },
  methods:{
    handleActiveImg(img:string){
      this.active_img = img
    }
  },
  setup () {
    return {}
  }
})
</script>
