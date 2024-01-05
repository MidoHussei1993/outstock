<template>
  <div class="container-fluid h-100">
    <div class="row h-100 d-flex align-items-center justify-content-center">
      <div class="col-12">
        <div class="card my-4 rounded-4">
          <div class="card-body text-center" v-if="busyLoading">
            <i class="fad fa-spinner fa-spin my-5" style="font-size: 60px"></i>
          </div>
          <div class="card-body text-center" v-if="!busyLoading">
            <i
              class="far fa-badge-check display-1 my-4 text-success"
              v-if="payment_transaction_status != 'failed'"
            ></i>
            <i
              class="fal fa-times-octagon display-1 my-4 text-danger"
              v-if="payment_transaction_status == 'failed'"
            ></i>
            <h1 class="my-4">
              {{ message }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { setLoader } = useLoader();
const fetch = $useHttpClient();
const { query } = useRoute();
const message = ref("");
const busyLoading = ref<boolean>(false);
const payment_transaction_status = ref("");

const getCuntires = async () => {
  busyLoading.value = true;
  try {
    const res = await fetch(
      `https://admin.mattress.kzweb.store/api/v1/ar/validate-payment-transaction-status/${
        query.resultIndicator ? query.resultIndicator : ""
      }`,
      {
        method: "get",
      }
    );
    busyLoading.value = false;
    message.value = res.meta.message;
    payment_transaction_status.value = res.meta.payment_transaction_status;
    console.log("🚀 ~ file: payment.vue:31 ~ getCuntires ~ res:", res);
  } catch (error) {
    busyLoading.value = false;
    console.log(error);
  }
};

onMounted(() => {
  getCuntires();
});
</script>
<style lang=""></style>
