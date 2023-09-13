import { IAction } from "./action";
import { IPrice } from "./price";

export interface IProduct {
  actions: { data: IAction[] };
  brand_id: number;
  category_id: number;
  created_at: Date;
  id: string;
  image: string;
  is_active: boolean;
  name: string;
  price: { data: IPrice };
  quality_level_id: number;
  type: string;
  updated_at: Date;
}
