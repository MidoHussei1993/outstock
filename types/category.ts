import { IAction } from "./action";
import { IQualityLevel } from "./qualityLevel";

export interface ICategory {
  actions: { data: IAction[] };
  created_at: Date;
  id: string;
  image: string;
  is_active: boolean;
  name: string;
  type: string;
  updated_at: Date;
  qualityLevels?: { data: IQualityLevel[] };
}
