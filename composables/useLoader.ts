const useLoader = () => {
  const loading = useState<boolean>('loader',() => false)
  
  const setLoader = (payload: boolean) => {
    loading.value = payload
  }
  return {
    loading,
    setLoader
  }
}
export default useLoader