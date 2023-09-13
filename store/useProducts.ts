import { defineStore } from "pinia";
import productData from "~~/data/productData";
import ProductType from "~~/types/productType";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: productData as ProductType[],
    filterProducts: productData as ProductType[],
    priceRange: [0, 500] as any,
    activeCls : '' as string,
  }),
  actions: {
    handleParentCategory(value: string) {
      this.filterProducts = this.products.filter(
        (p) => p.parentCategory.toLowerCase() === value.toLowerCase()
      );
      this.activeCls = value;
    },
    handleCategory(value: string) {
      this.filterProducts = this.products.filter(
        (p) => p.category.toLowerCase() === value.toLowerCase()
      );
      this.activeCls = value;
    },
    onChangeRange(value: number) {
      this.priceRange = value;
    },
    filterPrice() {
      if (this.priceRange.length) {
        this.filterProducts = this.products.filter(
          (p) =>
            p.price >= this.priceRange[0] && p.price <= this.priceRange[1]
        );
      }
    },
    handleSize(size: string) {
      this.filterProducts = this.products.filter(p => p.sizes?.includes(size))
      this.activeCls = size;
    },
    handleColor(color: string) {
      this.filterProducts = this.products.filter(p => p.colors?.includes(color))
      this.activeCls = color;
    },
    handleBrand(brand: string) {
      this.filterProducts = this.products.filter(p => p.brand.toLowerCase() === brand.toLowerCase())
      this.activeCls = brand;
    },
    handleSelectFiltering(value:string){
      switch (value) {
        case 'Default Sorting':
         return this.filterProducts = this.products
        case 'Sort By Trending':
         return this.filterProducts = this.products.filter(p => p.trending)
        case 'Short By BestSeller':
         return this.filterProducts = this.products.filter(p => p.bestSeller)
        case 'Price High To Low':
         return this.filterProducts = this.products.slice().sort((a, b) => b.price - a.price)
        case 'Price Low To High':
         return this.filterProducts = this.products.slice().sort((a, b) => a.price - b.price)
        default:
          return this.filterProducts = this.products
      }
    },
    handleResetFilter() {
      this.filterProducts = this.products;
      this.activeCls = '';
      this.priceRange = [0,500]
    }
  },
  getters:{
    getRelatedProducts(state) {
      return (category:string,id:number) => (
        state.products.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase() && p.id !== id
        ).slice(0,4)
      )
    },
  }
});
