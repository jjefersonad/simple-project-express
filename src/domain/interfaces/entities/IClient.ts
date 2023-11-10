import { Address } from "./Address"

export interface IClient {
  id: number | null;
  firstname: String;
  lastname:String;
  email:String;
  phone:String;
  birthday:String;
  gender:String;
  address:Address;
  website: String;
  image: String;
}