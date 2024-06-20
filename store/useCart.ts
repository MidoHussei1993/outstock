import { defineStore } from "pinia";
import { CartProduct, ICart, IProduct } from "~~/types";
import ProductType from "~~/types/productType";
import { Formatter } from "sarala-json-api-data-formatter";
import { getToken } from "~~/util";

const formatter = new Formatter();

export const useCartStore = defineStore("cart", {
  state: () => ({
    fetch: $useHttpClient(),
    LoaderState: useLoader(),
    cart_products: [] as CartProduct[],
    orderQuantity: 1 as number,
    quantityCount: 0 as number,
    total: 0 as number,
    currency: "",
    cart: {} as any,
  }),
  actions: {
    async getUserCart() {
      console.log(getToken());
      if (!getToken()) return;
      try {
        // this.LoaderState.setLoader(true);
        const res = await this.fetch(`carts`, {
          method: "get",
        });
        this.LoaderState.setLoader(false);
        const data: ICart = formatter.deserialize(res);
        console.log("🚀 ~ file: useCart.ts:27 ~ getUserCart ~ data:", data);
        this.cart = data;
        if (data.cartProducts) this.cart_products = data.cartProducts.data;
        else this.cart_products = [];
        this.total = data.total_coast;
        this.currency = data.currency;
      } catch (error) {
        // this.LoaderState.setLoader(false);
      } finally {
        // this.LoaderState.setLoader(false);
      }
    },
    // add_cart_product
    add_cart_product(payload: IProduct) {
      console.log(
        "🚀 ~ file: useCart.ts:15 ~ add_cart_product ~ payload:",
        payload
      );
      const isExist = this.cart_products.some((i) => i.id === payload.id);
      if (!isExist) {
        const newItem = {
          ...payload,
          orderQuantity: 1,
        };
        this.cart_products.push(newItem);
        useNuxtApp().$toast.success(`${payload.name} added to cart`);
      } else {
        this.cart_products.map((item) => {
          if (item.id === payload.id) {
            if (typeof item.orderQuantity !== "undefined") {
              if (item.quantity >= item.orderQuantity + this.orderQuantity) {
                item.orderQuantity =
                  this.orderQuantity !== 1
                    ? this.orderQuantity + item.orderQuantity
                    : item.orderQuantity + 1;
                useNuxtApp().$toast.success(
                  `${this.orderQuantity} ${item.title} added to cart`
                );
              } else {
                useNuxtApp().$toast.error(
                  `No more quantity available for this product!`
                );
                this.orderQuantity = 1;
              }
            }
          }
          return { ...item };
        });
      }
      localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
    },
    // quantityDecrement
    quantityDecrement(payload: ProductType) {
      this.cart_products.map((item) => {
        if (item.id === payload.id) {
          if (typeof item.orderQuantity !== "undefined") {
            if (item.orderQuantity > 1) {
              item.orderQuantity = item.orderQuantity - 1;
            }
          }
        }
        return { ...item };
      });
      localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
    },
    // remover_cart_products
    remover_cart_products(payload: ProductType) {
      this.cart_products = this.cart_products.filter(
        (p) => p.id !== payload.id
      );
      useNuxtApp().$toast.error(`${payload.title} remove to cart`);
      localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
    },
    clear_cart() {
      const confirmMsg = window.confirm(
        "Are you sure deleted your all cart items ?"
      );
      if (confirmMsg) {
        this.cart_products = [];
      }
      localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
    },
    initialOrderQuantity() {
      this.orderQuantity = 1;
    },
  },
  getters: {
    totalPriceQuantity: (state) => {
      return state.cart_products.reduce(
        (cartTotal, cartItem) => {
          const { price, orderQuantity } = cartItem;
          if (typeof orderQuantity !== "undefined") {
            const itemTotal = price * orderQuantity;
            cartTotal.quantity += orderQuantity;
            cartTotal.total += itemTotal;
          }
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
    },
    get_cart_products: (state) => {
      if (process.client) {
        const data = localStorage.getItem("cart_products");
        if (data) {
          return (state.cart_products = JSON.parse(data));
        } else {
          localStorage.setItem("cart_products", JSON.stringify([]));
          return (state.cart_products = []);
        }
      } else {
        return state.cart_products;
      }
    },
  },
});
