import { IAction } from "./action";

export interface ICart {
  actions: { data: IAction[] };
  cartProducts: { data: CartProduct[] };
  id: string;
  products_prices_sum_coast: number;
  shipping_coast: number;
  currency: string;
  total_coast: number;
  type: "cart";
}

export type CartProduct = {
  actions: { data: IAction[] };
  id: string;
  price: number;
  product: {
    data: {
      id: string;
      description: string;
      image: string;
      name: string;
      type: "product";
    };
  };
  productSize: { data: { id: string; size: string; type: "product_size" } };
  quantity: number;
  type: "cart_product";
};
