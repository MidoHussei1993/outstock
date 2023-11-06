<template>
  <layout :transparent="true">
    <breadcrumb-area title="Shop" subtitle="Shop" imageNamber="bg3" />
    <shop-four-col
      :products="productList"
      :pagination="pagination"
      v-if="productList.length"
    />
    <h2
      class="text-center display-5"
      style="font-weight: 400"
      v-if="!productList.length"
    >
      <i class="fad fa-person-dolly-empty mx-2 my-5"></i>
      {{ $t("config.noData") }}
    </h2>
    <div class="row my-4" v-if="productList.length">
      <div class="col-xl-12 text-center">
        <pagination
          class="mx-auto"
          v-if="pagination"
          :pagination="pagination"
          :totalPage="pagination.total_pages"
          :count-of-page="pagination?.total_pages"
          @paginatedData="paginatedData"
        />
      </div>
    </div>
  </layout>
</template>

<script lang="ts" setup>
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import ShopFourCol from "~~/components/shop/ShopFourCol.vue";
import Pagination from "~~/ui/Pagination.vue";

// import { Formatter } from "sarala-json-api-data-formatter";
import { IPagination, IProduct, IResponse } from "~~/types";
import { IAction } from "~~/types/action";

useHead({
  title: "Product List",
});

const fetch = $useHttpClient();
const { setLoader } = useLoader();
const { query } = useRoute();
const router = useRouter();
const productList = ref<IProduct[]>([]);
const pagination = ref<IPagination>();
const { getAction, hasAction } = $FN();

const paginatedData = (page: any) => {
  console.log("🚀 ~ file: index.vue:42 ~ paginatedData ~ page:", page[0]);
  getProductList(page);
};

const getProductList = async (page?: number) => {
  console.log("🚀 ~ file: index.vue:48 ~ getProductList ~ page:", page);
  try {
    setLoader(true);
    const action: IAction = JSON.parse(query.showAction as any);
    const { data, meta, ...res }: IResponse<IProduct[]> = await fetch(
      action.endpoint_url,
      {
        method: "get",
        // params: {
        //   ...(page && { page }),
        // },
      }
    );
    setLoader(false);
    pagination.value = meta.pagination;
    productList.value = data;
    console.log(
      "🚀 ~ file: index.vue:36 ~ getProductList ~  productList.value:",
      pagination.value
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
  getProductList();
});
</script>
<style lang=""></style>
