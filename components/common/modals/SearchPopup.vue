<template>
  <section :class="`header__search white-bg transition-3 ${showSearch?'search-opened':''}`">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="header__search-inner text-center">
                    <form action="#">
                        <div class="header__search-btn" @click="showSearch = false">
                            <a href="#" class="header__search-btn-close">
                              <i class="fal fa-times"></i>
                            </a>
                        </div>
                        <div class="header__search-header">
                            <h3>Search</h3>
                        </div>
                        <div class="header__search-categories">
                            <ul class="search-category">
                                <li><nuxt-link href="/shop">All Categories</nuxt-link></li>
                                <li><nuxt-link href="/shop">Accessories</nuxt-link></li>
                                <li><nuxt-link href="/shop">Chair</nuxt-link></li>
                                <li><nuxt-link href="/shop">Tablet</nuxt-link></li>
                                <li><nuxt-link href="/shop">Men</nuxt-link></li>
                                <li><nuxt-link href="/shop">Women</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="header__search-input p-relative">
                            <input type="text" placeholder="Search for products... ">
                            <button type="submit"><i class="far fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </section>
  <!-- body overlay start -->
  <div @click="showSearch = false" 
   :class="`body-overlay transition-3 ${showSearch?'opened':''}`">
  </div>
  <!-- body overlay end -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
//  emits:['searchPopup'],
 data() {
  return {
    showSearch:false,
  }
 },
 methods:{
  openSearchPopup(){
    console.log('first')
    this.showSearch = true
  }
 }
})
</script>
