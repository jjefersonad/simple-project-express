const express = require('express');
const request = require('request');
const router = express.Router();

const clientsList = (req, res) => {
  request.get("https://fakerapi.it/api/v1/companies?_quantity=20", (err, response, body) => {
    //tratamento de erro quando o statusCode for diferente de 200 (sucesso)
    if(response.statusCode != 200 || err){
      res.status(response.statusCode).json(JSON.parse(body))
    }

    res.json(JSON.parse(body))
  })
}

router.get('/list', clientsList);

module.exports = router;