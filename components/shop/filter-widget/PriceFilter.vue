<template>
 <client-only>
    <div class="sidebar__widget mb-55">
    <div class="sidebar__widget-title mb-30">
        <h3>Filter By Price</h3>
    </div>
    <div class="sidebar__widget-content">
        <div class="price__slider">
            <div id="slider-range"></div>
            <div>
                <form @submit.prevent="state.filterPrice">
                    <Slider
                        v-model="state.priceRange"
                        :tooltips="false"
                        @change="state.onChangeRange"
                        :max="500"
                    />
                    <button type="submit">Filter</button>
                    <label for="amount">Price : ${{ state.priceRange[0] }} - ${{ state.priceRange[1] }}</label>
                </form>
            </div>
        </div>
    </div>
</div>
 </client-only>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Slider from '@vueform/slider';
import '@vueform/slider/themes/default.css';
import { useProductsStore } from '~~/store/useProducts';

export default defineComponent({
    components: {Slider},
    setup () {
    const state = useProductsStore()
    return {state}
  }
})
</script>

<style scoped>
</style>

