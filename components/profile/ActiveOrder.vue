<template lang="">
  <div
    class="tab-pane fade"
    id="nav-activeo"
    role="tabpanel"
    aria-labelledby="nav-activeo-tab"
  >
    <div class="order__info">
      <div
        class="order__info-top d-flex justify-content-between align-items-center"
      >
        <h3 class="order__info-title">
          {{ $t("c.activeOrders") }}
        </h3>
        <!-- <button type="button" class="order__info-btn">
          <i class="fa-regular fa-trash-can"></i> Clear
        </button> -->
      </div>
      <div class="order__list white-bg table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="text-center">
                {{ $t("c.orderId") }}
              </th>
              <th scope="col" class="text-center">
                {{ $t("c.date") }}
              </th>
              <th scope="col" class="text-center">
                {{ $t("c.status") }}
              </th>
              <th scope="col" class="text-center">
                {{ $t("c.total_coast") }}
              </th>
            </tr>
          </thead>
          <tbody v-if="orderList && orderList.length">
            <tr v-for="(order, index) in orderList" :key="index">
              <td class="order__id text-center">
                {{ order.id }}
              </td>
              <td class="text-center">
                {{ order.created_at }}
              </td>
              <td class="text-center">
                {{ order.status }}
              </td>
              <td class="text-center">
                {{ order.total_coast }}
              </td>
              <!-- <td>
                <nuxt-link href="/product-details" class="order__view-btn"
                  >View</nuxt-link
                >
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { IOrder } from "~/types";
// const { t } = useI18n();
const fetch = $useHttpClient();
const { setLoader } = useLoader();
const orderList = ref<IOrder[]>([]);

const getPreviousOrders = async () => {
  try {
    setLoader(true);
    const res = await fetch("orders/active", {
      method: "get",
    });
    orderList.value = res.data;
    setLoader(false);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(false);
  }
};
onMounted(async () => {
  await getPreviousOrders();
});
</script>
<style lang=""></style>
