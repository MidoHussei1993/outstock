<template>
  <layout :transparent="true">
    <!-- <breadcrumb-area title="Account" subtitle="Account" /> -->
    <profile-area :user="user" />
    <profile-menu-area :user="user" />
  </layout>
</template>

<script lang="ts" setup>
import Layout from "~~/layout/Layout.vue";
// import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import ProfileArea from "~~/components/profile/ProfileArea.vue";
import ProfileMenuArea from "~~/components/profile/ProfileMenuArea.vue";
import { useI18n } from "vue-i18n";
import { Formatter } from "sarala-json-api-data-formatter";
import { User } from "~~/types";

const { t } = useI18n();
useHead({
  title: "profile",
});
const fetch = $useHttpClient();
const formatter = new Formatter();
const user = ref<User | null>(null);
onMounted(() => {
  getProfile();
});

const getProfile = async () => {
  try {
    const res = await fetch("/profile", {
      method: "get",
    });
    user.value = formatter.deserialize(res);
    console.log(
      "🚀 ~ file: account.vue:35 ~ getProfile ~ user.value:",
      user.value
    );
  } catch (error) {}
};

// export default defineComponent({
//   components: {
//     Layout,
//     BreadcrumbArea,
//     ProfileArea,
//     ProfileMenuArea,
//   },
//   setup() {
//   },
// });
</script>
