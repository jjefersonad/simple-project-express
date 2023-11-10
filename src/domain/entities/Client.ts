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

constructor(
  id: number,
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  birthday: String,
  gender: String,
  address: Address,
  website: String,
  image: String
){

  this.id = id;
  this.firstname = firstname;
  this.lastname = lastname;
  this.email = email;
  this.phone = phone;
  this.birthday = birthday;
  this.gender = gender;
  this.address = address;
  this.website = website;
  this.image = image;
}

  public getFullName(){
    return this.firstname+" "+this.lastname;
  }
}