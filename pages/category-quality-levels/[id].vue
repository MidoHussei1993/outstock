<template>
  <layout :transparent="true">
    <breadcrumb-area
      :title="$t('c.quality_levels')"
      :subtitle="$t('c.quality_levels')"
      imageNamber="bg2"
    />
    <div>
      <div class="row my-4" v-if="qualityLevelList.length">
        <div class="col-lg-11 col-md-11 col-sm-12 mx-auto">
          <div class="row">
            <div
              class="col-lg-3 col-md-6 col-sm-12 mt-3"
              v-for="(item, index) in qualityLevelList"
              :key="index"
            >
              <div class="card h-100 rounded-3">
                <img
                  style="object-fit: contain"
                  class="card-img-top"
                  :src="getRandomImage()"
                  height="200"
                  alt="Card image cap"
                />
                <div
                  class="card-body d-flex flex-column justify-content-between shadow-sm"
                >
                  <h4 class="card-title text-center my-2 font-weight-bold">
                    <strong>
                      {{ item.name }}
                    </strong>
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
    <h2
      class="text-center display-5"
      style="font-weight: 400"
      v-if="!qualityLevelList.length"
    >
      <i class="fad fa-person-dolly-empty mx-2 my-5"></i>
      {{ $t("config.noData") }}
    </h2>
    <div class="row my-4" v-if="qualityLevelList.length">
      <div class="col-xl-12 text-center">
        <pagination
          class="mx-auto"
          v-if="pagination?.total_pages"
          :pagination="pagination"
          :totalPage="pagination?.total_pages"
          :count-of-page="pagination?.total_pages"
          @paginatedData="paginatedData"
        />
      </div>
    </div>
    <Loader v-if="loading" />
  </layout>
</template>

<script lang="ts" setup>
import bg1 from "~/assets/img/bg-1.jpg";
import bg2 from "~/assets/img/bg-2.jpg";
import bg3 from "~/assets/img/bg-3.jpg";
import bg4 from "~/assets/img/bg-4.jpg";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
// import { Formatter } from "sarala-json-api-data-formatter";
import { IPagination, IQualityLevel } from "~~/types";
import { IAction } from "~~/types/action";

useHead({
  title: "Category List",
});

const fetch = $useHttpClient();
const { setLoader, loading } = useLoader();
const { query } = useRoute();
const router = useRouter();
const qualityLevelList = ref<IQualityLevel[]>([]);
const { getAction, hasAction } = $FN();
const pagination = ref<IPagination>();
const paginatedData = (page: number) => {
  console.log("🚀 ~ file: index.vue:41 ~ paginatedData ~ arg:", page);
  getCategoriesByBrandId(page);
};

const getRandomImage = () => {
  const imageArray = [bg1, bg2, bg3, bg4];
  const random = Math.floor(Math.random() * imageArray.length);
  console.log(random, imageArray[random]);
  return imageArray[random];
};

const getCategoriesByBrandId = async (page: number = 1) => {
  try {
    setLoader(true);
    const action: IAction = JSON.parse(query.showAction as any);
    const { data } = await fetch(action.endpoint_url, {
      method: "get",
      params: {
        page: page,
      },
    });
    setLoader(false);
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
