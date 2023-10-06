<template>
  <layout :transparent="true">
    <breadcrumb-area
      :title="$t('c.categories')"
      :subtitle="$t('c.categories')"
    />
    <div>
      <!-- <div class="row my-4">
        <div class="col-lg-11 col-md-11 col-sm-12 mx-auto">
          <div class="row">
            <div
              class="col-lg-3 col-md-6 col-sm-12 mt-3"
              v-for="(item, index) in categoriesList"
              :key="index"
            >
              <div class="card h-100">
                <img
                  class="card-img-top"
                  :src="item.image"
                  alt="Card image cap"
                />
                <div
                  class="card-body d-flex flex-column justify-content-between shadow-sm"
                >
                  <h4 class="card-title text-center my-2">
                    {{ item.name }}
                  </h4>

                  <div v-if="item.qualityLevels && item.qualityLevels.data">
                    <h5
                      v-for="(level, index) in item.qualityLevels.data"
                      :key="level.id"
                      class="d-inline-block mx-1"
                    >
                      <span class="badge bg-warning px-1">
                        {{ level.name }}
                      </span>
                    </h5>
                  </div>
                  <button
                    class="btn btn-block btn-outline-primary mt-3 w-100"
                    @click="$navigateTo(`/category-quality-levels/${item.id}`)"
                  >
                    {{ $t("action.browse") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </layout>
</template>

<script lang="ts" setup>
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
// import { Formatter } from "sarala-json-api-data-formatter";
import { IQualityLevel } from "~~/types";
import { storeToRefs } from "pinia";
import { UseCountryStore } from "~~/store/country";

useHead({
  title: "Category List",
});
const country_id = ref<number | null>(null);
const fetch = $useHttpClient();
const { setLoader } = useLoader();
// const formatter = new Formatter();
const categoryId = useRoute().params.id;
const qualityLevelsList = ref<IQualityLevel[]>([]);
const countryStore = UseCountryStore();
const { selectedCountryId } = storeToRefs(countryStore);

watch(selectedCountryId, async (newVal, oldVal) => {
  country_id.value = newVal as any;
  getQualityLevelsByCategoryId();
});

const getQualityLevelsByCategoryId = async () => {
  if (localStorage.getItem("token")) {
    const user = JSON.parse(localStorage.getItem("user")!);
    console.log(
      "🚀 ~ file: [id].vue:79 ~ getQualityLevelsByCategoryId ~ user:",
      user
    );
    country_id.value = user.country_id;
  } else {
    country_id.value = selectedCountryId.value;
    console.log(
      "🚀 ~ file: [id].vue:83 ~ getQualityLevelsByCategoryId ~ selectedCountryId.value:",
      selectedCountryId.value
    );
  }
  try {
    setLoader(true);
    const { data } = await fetch(
      `quality-levels/get-by-category/${categoryId}?country_id=${country_id.value}`,
      {
        method: "get",
      }
    );
    qualityLevelsList.value = data;
    console.log(
      "🚀 ~ file: [id].vue:23 ~ getCategoriesByBrandId ~ categoriesList.value :",
      qualityLevelsList.value
    );
  } catch (error) {
    setLoader(false);
  }
};
</script>
<style lang=""></style>
