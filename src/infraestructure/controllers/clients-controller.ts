import { NextFunction } from "express";
import { IClient } from "../../domain/interfaces/entities/IClient";
import { IApiResponse } from "../../domain/interfaces/infraestructure/IApiResponse";
import { Service } from "../services/Service";
import { IClientPresenter } from "../../domain/interfaces/presenters/IClientPresenter";
import { ClientPresenter } from "../../domain/entities/ClientPresenter";
import { ICompany } from "../../domain/interfaces/entities/ICompany";
import { Client } from "../../domain/entities/Client";

const express = require('express');
const router = express.Router();
const customerService = new Service();

router.get('/list', async (req, res) => {
  const companies:IApiResponse<ICompany[]> = await customerService.getAllCompanies();
  const clientList:IApiResponse<IClient[]> = await customerService.getAllCustomer();
  const customerListPresenter: IClientPresenter[] = [];

  for ( let i=0; i < companies.data.length; i++) {
    const element = companies.data[i];
      const clientResponse: IClient = clientList.data[i];
      
      if(clientResponse){
        const client = new Client(
          clientResponse.id,
          clientResponse.firstname,
          clientResponse.lastname,
          clientResponse.email,
          clientResponse.phone,
          clientResponse.birthday,
          clientResponse.gender,
          clientResponse.address,
          clientResponse.website,
          clientResponse.image
        )
        customerListPresenter.push(new ClientPresenter(element.name, element.email, element.phone, {fullName:client.getFullName()}))
      }
    }

    return res.send({total: customerListPresenter.length, clients: customerListPresenter})
})

export default router;
