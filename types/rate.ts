export interface IRate {
  comment: string;
  created_at: Date;
  id: string;
  rate: number;
  type: "rate";
  user: { data: RateUser };
}

export type RateUser = {
  id: string;
  name: string;
  profile_picture: string;
  type: "user";
};
