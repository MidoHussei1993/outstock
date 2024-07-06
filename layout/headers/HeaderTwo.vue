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
          <div class="row align-items-center py-2">
            <div class="col-xl-4 col-lg-5">
              <div class="main-menu d-none d-lg-block p-relative">
                <div class="header__action">
                  <ul>
                    <li
                      v-if="!isUserLogin && countryList && countryList.length"
                    >
                      <Dropdown
                        v-model="selectedCountryModal"
                        optionValue="id"
                        :options="countryList"
                        optionLabel="name"
                        placeholder="Select a Country"
                        class="w-full md:w-14rem"
                        @change="changeSelectedCuntory($event)"
                      >
                        <template #value="slotProps">
                          <div
                            v-if="slotProps.value"
                            class="flex align-items-center"
                          >
                            <!-- <img
                              v-if="
                                countryList.filter(
                                  (item) => item.id == slotProps.value
                                )[0]
                              "
                              :src="
                                countryList.filter(
                                  (item) => item.id == slotProps.value
                                )[0].flag
                              "
                              :class="`mx-2   `"
                              style="width: 18px"
                            /> -->
                            <!-- <span
                              v-if="
                                countryList.filter(
                                  (item) => item.id == slotProps.value
                                )[0]
                              "
                              >{{
                                countryList.filter(
                                  (item) => item.id == slotProps.value
                                )[0].name
                              }}</span
                            > -->
                          </div>
                        </template>
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <img
                              :src="slotProps.option.flag"
                              :class="`mx-2   `"
                              style="width: 18px"
                            />
                            <span>{{ slotProps.option.name }}</span>
                          </div>
                        </template>
                      </Dropdown>
                      <!-- <select
                        v-model="selectedCountryModal"
                        class="form-control"
                     
                      >
                        <option
                          :value="item.id"
                          v-for="(item, index) in countryList"
                          :key="index"
                        >
                          {{ item.name }}
                        </option>
                      </select> -->
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
                        <img
                          v-if="user.profile_picture"
                          :src="user.profile_picture"
                          width="50"
                          height="50"
                          class="mx-1"
                          style="
                            width: 60px;
                            height: 60px;
                            border-radius: 50%;
                            object-fit: cover;
                          "
                        />
                        <i
                          v-if="!user.profile_picture"
                          class="fa fa-user-circle"
                          aria-hidden="true"
                        ></i>
                        {{ $t("config.profile") }}
                      </a>
                    </li>
                    <li>
                      <a
                        @click.prevent="
                          changeLanguage(locale == 'ar' ? 'en' : 'ar')
                        "
                        href="#"
                        class="search-toggle font-weight-bolder h5"
                      >
                        <!-- <i class="fad fa-language" style="font-size: 20px"></i> -->
                        {{ locale == "ar" ? "English" : "العربية" }}
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
                    Mattress
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
                        <span class="" v-if="totalNotificationCount">
                          ({{ totalNotificationCount }})
                        </span>
                      </a>
                      <!-- cart mini start -->
                      <Notification
                        @UpdateNotificationCount="setNotificationCount($event)"
                      />
                      <!-- cart mini end -->
                    </li>
                    <li v-if="isUserLogin">
                      <nuxt-link to="/cart" class="cart"
                        ><i class="ion-bag"></i>
                        {{ $t("c.cart") }}
                        <span>({{ cart_products.length }})</span>
                      </nuxt-link>
                      <!-- cart mini start -->
                      <cart-mini />
                      <!-- cart mini end -->
                    </li>
                    <li v-if="isUserLogin">
                      <a
                        @click.prevent="logout()"
                        href="#"
                        class="search-toggle"
                        :title="$t('config.logOut')"
                      >
                        <i class="fad fa-power-off"></i>
                        <!-- {{ $t('config.logOut') }} -->
                      </a>
                    </li>
                    <li v-if="!isUserLogin">
                      <a
                        @click.prevent="navigateTo('/login')"
                        href="#"
                        class="font-weight-bolder h6"
                      >
                        <!-- <i class="fad fa-sign-in"></i> -->
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
    const user = ref();

    const changeSelectedCuntory = ({ value }: { value: string }) => {
      console.log("🚀 ~ changeSelectedCuntory ~ id:", value);
      setSelectedCountryId(value);
      localStorage.setItem("selectedCountry", value);
    };
    const changeLanguage = async (currentLang: string, reload = true) => {
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
      if (localStorage.getItem("token")) {
        try {
          // setLoader(true);
          await fetch("/profile/update-language", {
            method: "post",
            body: {
              data: {
                type: "user",
                id: "null",
                attributes: {
                  language: currentLang,
                },
              },
            },
          });
          // setLoader(false);
        } catch (error) {
          console.log(
            "🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:",
            error
          );
          // setLoader(false);
        }
      }
      if (reload) window.location.reload();
    };
    onMounted(() => {
      if (!getLang()) {
        changeLanguage("ar");
      } else changeLanguage(getLang()!, false);
      if (localStorage.getItem("user")) {
        user.value = JSON.parse(localStorage.getItem("user")!);
      }
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
      user,
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
.p-dropdown {
  border: none;
}
</style>
