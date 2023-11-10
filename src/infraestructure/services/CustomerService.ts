import { IClient } from "../../domain/interfaces/entities/IClient";
import { ICustomerService } from "../../domain/interfaces/services/ICustomerService";
import { Constants } from "../../domain/constants/constants";
import axios from "axios";
import { IApiResponse } from "../../domain/interfaces/infraestructure/IApiResponse";

export class CustomerService implements ICustomerService {

  async getAllCustomer(): Promise<IApiResponse<IClient[]>> {
    return await axios.get(Constants.EXTERNAL_PERSON_URL);
  }

}