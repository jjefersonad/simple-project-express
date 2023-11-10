import { Address } from "./Address"

export interface ICompany {
  id: number | null;
  name: string;
  vat:string;
  email:string;
  phone:string;
  country: string;
  address:Address;
  website: string;
  image: string;
}