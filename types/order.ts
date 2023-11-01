import { IProduct } from "./product";

export interface IOrder {
  applied_promocode: number;
  created_at: string;
  extra_notes: string | null;
  id: string;
  lat: string;
  lng: string;
  orderProducts: {
    data: {
      id: string;
      price: number;
      product: { data: IProduct };
      productSize: {
        data: {
          id: string;
          size: string;
          type: "product_size";
        };
      };
      quantity: number;
      type: string;
    };
  };
  products_prices_sum_coast: number;
  shipping_coast: number;
  status: string;
  total_coast: number;
  type: "order";
}
