export interface IPrice {
  currency: string;
  discount_end_date: Date;
  id: string;
  price: string;
  has_discount: boolean;
  price_after_discount: string;
  type: string;
}
