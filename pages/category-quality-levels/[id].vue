<template>
  <layout :transparent="true">
    <breadcrumb-area
      :title="$t('c.categories')"
      :subtitle="$t('c.categories')"
    />
    <div>
      <div class="row my-4">
        <div class="col-lg-11 col-md-11 col-sm-12 mx-auto">
          <div class="row">
            <div
              class="col-lg-3 col-md-6 col-sm-12 mt-3"
              v-for="(item, index) in qualityLevelList"
              :key="index"
            >
              <div class="card h-100">
                <img
                  style="object-fit: contain"
                  class="card-img-top"
                  :src="item.image"
                  height="200"
                  alt="Card image cap"
                />
                <div
                  class="card-body d-flex flex-column justify-content-between shadow-sm"
                >
                  <h4 class="card-title text-center my-2 font-weight-bold">
                    {{ item.name }}
                  </h4>
                  <button
                    v-if="hasAction(item, 'get_quality_level_product')"
                    class="btn btn-block btn-outline-primary mt-3 w-100"
                    @click="navigateProducts(item)"
                  >
                    {{ getAction(item, "get_quality_level_product").label }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script lang="ts" setup>
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
// import { Formatter } from "sarala-json-api-data-formatter";
import { IQualityLevel } from "~~/types";
import { IAction } from "~~/types/action";

useHead({
  title: "Category List",
});

const fetch = $useHttpClient();
const { setLoader } = useLoader();
const { query } = useRoute();
const router = useRouter();
const qualityLevelList = ref<IQualityLevel[]>([]);
const { getAction, hasAction } = $FN();

const getCategoriesByBrandId = async () => {
  try {
    setLoader(true);
    const action: IAction = JSON.parse(query.showAction as any);
    const { data } = await fetch(action.endpoint_url, {
      method: "get",
    });
    console.log(
      "🚀 ~ file: [id].vue:83 ~ getCategoriesByBrandId ~ data:",
      data
    );
    qualityLevelList.value = data;
  } catch (error) {
    setLoader(false);
  }
};
const navigateProducts = (item: any) => {
  router.push({
    path: `/products`,
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
