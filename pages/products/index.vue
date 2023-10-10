<template>
  <layout :transparent="true">
    <breadcrumb-area title="Shop" subtitle="Shop" />
    <shop-four-col :products="productList" />
  </layout>
</template>

<script lang="ts" setup>
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import ShopFourCol from "~~/components/shop/ShopFourCol.vue";

// import { Formatter } from "sarala-json-api-data-formatter";
import { IProduct } from "~~/types";
import { IAction } from "~~/types/action";

useHead({
  title: "Product List",
});

const fetch = $useHttpClient();
const { setLoader } = useLoader();
const { query } = useRoute();
const router = useRouter();
const productList = ref<IProduct[]>([]);
const { getAction, hasAction } = $FN();

const getCategoriesByBrandId = async () => {
  try {
    setLoader(true);
    const action: IAction = JSON.parse(query.showAction as any);
    const { data } = await fetch(action.endpoint_url, {
      method: "get",
    });
    productList.value = data;
    console.log(
      "🚀 ~ file: index.vue:36 ~ getCategoriesByBrandId ~  productList.value:",
      productList.value
    );
  } catch (error) {
    setLoader(false);
  }
};
const navigateProducts = (item: any) => {
  router.push({
    path: `/category-quality-levels/${item.id}`,
    query: {
      showAction: JSON.stringify(getAction(item, "get_quality_level_product")),
    },
  });
};

onMounted(() => {
  getCategoriesByBrandId();
});
</script>
<style lang=""></style>
