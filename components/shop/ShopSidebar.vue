<template>
  <div class="shop__sidebar">
    <!-- product category start -->
    <product-category />
    <!-- product category end -->

    <!-- pFilter By Price start -->
    <price-filter />
    <!-- pFilter By Price end -->

    <!-- product size start -->
    <product-sizes />
    <!-- product size end -->

    <!-- product color start -->
    <product-color />
    <!-- product color end -->

    <!-- product brand start -->
    <product-brands />
    <!-- product brand end -->

    <!-- reset button start -->
    <reset-button />
    <!-- reset button end -->

    <!-- product featured start -->
    <products-featured />
    <!-- product featured end -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PriceFilter from "./filter-widget/PriceFilter.vue";
import ProductBrands from "./filter-widget/ProductBrands.vue";
import ProductCategory from "./filter-widget/ProductCategory.vue";
import ProductColor from "./filter-widget/ProductColor.vue";
import ProductsFeatured from "./filter-widget/ProductsFeatured.vue";
import ProductSizes from "./filter-widget/ProductSizes.vue";
import ResetButton from "./filter-widget/ResetButton.vue";

export default defineComponent({
  components: {
    ProductCategory,
    PriceFilter,
    ProductSizes,
    ProductColor,
    ProductBrands,
    ResetButton,
    ProductsFeatured,
  },
  setup() {
    return {};
  },
});
</script>
