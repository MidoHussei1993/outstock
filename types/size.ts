export interface ISize {
  selected: boolean;
  quantity: number;
  id: string;
  is_active: boolean;
  is_default_size: boolean;
  productSizeCountries: { data: IProductSizeCountries };
  size: string;
  type: string;
}

export interface IProductSizeCountries {
  discount_end_date?: Date;
  has_discount: boolean | null;
  id: string;
  is_active: boolean;
  price: number;
  price_after_discount: number | null;
  type: "product_size_price";
}
