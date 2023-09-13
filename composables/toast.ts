type backendErrorMassage = {
  detail: string
  status: number
  title: string
}

export const $toastService = (option?: any) => {
  const nuxtApp = useNuxtApp()

  /* BACKEND ERRORS */
  const backendErorre: any = (options: backendErrorMassage[]) => {
    if (options.length) {
      options.map((option: backendErrorMassage) => useNuxtApp().$toast.error(option.detail))
    }
  }

  /* ERROR MESSAGE */
  const errorMsg: any = (text: string) => {
    useNuxtApp().$toast.error(text)
  }

  /* SUCCESS MESSAGE */
  const successMsg: any = (text: string) => {
    useNuxtApp().$toast.success(text)
  }

  /* CONFIRMATION MESSAGE */
  const Confirmation = async (title: string, confirmButtonText: string, cancelButtonText: string): Promise<boolean> => {
    return await nuxtApp.vueApp.config.globalProperties.$swal
      .fire({
        title: title,
        // text:'حذف العنصر',
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText,
        cancelButtonText,
      })
      .then((result: any) => {
        return result.isConfirmed
      })
  }

  return { backendErorre, successMsg, errorMsg, Confirmation }
}
