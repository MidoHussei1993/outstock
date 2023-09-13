<template>
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
    <div class="col-md-12">
      <div class="checkout-form-list create-acc">
        <input @click="handleCreateAccount" id="cbox" type="checkbox" />
        <label for="cbox">Create an account?</label>
      </div>
      <div v-if="createAccount" id="cbox_info" class="checkout-form-list create-account">
        <p>
          Create an account by entering the information below. If you are a
          returning customer please login at the top of the page.
        </p>
        <label>Account password <span class="required">*</span></label>
        <input type="password" placeholder="password" />
      </div>
    </div>
  </div>
</template>

<script>
import CountrySelect from "./CountrySelect.vue";

export default {
  components: { CountrySelect },
  data() {
    return {
      createAccount: false,
    };
  },
  methods :{
    handleCreateAccount () {
      this.createAccount = !this.createAccount
    }
  }
};
</script>
