<template>
  <section class="profile__menu pb-70 grey-bg">
    <div class="container">
      <div class="row">
        <div class="col-xxl-4 col-md-4">
          <div class="profile__menu-left bg-white mb-50">
            <h3 class="profile__menu-title">
              <i class="mx-2 h6 fa fa-list-alt"></i>
              {{ $t("p.yourMenu") }}
            </h3>
            <div class="profile__menu-tab">
              <div
                class="nav nav-tabs flex-column justify-content-start text-start"
                id="nav-tab"
                role="tablist"
              >
                <button
                  class="nav-link active"
                  id="nav-account-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-account"
                  type="button"
                  role="tab"
                  aria-controls="nav-account"
                  aria-selected="true"
                  style="text-align: right"
                >
                  <i class="fa fa-user mx-2 h6"></i> {{ $t("p.MyAcccount") }}
                </button>
                <button
                  class="nav-link"
                  id="nav-order-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-order"
                  type="button"
                  role="tab"
                  aria-controls="nav-order"
                  aria-selected="false"
                  style="text-align: right"
                >
                  <i class="fa fa-file mx-2 h6"></i>
                  {{ $t("c.preOrders") }}
                </button>
                <button
                  class="nav-link"
                  id="nav-activeo-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-activeo"
                  type="button"
                  role="tab"
                  aria-controls="nav-activeo"
                  aria-selected="false"
                  style="text-align: right"
                >
                  <i class="fa fa-file mx-2 h6"></i>
                  {{ $t("c.activeOrders") }}
                </button>
                <button
                  class="nav-link"
                  id="nav-password-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-password"
                  type="button"
                  role="tab"
                  aria-controls="nav-password"
                  aria-selected="false"
                  style="text-align: right"
                >
                  <i class="fa fa-lock mx-2 h6"></i>
                  {{ $t("p.changePassword") }}
                </button>
                <button
                  style="text-align: right"
                  class="nav-link"
                  @click="logout()"
                >
                  <i class="fa fa-sign-out mx-2 h6"></i>
                  {{ $t("auth.singOut") }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-8 col-md-8">
          <div class="profile__menu-right">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-account"
                role="tabpanel"
                aria-labelledby="nav-account-tab"
              >
                <div class="profile__info">
                  <div
                    class="profile__info-top d-flex justify-content-between align-items-center"
                  >
                    <h3 class="profile__info-title">Profile Information</h3>
                    <button
                      class="profile__info-btn border py-1 px-2 rounded-3"
                      type="button"
                      @click="showModal = true"
                    >
                      <i class="fad fa-edit h6"></i>
                      {{ $t("action.edit") }}
                    </button>
                  </div>
                  <div class="profile__info-wrapper white-bg" v-if="user">
                    <div class="profile__info-item">
                      <p>
                        {{ $t("form.name") }}
                      </p>
                      <h4>
                        {{ user.name }}
                      </h4>
                    </div>
                    <div class="profile__info-item">
                      <p>
                        {{ $t("form.email") }}
                      </p>
                      <h4>
                        <a
                          href="mailt:outstock@hotmail.com"
                          class="__cf_email__"
                          data-cfemail="94fdfaf2fbd4f1f0e1fff1e6baf7fbf9"
                        >
                          {{ user.email }}
                        </a>
                      </h4>
                    </div>
                    <div class="profile__info-item">
                      <p>
                        {{ $t("form.mobile") }}
                      </p>
                      <h4>
                        {{ user.mobile_number }}
                      </h4>
                    </div>

                    <div class="profile__info-item">
                      <div class="d-flex justify-content-between mb-2">
                        <p class="p-1 mb-0">
                          {{ $t("config.token") }}
                        </p>
                        <button
                          @click="copyContent(user.unique_token)"
                          type="button"
                          style="font-weight: 500"
                          class="btn btn-outline-primary btn-sm mx-2 font-weight-bolder"
                        >
                          <i class="fad fa-copy h6"></i>
                          {{ $t("action.copy") }}
                        </button>
                      </div>
                      <h4 class="border p-2 bg-light">
                        <span>
                          {{ user.unique_token }}
                        </span>
                      </h4>
                    </div>
                    <div class="profile__info-item">
                      <div class="d-flex justify-content-between mb-2">
                        <p class="p-1 mb-0">
                          {{ $t("config.inviteFrind") }}
                        </p>
                        <button
                          @click="copyContent(user.invite_friend_url)"
                          type="button"
                          style="font-weight: 500"
                          class="btn btn-outline-primary btn-sm mx-2 font-weight-bolder"
                        >
                          <i class="fad fa-copy h6"></i>
                          {{ $t("action.copy") }}
                        </button>
                      </div>
                      <h4 class="border p-2 bg-light">
                        <span>
                          {{ user.invite_friend_url }}
                        </span>
                      </h4>
                    </div>
                    <!-- <div class="profile__info-item">
                      <p>
                        {{ $t("form.address") }}
                      </p>
                      <h4>Abingdon, Maryland(MD), 21009</h4>
                    </div> -->
                    <div v-if="user.lat && user.lng">
                      <iframe
                        class="border shadow"
                        width="100%"
                        height="300"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        :src="`https://maps.google.com/maps?q=${user.lat},${user.lng}&hl=es&z=14&amp;output=embed`"
                      >
                      </iframe>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <PreOrder />
              <ActiveOrder />
              <div
                class="tab-pane fade"
                id="nav-password"
                role="tabpanel"
                aria-labelledby="nav-password-tab"
              >
                <div class="password__change">
                  <div class="password__change-top">
                    <h3 class="password__change-title">Change Password</h3>
                  </div>
                  <div class="password__form white-bg">
                    <!-- form start -->
                    <change-password-form />
                    <!-- form start -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Dialog
    class="transparent-dialog"
    v-model:visible="showModal"
    :showHeader="true"
    modal
    :style="{ width: '30%' }"
  >
    <ProfileEditForm />
  </Dialog>

  <!-- edit modal start -->
  <!-- <profile-edit-modal /> -->
  <!-- edit modal end -->
</template>

<script lang="ts" setup>
import { User } from "~~/types";
import ProfileEditModal from "../common/modals/ProfileEditModal.vue";
import ChangePasswordForm from "../forms/ChangePasswordForm.vue";
import ProfileEditForm from "../forms/ProfileEditForm.vue";
import { useI18n } from "vue-i18n";
import PreOrder from "./PreOrder.vue";
import ActiveOrder from "./ActiveOrder.vue";

const props = defineProps({
  user: { type: Object, default: () => ({} as User) },
});
const showModal = ref(false);
const { t } = useI18n();
const copyContent = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    useNuxtApp().$toast.success(t("action.copy"));
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

const logout = () => {
  localStorage.clear();
  navigateTo("/login");
};
</script>
<style>
.p-dialog-content {
  overflow: hidden;
}
</style>
