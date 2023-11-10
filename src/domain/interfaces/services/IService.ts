import { IClient } from "../entities/IClient"
import { ICompany } from "../entities/ICompany";
import { IApiResponse } from "../infraestructure/IApiResponse";

export interface IService {
  getAllCompanies(): Promise<IApiResponse<ICompany[]>>;
  getAllCustomer(): Promise<IApiResponse<IClient[]>>;
}