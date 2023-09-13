<template>
  <div class="different-address">
    <div class="ship-different-title">
      <h3>
        <label for="ship-box">Ship to a different address?</label>
        <input @click="handleShipBox" id="ship-box" type="checkbox" />
      </h3>
    </div>
    <div v-if="shipBox" id="ship-box-info">
      <div class="row">
        <div class="col-md-12">
            <country-select />
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>First Name <span class="required">*</span></label>
            <input type="text" placeholder="First Name" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>Last Name <span class="required">*</span></label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <label>Company Name</label>
            <input type="text" placeholder="example LTD." />
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <label>Address <span class="required">*</span></label>
            <input type="text" placeholder="Street address" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <input
              type="text"
              placeholder="Apartment, suite, unit etc. (optional)"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <label>Town / City <span class="required">*</span></label>
            <input type="text" placeholder="Town / City" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>State / County <span class="required">*</span></label>
            <input type="text" placeholder="State / County" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>Postcode / Zip <span class="required">*</span></label>
            <input type="text" placeholder="Postcode / Zip" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>Email Address <span class="required">*</span></label>
            <input type="email" placeholder="Your Email" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>Phone <span class="required">*</span></label>
            <input type="text" placeholder="Phone number" />
          </div>
        </div>
      </div>
    </div>
    <!-- <ClientOnly> -->
    <div class="order-notes">
      <div class="checkout-form-list">
        <label>Order Notes</label>

        <textarea
          id="checkout-mess"
          cols="30"
          rows="10"
          placeholder="Notes about your order, e.g. special notes for delivery."
        />
      </div>
    </div>
    <!-- </ClientOnly> -->
  </div>
</template>

<script>
import CountrySelect from "./CountrySelect.vue";

export default {
  components: { CountrySelect },
  data() {
    return {
      shipBox: false,
    };
  },
  methods: {
    handleShipBox() {
      this.shipBox = !this.shipBox;
    },
  },
};
</script>
