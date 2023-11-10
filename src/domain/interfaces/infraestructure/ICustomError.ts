interface ICustomError extends Error {
  status?: number; // Status HTTP para o erro
  message: string;
}