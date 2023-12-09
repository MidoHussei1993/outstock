import { Formatter } from "sarala-json-api-data-formatter";
import { getLang, getToken } from "~~/util";

export const $useHttpClient = () => {
  const formatter = new Formatter();
  const { backendErorre, successMsg } = $toastService();
  const config = useRuntimeConfig();
  const fetchInstance: any = $fetch.create({
    baseURL: config.API_BASE_URL,
    async onRequest(context) {
      context.options.baseURL = context.options.baseURL! + getLang();
      context.options.headers = {
        ...(getToken() && {
          Authorization: `Bearer ` + getToken(),
        }),
        Accept: "application/json",
      };
    },
    async onResponse(context) {
      const response = await context.response;
      switch (response.status) {
        case 200:
          if (response._data.meta) {
            if (response._data.meta.message) {
              successMsg(response._data.meta.message);
            }
          }
          try {
            if (response._data.data) {
              const data = await formatter.deserialize(response._data);
              return data;
            } else return response._data;
          } catch (error) {
            console.log(
              "🚀 ~ file: httpClient.ts:34 ~ onResponse ~ error:",
              error
            );
            return response._data;
          }
          break;
        case 422:
          const errorMassages = response._data.message;
          if (errorMassages) {
            useNuxtApp().$toast.error(errorMassages);
          } else if (response._data.errors) {
            response._data.errors.map(({ detail }: any) => {
              useNuxtApp().$toast.error(detail);
            });
          }

          // backendErorre(errorMassages);
          return response;
          break;
        case 403:
          localStorage.clear();
          navigateTo("/login");
          break;
      }
    },
    headers: {
      ...(getToken() && {
        Authorization: `Bearer ` + getToken(),
      }),
      Accept: "application/json",
    },
  });

  return fetchInstance;
};
