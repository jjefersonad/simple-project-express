import { IClient } from "../entities/IClient"
import { IApiResponse } from "../infraestructure/IApiResponse";

export interface ICustomerService {
  getAllCustomer(): Promise<IApiResponse<IClient[]>>;
}