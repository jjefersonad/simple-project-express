import { IPersonPresenter } from "./IPersonPresenter";

export interface IClientPresenter {
  name:string;
  email:string;
  phone:string;
  person:IPersonPresenter;
}