<template>
  <section class="page__title p-relative d-flex align-items-center" :style="{ backgroundImage:`url(${bg})`}">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="page__title-inner text-center">
                    <h1>{{title}}</h1>
                    <div class="page__title-breadcrumb">                                 
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><nuxt-link href="/">Home</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">{{subtitle}}</li>
                        </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import bg1 from '~/assets/img/page-title/page-title-1.jpg';
import bg2 from '~/assets/img/pexels-castorly-stock-3682240.jpg';
import bg3 from '~/assets/img/pexels-cottonbro-studio-3171066.jpg';
import bg4 from '~/assets/img/pexels-malidate-van-833046 (1).jpg';

export default defineComponent({
  props:{
    title:{
      type:String,
      required:true,
    },
    subtitle:{
      type:String,
      required:true,
    },
    imageNamber:{
      type:String,
      required:true,
      default:'bg1'
    },
  },
  data() {
    return {
      bg1,
      bg2,
      bg3,
      bg4,
      bg:null
    }
  },
  mounted(){
    this.bg = this[this.$props.imageNamber]
  }
})
</script>
