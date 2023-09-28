import { IAction } from "~~/types/action";

export const $FN = (option?: any) => {
  //   const nuxtApp = useNuxtApp();
  //   useNuxtApp().$toast.success(text);

  /* SUCCESS MESSAGE */
  const getAction: any = (
    item: { actions: { data: IAction[] } },
    key: string
  ): IAction | void => {
    if (item && item.actions && item.actions.data && item.actions.data.length) {
      const action = item.actions.data.find((action) => action.key === key);
      return action;
    }
  };
  const hasAction: any = (
    item: { actions: { data: IAction[] } },
    key: string
  ): boolean | void => {
    if (item && item.actions && item.actions.data && item.actions.data.length) {
      const action = item.actions.data.find((action) => action.key === key);
      return !!action;
    }
  };

  return { getAction, hasAction };
};
