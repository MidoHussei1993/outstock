import { defineStore } from "pinia";

const { setLoader } = useLoader();
const fetch = $useHttpClient();

export const useImageUploadStore = defineStore("imageUpload", {
  state: () => ({
    image: {} as any,
  }),
  actions: {
    async UploadImage(payload: File): Promise<any> {
      const form = new FormData();
      form.append("media[]", payload);
      try {
        setLoader(true);
        const res = await fetch("/media", {
          method: "post",
          body: form,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setLoader(false);
        this.image = res.data[0];
        return res.data[0];
        // useNuxtApp().$toast.success(message);
      } catch (error) {
        console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
        setLoader(false);
      }
      //   useNuxtApp().$toast.error(`${payload.title} remove to cart`);
    },
  },
  getters: {
    getImage: (state) => {
      return state.image;
    },
  },
});
