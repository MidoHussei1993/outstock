<template>
  <client-only>
    <header>
      <div
        v-if="!hideHeader"
        id="header-sticky"
        :class="`header__area header__transparent box-25 `"
        class="px-2 sticky"
      >
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xl-4 col-lg-5">
              <div class="main-menu d-none d-lg-block p-relative">
                <div class="header__action">
                  <ul>
                    <li
                      v-if="!isUserLogin && countryList && countryList.length"
                    >
                      <select
                        v-model="selectedCountryModal"
                        class="form-control"
                        @change="changeSelectedCuntory($event.target?.value)"
                      >
                        <option
                          :value="item.id"
                          v-for="(item, index) in countryList"
                          :key="index"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                    </li>
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
                        @click.prevent="
                          changeLanguage(locale == 'ar' ? 'en' : 'ar')
                        "
                        href="#"
                        class="search-toggle"
                      >
                        <i class="fad fa-language" style="font-size: 20px"></i>
                        {{ $t("config.language") }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-2 col-md-4 col-sm-4">
              <div class="logo text-center">
                <nuxt-link href="/">
                  <h2
                    style="text-shadow: 0px 10px 8px #424242b5"
                    class="font-weight-bold"
                  >
                    Marateb
                  </h2>
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-8 col-sm-8">
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
                      <a class="cart">
                        <i class="fad fa-bell h4"></i>
                        <span class="text-danger h6">
                          {{ totalNotificationCount }}
                        </span>
                      </a>
                      <!-- cart mini start -->
                      <Notification
                        @UpdateNotificationCount="setNotificationCount($event)"
                      />
                      <!-- cart mini end -->
                    </li>
                    <li v-if="isUserLogin">
                      <a href="#" class="cart"
                        ><i class="ion-bag"></i>
                        {{ $t("c.cart") }}
                        <span>({{ cart_products.length }})</span>
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
                      6
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
import { Formatter } from "sarala-json-api-data-formatter";
// external
import { defineComponent } from "vue";
import { useCartStore } from "~~/store/useCart";
import { UseCountryStore } from "~~/store/country";
// internal
import Menus from "./Menus.vue";
import CartMini from "./header-com/CartMini.vue";
import ExtraInfo from "./header-com/ExtraInfo.vue";
import Notification from "./header-com/Notification.vue";
import SearchPopup from "~~/components/common/modals/SearchPopup.vue";
import OffCanvas from "~~/components/common/sidebar/OffCanvas.vue";
import { useI18n } from "vue-i18n";
import { getLang, setLang } from "~~/util";
import { storeToRefs } from "pinia";

import { ICart } from "~~/types";
// interface
interface SearchPopupComponentRef {
  openSearchPopup(): void;
}
interface OffCanvasComponentRef {
  OpenOffcanvas(): void;
}

export default defineComponent({
  components: {
    Menus,
    CartMini,
    ExtraInfo,
    SearchPopup,
    OffCanvas,
    Notification,
  },
  data() {
    return {
      isSticky: false,
      showSearch: false,
      isUserLogin: false,
      hideHeader: false,
      countryList: [] as any[],
      selectedCountryModal: null,
      totalNotificationCount: 0,
    };
  },
  async created() {
    this.countryList = await this.getCountryList();
    console.log(this.countryList);
    if (!this.isUserLogin) {
      if (localStorage.getItem("selectedCountry")) {
        // @ts-ignore
        this.selectedCountryModal = localStorage.getItem("selectedCountry");
        this.setSelectedCountryId(this.selectedCountryModal);
      } else {
        localStorage.setItem("selectedCountry", this.countryList[0].id);
        this.selectedCountryModal = this.countryList[0].id;
        this.setSelectedCountryId(this.countryList[0].id);
      }
    } else {
      const user = JSON.parse(localStorage.getItem("user")!);
      this.selectedCountryModal = user.country_id;
      this.setSelectedCountryId(user.country_id);
    }
  },
  methods: {
    setNotificationCount(event: { count: number }) {
      this.totalNotificationCount = event.count;
    },
    selectedCountry(event: any) {
      console.log(
        "🚀 ~ file: HeaderTwo.vue:226 ~ selectedCountry ~ event:",
        event.target.value
      );
      this.setSelectedCountryId(event.target.value);
    },
    logout() {
      localStorage.clear();
      navigateTo("/login");
    },
    handleSticky() {
      if (document.documentElement.scrollTop < 0) this.hideHeader = true;
      else this.hideHeader = false;
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
  },
  setup() {
    const state = useCartStore();
    const { setSelectedCountryId, getCountryList } = UseCountryStore();
    const { cart_products } = storeToRefs(state);
    const currentLang = ref("ar");
    const { locale } = useI18n();
    const fetch = $useHttpClient();
    const formatter = new Formatter();
    const { setLoader } = useLoader();

    const changeSelectedCuntory = (id) => {
      setSelectedCountryId(id);
      localStorage.setItem("selectedCountry", id);
    };
    const changeLanguage = (currentLang: string, reload = true) => {
      // navStore.changeLanguage()
      let el = document.querySelector("html")!;
      setLang(currentLang);
      locale.value = currentLang;
      if (currentLang == "ar") {
        el.setAttribute("lang", "ar");
        el.setAttribute("dir", "rtl");
      } else {
        el.setAttribute("lang", "en");
        el.setAttribute("dir", "ltr");
      }
      if (reload) window.location.reload();
    };
    onMounted(() => {
      if (!getLang()) {
        changeLanguage("ar");
      } else changeLanguage(getLang()!, false);
    });

    return {
      state,
      locale,
      changeLanguage,
      currentLang,
      cart_products,
      setSelectedCountryId,
      getCountryList,
      changeSelectedCuntory,
    };
  },
  mounted() {
    // window.addEventListener("scroll", this.handleSticky);
    if (localStorage.getItem("token")) {
      this.state.getUserCart();
      this.isUserLogin = true;
    }
  },
});
</script>
<style lang="scss" scoped>
select {
  background: none;
  border: none;
  color: #bc8246;
  font-weight: 600;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  &:active,
  &:visited {
    background: none;
    border: none;
    color: #bc8246;
    font-weight: 600;
  }
}

// html[lang="en"] {
//   select {
//     text-align: left;
//   }
// }
// html[lang="ar"] {
//   select {
//     text-align: left;
//   }
// }
</style>
