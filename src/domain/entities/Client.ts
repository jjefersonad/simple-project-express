import { Address } from "../interfaces/entities/Address";
import { IClient } from "../interfaces/entities/IClient";

export class Client implements IClient{
  id: number;
  firstname: String;
  lastname: String;
  email: String;
  phone: String;
  birthday: String;
  gender: String;
  address: Address;
  website: String;
  image: String;
}