import { IClientPresenter } from "../interfaces/presenters/IClientPresenter";
import { IPersonPresenter } from "../interfaces/presenters/IPersonPresenter";

export class ClientPresenter implements IClientPresenter{
  name: string;
  email: string;
  phone: string;
  person: IPersonPresenter;

  constructor(
    name: string,
    email: string,
    phone: string,
    person: IPersonPresenter
  ){
    this.name= name;
    this.email= email;
    this.phone= phone;
    this.person= person;
  }

}