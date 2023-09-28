export interface ISize {
  id: string;
  is_active: boolean;
  is_default_size: boolean;
  productSizeCountries: { data: IProductSizeCountries[] };
  size: string;
  type: string;
}

export interface IProductSizeCountries {
  id: string;
  is_active: boolean;
  price: string;
  type: string;
}
