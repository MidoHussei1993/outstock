import { defineStore } from 'pinia';
import ProductType from '~~/types/productType';

export const useCompareStore = defineStore('compare', {
  state: () => ({
    compare: [] as ProductType[],
  }),
  actions: {
    add_compare_product(payload: ProductType) {
      const isAdded = this.compare.findIndex(p => p.id === payload.id)
      if(isAdded !== -1){
        this.compare = this.compare.filter(p => p.id !== payload.id)
        useNuxtApp().$toast.error(`${payload.title} remove to compare`);
      }
      else {
        this.compare.unshift(payload)
        useNuxtApp().$toast.success(`${payload.title} added to compare`);
      }
      localStorage.setItem('compare_products', JSON.stringify(this.compare));
    },
    removeCompare(payload: ProductType){
      this.compare = this.compare.filter(p => p.id !== payload.id)
      useNuxtApp().$toast.error(`${payload.title} remove to compare`);
      localStorage.setItem('compare_products', JSON.stringify(this.compare));
    }
  },
  getters: {
    get_compare_products:(state) => {
      if (process.client) {
        const data = localStorage.getItem('compare_products');
        if (data) {
          return state.compare = JSON.parse(data);
        } else {
          localStorage.setItem('compare_products', JSON.stringify([]));
          return state.compare = [];
        }
      } else {
        return state.compare;
      }
    }
  }

})