import { i18n } from "@/util/i18n";
export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n);
});
