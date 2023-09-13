<template>
  <client-only>
    <header>
      <div
        id="header-sticky"
        :class="`header__area header__transparent box-25 ${
          isSticky ? 'sticky' : ''
        }`"
        class="px-2"
      >
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xl-4 col-lg-5">
              <div class="main-menu d-none d-lg-block p-relative">
                <nav>
                  <menus />
                </nav>
              </div>
            </div>
            <div class="col-xl-3 col-lg-2 col-md-4 col-sm-4">
              <div class="logo text-center">
                <nuxt-link href="/">
                  <img src="~/assets/img/logo/logo.png" alt="logo" />
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-8">
              <div
                class="header__right p-relative d-flex justify-content-between justify-content-sm-end align-items-center"
              >
                <div
                  @click.prevent="handleOffcanvas"
                  class="mobile-menu-btn d-lg-none"
                >
                  <a href="#" class="mobile-menu-toggle"
                    ><i class="fas fa-bars"></i
                  ></a>
                </div>
                <div class="header__action">
                  <ul>
                    <!-- <li>
                      <a
                        @click.prevent="handleOpenSearchBar"
                        href="#"
                        class="search-toggle"
                      >
                        <i class="ion-ios-search-strong"></i> Search
                      </a>
                    </li> -->
                    <li v-if="isUserLogin">
                      <a
                        @click.prevent="navigateTo('/account')"
                        href="#"
                        class="search-toggle"
                      >
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                        {{ $t("config.profile") }}
                      </a>
                    </li>
                    <li>
                      <a
                        @click.prevent="changeLanguage()"
                        href="#"
                        class="search-toggle"
                      >
                        <i class="fad fa-language" style="font-size: 20px"></i>
                        {{ $t("config.language") }}
                      </a>
                    </li>

                    <li v-if="isUserLogin">
                      <a href="#" class="cart"
                        ><i class="ion-bag"></i>
                        {{ $t("c.cart") }}
                        <span>({{ state.totalPriceQuantity.quantity }})</span>
                      </a>
                      <!-- cart mini start -->
                      <cart-mini />
                      <!-- cart mini end -->
                    </li>
                    <li v-if="isUserLogin">
                      <a
                        @click.prevent="logout()"
                        href="#"
                        class="search-toggle"
                      >
                        <i class="fad fa-power-off"></i>
                        {{ $t("config.logOut") }}
                      </a>
                    </li>
                    <li v-if="!isUserLogin">
                      <a
                        @click.prevent="navigateTo('/login')"
                        href="#"
                        class="search-toggle"
                      >
                        <i class="fad fa-sign-in"></i>
                        {{ $t("config.login") }}
                      </a>
                    </li>
                    <!-- <li>
                      <a href="#"><i class="far fa-bars"></i></a>
                      
                      <extra-info />
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- search popup start -->
    <search-popup ref="search_popup" />
    <!-- search popup end -->

    <!-- off canvas start -->
    <off-canvas ref="offcanvas" />
    <!-- off canvas end -->
  </client-only>
</template>

<script lang="ts">
// external
import { defineComponent } from "vue";
import { useCartStore } from "~~/store/useCart";
// internal
import Menus from "./Menus.vue";
import CartMini from "./header-com/CartMini.vue";
import ExtraInfo from "./header-com/ExtraInfo.vue";
import SearchPopup from "~~/components/common/modals/SearchPopup.vue";
import OffCanvas from "~~/components/common/sidebar/OffCanvas.vue";
import { useI18n } from "vue-i18n";
// interface
interface SearchPopupComponentRef {
  openSearchPopup(): void;
}
interface OffCanvasComponentRef {
  OpenOffcanvas(): void;
}

export default defineComponent({
  components: { Menus, CartMini, ExtraInfo, SearchPopup, OffCanvas },
  data() {
    return {
      isSticky: false,
      showSearch: false,
      currentLang: "ar",
      isUserLogin: false,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      navigateTo("/login");
    },
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    handleOpenSearchBar() {
      const searchPopupRef = this.$refs.search_popup as SearchPopupComponentRef;
      searchPopupRef.openSearchPopup();
    },
    handleOffcanvas() {
      const offCanvas = this.$refs.offcanvas as OffCanvasComponentRef;
      offCanvas.OpenOffcanvas();
    },
    changeLanguage() {
      const languages: any = {
        en: "ar",
        ar: "en",
      };
      const lang = languages[this.currentLang];
      this.currentLang = lang;
      console.log(
        "🚀 ~ file: HeaderTwo.vue:164 ~ changeLanguage ~ lang:",
        lang
      );
      this.currentLangcurrentLang = lang;
      // setLang(lang)
      this.locale = lang;
      // navStore.changeLanguage()
      let el = document.querySelector("html")!;
      if (lang == "ar") {
        // emit('changeLang', true)
        // el.setAttribute('direction', 'rtl')
        el.setAttribute("lang", "ar");
        el.setAttribute("dir", "rtl");
        // el.style.direction = 'rtl'
      } else {
        // emit('changeLang', false)
        el.setAttribute("lang", "en");
        // el.setAttribute('direction', 'ltr')
        el.setAttribute("dir", "ltr");
        // el.style.direction = 'ltr'
      }
    },
  },
  setup() {
    const state = useCartStore();
    const { locale } = useI18n();

    return { state, locale };
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
    if (localStorage.getItem("token")) {
      this.isUserLogin = true;
    }
  },
});
</script>
