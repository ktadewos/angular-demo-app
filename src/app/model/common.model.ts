import { Person } from "./person";

export interface ApiResponse{
  status?:number;
  message?:string;
  result?:{};
}

export interface ApiListResponse{
  status?:number;
  message?:string;
  result?:[];
}
