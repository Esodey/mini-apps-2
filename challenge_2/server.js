const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

app.get('/cryptocurrencydata', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-09-01&end=2018-09-10', {
  })
  .then(response => {
    console.log(response.data.bpi);
    res.status(200).send(response.data.bpi);
  })
  .catch(error => {
    console.log(error);
    res.status(500).send(error);
  })
})

app.listen(3000, () => {
  console.log('Server is running')
});