<template>
  <section class="checkout-area pb-70">
    <div class="container">
      <form @submit.prevent="handleFormSubmit">
        <div class="row">
          <div class="col-lg-6">
            <div class="checkbox-form">
              <h3>Billing Details</h3>
              <!-- billing details start -->
              <billing-details />
              <!-- billing details end -->

              <!-- different address start -->
              <different-address />
              <!-- different address end -->
            </div>
          </div>
          <div class="col-lg-6">
            <!-- order area start -->
            <order-area />
            <!-- order area end -->
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import BillingDetails from "./BillingDetails.vue";
import DifferentAddress from "./DifferentAddress.vue";
import OrderArea from "./OrderArea.vue";

export default {
  components: { OrderArea, BillingDetails, DifferentAddress },
  methods: {
    handleFormSubmit() {
      console.log("submit form");
    },
  },
};
</script>
