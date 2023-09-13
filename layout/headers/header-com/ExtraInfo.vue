<template>
  <ul class="extra-info">
      <li>
          <div class="my-account">
              <div class="extra-title">
                  <h5>My Account</h5>
              </div>
              <ul>
                  <li><nuxt-link href="/account">My Account</nuxt-link></li>
                  <li><nuxt-link href="/wishlist">Wishlist</nuxt-link></li>
                  <li><nuxt-link href="/cart">Cart</nuxt-link></li>
                  <li><nuxt-link href="/checkout">Checkout</nuxt-link></li>
                  <li><nuxt-link href="/register">Create Account</nuxt-link></li>
              </ul>
          </div>
      </li>
      <li>
          <div class="lang">
              <div class="extra-title">
                  <h5>Language</h5>
              </div>
              <ul>
                  <li><a href="#">English</a></li>
                  <li><a href="#">France</a></li>
                  <li><a href="#">Germany</a></li>
                  <li><a href="#">Bangla</a></li>
              </ul>
          </div>
      </li>
      <li>
          <div class="currency">
              <div class="extra-title">
                  <h5>currency</h5>
              </div>
              <ul>
                  <li><a href="#">USD - US Dollar</a></li>
                  <li><a href="#">EUR - Ruro</a></li>
                  <li><a href="#">GBP - Britis Pound</a></li>
                  <li><a href="#">INR - Indian Rupee</a></li>
              </ul>
          </div>
      </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup () {
    return {}
  }
})
</script>
