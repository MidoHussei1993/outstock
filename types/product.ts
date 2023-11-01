import { IAction } from "./action";
import { IBrand } from "./brand";
import { ICategory } from "./category";
import { IMedia } from "./media";
import { IOffer } from "./offer";
import { IPrice } from "./price";
import { IQualityLevel } from "./qualityLevel";
import { IRate } from "./rate";
import { ISection } from "./section";
import { ISize } from "./size";

export interface IProduct {
  cover: string;
  actions: { data: IAction[] };
  brand_id: number;
  brand: { data: IBrand };
  category: { data: ICategory };
  offer: { data: IOffer };
  images: { data: IMedia[] };
  category_id: number;
  rate_avr: number;
  description: string;
  created_at: Date;
  id: string;
  image: string;
  is_active: boolean;
  is_favourite: boolean;
  name: string;
  price: { data: IPrice };
  sizes: { data: ISize[] };
  quality_level: { data: IQualityLevel };
  quality_level_id: number;
  sections: { data: ISection[] };
  rates: { data: IRate[] };
  type: string;
  updated_at: Date;
  orderQuantity: number;
  selectedSize: string;
}
