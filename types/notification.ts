import { IAction } from "./action";

export interface INotification {
  actions: { data: IAction[] };
  body: string;
  created_at: string;
  id: string;
  read_at: null | string;
  relationships: ["actions"];
  title: string;
  type: "notification";
  url: string;
}
