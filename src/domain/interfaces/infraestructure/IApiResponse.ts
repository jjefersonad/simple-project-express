// Defina um tipo para o formato da resposta
export interface IApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
}
