import { IAction } from "./action";

export interface IOffer {
  actions: { data: IAction[] };
  id: string;
  image: string;
  type: "offer";
  discount_percentage: string;
  end_date: string;
}
