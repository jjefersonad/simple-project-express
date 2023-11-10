const express = require('express');
const request = require('request');
const router = express.Router();

const clientsList = (req, res) => {
  request.get("https://fakerapi.it/api/v1/persons?_quantity=20", (err, response, body) => {
    const dataBody = {
      total: 0,
      clients: []
    }

    if(response.statusCode != 200 || err){
      res.status(response.statusCode).json(JSON.parse(body))
    }

    body = JSON.parse(body);
    dataBody.total = body.total;
    dataBody.clients = body.data;

    return res.json(dataBody)
  })
}

router.get('/list', clientsList);

module.exports = router;