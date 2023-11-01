<template>
  <layout :transparent="true">
    <breadcrumb-area
      :title="$t('config.home')"
      :subtitle="
        productDetails && productDetails.name ? productDetails.name : ''
      "
      :background="productDetails?.cover"
    />
    <shop-details-area @getProduct="productDetails = $event" />
  </layout>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import { useProductsStore } from "~~/store/useProducts";
import ShopDetailsArea from "~~/components/shop-details/ShopDetailsArea.vue";
import { storeToRefs } from "pinia";
import { UseCountryStore } from "~~/store/country";
import { IProduct } from "~~/types";
import { Formatter } from "sarala-json-api-data-formatter";

useHead({
  title: "Product Details",
});
const productDetails = ref<IProduct>();

// const formatter = new Formatter();
// const state = useProductsStore();
// const { setLoader } = useLoader();
// const fetch = $useHttpClient();
// const productId = useRoute().params.id;
// const countryStore = UseCountryStore();
// const { selectedCountryId } = storeToRefs(countryStore);
// watch(selectedCountryId, async (newVal, oldVal) => {
//   await getProductDetails(selectedCountryId.value);
// });
// const getProductDetails = async (countryId: any) => {
//   try {
//     setLoader(true);
//     const res = await fetch(`/products/${productId}?country_id=${countryId}`, {
//       method: "get",
//     });
//     const data = formatter.deserialize(res);
//     productDetails.value = data;
//     console.log("🚀 ~ file: [id].vue:28 ~ getProductDetails ~ data:", data);
//   } catch (error) {
//     setLoader(false);
//   }
// };

// onMounted(() => {
//   if (selectedCountryId.value) {
//     getProductDetails(selectedCountryId.value);
//   }
// });
// onMounted(async () => {
//   await getProductDetails();
// });
</script>
