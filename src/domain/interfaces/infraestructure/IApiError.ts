import { IApiResponse } from "./IApiResponse";

// Defina um tipo para o erro da resposta
export interface IApiError {
  response: IApiResponse<null>;
  message: string;
}