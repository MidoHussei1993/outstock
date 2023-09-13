import { defineStore } from 'pinia';
import ProductType from '~~/types/productType';

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlists: [] as ProductType[],
  }),
  actions: {
    add_wishlist_product(payload: ProductType) {
      const isAdded = this.wishlists.findIndex(p => p.id === payload.id)
      if(isAdded !== -1){
        this.wishlists = this.wishlists.filter(p => p.id !== payload.id)
        useNuxtApp().$toast.error(`${payload.title} remove to wishlist`);
      }
      else {
        this.wishlists.push(payload)
        useNuxtApp().$toast.success(`${payload.title} added to wishlist`);
      }
      localStorage.setItem('wishlist_products', JSON.stringify(this.wishlists));
    },
    removeWishlist(payload: ProductType){
      this.wishlists = this.wishlists.filter(p => p.id !== payload.id)
      useNuxtApp().$toast.error(`${payload.title} remove to wishlist`);
      localStorage.setItem('wishlist_products', JSON.stringify(this.wishlists));
    }
  },
  getters: {
    get_wishlist_products:(state) => {
      if (process.client) {
        const data = localStorage.getItem('wishlist_products');
        if (data) {
          return state.wishlists = JSON.parse(data);
        } else {
          localStorage.setItem('wishlist_products', JSON.stringify([]));
          return state.wishlists = [];
        }
      } else {
        return state.wishlists;
      }
    }
  }

})