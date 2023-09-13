import { IAction } from "./action";

export interface IBrand {
  actions: { data: IAction[] };
  created_at: Date;
  id: string;
  image: string;
  is_active: boolean;
  name: string;
  type: string;
  updated_at: Date;
}
