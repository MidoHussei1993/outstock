import { IPagination } from "./pagination";

export interface IResponse<T> {
  data: T;
  meta: {
    pagination: IPagination;
  };
}
