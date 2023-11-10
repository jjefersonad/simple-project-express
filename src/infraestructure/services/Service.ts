import { IClient } from "../../domain/interfaces/entities/IClient";
import { IService } from "../../domain/interfaces/services/IService";
import { Constants } from "../../domain/constants/constants";
import axios from "axios";
import { IApiResponse } from "../../domain/interfaces/infraestructure/IApiResponse";
import { ICompany } from "../../domain/interfaces/entities/ICompany";

export class Service implements IService {
  async getAllCompanies(): Promise<IApiResponse<ICompany[]>> {
    return (await axios.get(Constants.EXTERNA_COMPANIES_URL)).data;
  }

  async getAllCustomer(): Promise<IApiResponse<IClient[]>> {
    return (await axios.get(Constants.EXTERNAL_PERSON_URL)).data;
  }

}