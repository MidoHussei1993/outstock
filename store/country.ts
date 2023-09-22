import { defineStore } from "pinia";

const { setLoader } = useLoader();
const fetch = $useHttpClient();

export const UseCountryStore = defineStore("country", {
  state: () => ({
    countryList: [] as any[],
    selectedCountryId: null as number | null,
  }),
  actions: {
    setSelectedCountryId(val: any) {
      this.selectedCountryId = val;
    },
    async getCountryList() {
      try {
        setLoader(true);
        const { data } = await fetch("/countries?page=1&per_page=1000", {
          method: "get",
        });
        this.countryList = data;
        console.log("🚀 ~ file: country.ts:17 ~ getCountryList ~ data:", data);
        setLoader(false);
        return data;
        // useNuxtApp().$toast.success(message);
      } catch (error) {
        console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
        // setLoader(false);
      }
      //   useNuxtApp().$toast.error(`${payload.title} remove to cart`);
    },
  },
  getters: {
    getCountryListGetter: (state) => {
      return state.countryList;
    },
  },
});
