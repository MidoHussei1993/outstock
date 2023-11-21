<template>
  <layout :transparent="true">
    <breadcrumb-area
      :title="$t('c.categories')"
      :subtitle="$t('c.categories')"
      :imageNamber="'bg5'"
    />
    <div>
      <div class="row my-4">
        <div class="col-lg-11 col-md-11 col-sm-12 mx-auto">
          <div class="row">
            <div
              class="col-lg-3 col-md-6 col-sm-12 mt-3"
              v-for="(item, index) in categoriesList"
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

                  <div v-if="item.qualityLevels && item.qualityLevels.data">
                    <h5
                      v-for="(level, index) in item.qualityLevels.data"
                      :key="level.id"
                      class="d-inline-block mx-1"
                    >
                      <span class="badge bg-dark ml-1 pointer">
                        {{ level.name }}
                      </span>
                    </h5>
                  </div>
                  <button
                    v-if="hasAction(item, 'quality_levels')"
                    class="btn btn-block btn-outline-primary mt-3 w-100"
                    @click="navigateToQualityLevel(item)"
                  >
                    {{ getAction(item, "quality_levels").label }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-4">
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
  </layout>
</template>

<script lang="ts" setup>
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import Pagination from "~~/ui/Pagination.vue";

// import { Formatter } from "sarala-json-api-data-formatter";
import { ICategory, IPagination } from "~~/types";

useHead({
  title: "Category List",
});
const router = useRouter();
const fetch = $useHttpClient();
const { setLoader } = useLoader();
// const formatter = new Formatter();
const brandId = useRoute().params.id;
const { getAction, hasAction } = $FN();
const categoriesList = ref<ICategory[]>([]);
const pagination = ref<IPagination>();
const paginatedData = (page: number) => {
  getCategoriesByBrandId(page);
};

const getCategoriesByBrandId = async (page: number = 1) => {
  console.log("🚀 ~ file: [id].vue:95 ~ getCategoriesByBrandId ~ page:", page);
  try {
    setLoader(true);
    const { data, meta, ...res } = await fetch(
      `categories/get-by-brand/${brandId}`,
      {
        method: "get",
        params: {
          page: page,
        },
      }
    );
    console.log("🚀 ~ file: [id].vue:95 ~ getCategoriesByBrandId ~ res:", meta);
    categoriesList.value = data;
    pagination.value = meta.pagination;
  } catch (error) {
    setLoader(false);
  }
};
const navigateToQualityLevel = (item: any) => {
  router.push({
    path: `/category-quality-levels/${item.id}`,
    query: {
      showAction: JSON.stringify(getAction(item, "quality_levels")),
    },
  });
};

onMounted(() => {
  getCategoriesByBrandId();
});
</script>
<style lang=""></style>
