<template>
   <section class="footer__area dark-soft-bg">
      <div class="footer__top pt-100 pb-50">
          <div class="container custom-container-2">
              <div class="row">
                  <div class="col-xl-12">
                      <div class="footer__social-list mb-60">        
                          <ul>
                              <li>
                                  <a target="_blank" href="http://facebook.com">Facebook</a>
                              </li>
                              <li>
                                  <a target="_blank" href="http://twitter.com">Twitter</a>
                              </li>
                              <li>
                                  <a target="_blank" href="https://www.instagram.com/">Instagram</a>
                              </li>
                              <li>
                                  <a target="_blank" href="https://www.pinterest.com/">Pinterest</a>
                              </li>
                              <li>
                                  <a target="_blank" href="https://www.youtube.com/">Youtube</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                      <div class="footer__widget mb-30">
                          <div class="footer__widget-title mb-25">
                              <nuxt-link href="/">
                                <img src="~/assets/img/logo/log-3.webp" alt="logo">
                              </nuxt-link>
                          </div>
                          <div class="footer__widget-content">
                              <p>CEES is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready.</p>
                              <div class="footer__contact">
                                  <ul>
                                      <li>
                                          <div class="icon">
                                              <i class="fal fa-map-marker-alt"></i>
                                          </div>
                                          <div class="text">
                                              <span>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</span>
                                          </div>
                                      </li>
                                      <li>
                                          <div class="icon">
                                              <i class="fal fa-envelope-open-text"></i>
                                          </div>
                                          <div class="text">
                                              <span>Email: Contact@basictheme.com</span>
                                          </div>
                                      </li>
                                      <li>
                                          <div class="icon">
                                              <i class="fal fa-phone-alt"></i>
                                          </div>
                                          <div class="text">
                                              <span>Phone Number: (800) 123 456 789</span>
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-2 col-lg-3 col-md-3 col-12">
                      <div class="footer__widget mb-30">
                          <div class="footer__widget-title">
                              <h5>information</h5>
                          </div>
                          <div class="footer__widget-content">
                              <div class="footer__links">
                                  <ul>
                                      <li><a href="#">About Us</a></li>
                                      <li><a href="#">Careers</a></li>
                                      <li><a href="#">Delivery Inforamtion</a></li>
                                      <li><a href="#">Privacy Policy</a></li>
                                      <li><a href="#">Terms & Condition</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-2 col-lg-3 col-md-3 col-12">
                      <div class="footer__widget mb-30">
                          <div class="footer__widget-title mb-25">
                              <h5>Customer Service</h5>
                          </div>
                          <div class="footer__widget-content">
                              <div class="footer__links">
                                  <ul>
                                      <li><a href="#">Shipping Policy</a></li>
                                      <li><a href="#">Help & Contact Us</a></li>
                                      <li><a href="#">Returns & Refunds</a></li>
                                      <li><a href="#">Online Stores</a></li>
                                      <li><a href="#">Terms & Conditions</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-lg-3 col-md-6 col-12">
                      <div class="footer__widget mb-30">
                          <div class="footer__widget-title mb-25">
                              <h5>newsletter</h5>
                          </div>
                          <div class="footer__widget-content">
                              <p>oin over 1,000 people who get free and fresh content delivered automatically each time we publish.</p>
                              <div class="form-group">
                                  <input class="form-control" id="newsletter-input" type="email" name="contact[email]" placeholder="Your email address...">
                                  <button class="ss-btn btnNewsletter" type="submit">Subscribe</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer__bottom footer__bottom-3">
          <div class="container">
              <div class="row">
                  <div class="col-xl-6 col-lg-7 col-md-8">
                      <div class="footer__copyright footer__copyright-3">
                          <p>Copyright © {{new Date().getFullYear()}} <nuxt-link href="/" class="link">Outstock</nuxt-link> all rights reserved. Powered by 
                            <nuxt-link href="/" class="link">Theme_pure</nuxt-link>
                          </p>
                      </div>
                  </div>
                  <div class="col-xl-6 col-lg-5 col-md-4">
                      <div class="footer__payment">
                          <a href="#"><img src="~/assets/img/payment/paypal_logo.webp" alt=""></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>