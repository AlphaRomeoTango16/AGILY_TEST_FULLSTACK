const express = require('express');
const cors =  require("cors");
const axios = require('axios')

// const NodeCache = require( "node-cache" );
// const myCache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );

const port = 3001;

const app = express();

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  const apiKey = 'db988691faf182dfc3750cd1e57f3718';
  const limit = '3';
  const cityName = req.body.city;
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`;

  axios.get(url, {
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => {
    res.json(response.data)
  })
  .catch(error => {
    console.log(error.message)
  })
})

app.post('/weather', (req, res) => {
  const apiKey = 'db988691faf182dfc3750cd1e57f3718';
  const lat = req.body.lat;
  const lon = req.body.lon;
  const unit = 'metric';
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=${unit}&appid=${apiKey}`;

  axios.get(url, {
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => {
    res.json(response.data.daily)
  })
  .catch(error => {
    console.log(error.message)
  })
})

app.listen(port, () => {
  console.log('Server is up')
})


