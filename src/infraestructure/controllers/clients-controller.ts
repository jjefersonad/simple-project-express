import { IClient } from "../../domain/interfaces/entities/IClient";
import { IApiResponse } from "../../domain/interfaces/infraestructure/IApiResponse";
import { CustomerService } from "../services/CustomerService";

const express = require('express');
const router = express.Router();
const customerService = new CustomerService();

router.get('/list', async (req, res) => {
  const customerList:IApiResponse<IClient[]> = await customerService.getAllCustomer();
  res.send(customerList.data)
})

export default router;
