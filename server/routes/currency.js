var request = require("request");

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';



module.exports = function (router) {

  router.get('/conversion/:currency/:coin', (req, res) => {
    
    let coin = req.params.coin
    let currency = req.params.currency

    var options = {
      method: 'GET',
      url: 'https://min-api.cryptocompare.com/data/price',
      qs: {
        fsym: coin,
        tsyms: currency
      }
    };

    request(options, function (error, response, body) {
      if (error)
        res.status(500).json({
          Error: error
        })


      body = JSON.parse(body)
      
      res.status(200).json(body)

    });


  })

  router.get('/BTC', (req, res) => {

    var options = {
      method: 'GET',
      url: 'https://min-api.cryptocompare.com/data/price',
      qs: {
        fsym: 'BTC',
        tsyms: 'USD,EUR'
      }
    };

    request(options, function (error, response, body) {
      if (error)
        res.status(500).json({
          Error: error
        })

      body = JSON.parse(body)
      res.status(200).json(body)

    });
  })

  router.get('/currency', (req, res) => {

    var options = {
      method: 'GET',
      url: 'https://min-api.cryptocompare.com/data/price',
      qs: {
        fsym: 'ETH',
        tsyms: 'BTC,USD,EUR'
      }
    };

    request(options, function (error, response, body) {
      if (error) {

        res.status(500).json({
          Error: error
        })
      }

      body = JSON.parse(body)
      let time = new Date().toLocaleString()

      let json = {
        TIME: time,
        BTC: body.BTC,
        USD: body.USD,
        EUR: body.EUR
      }

      res.status(200).json(json)

    });


  })


  // router.get('/posts', (req, res) => {
  //   // Get posts from the mock api
  //   // This should ideally be replaced with a service that connects to MongoDB
  //   axios.get(`${API}/posts`)
  //     .then(posts => {
  //       res.status(200).json(posts.data);
  //     })
  //     .catch(error => {
  //       res.status(500).send(error)
  //     });
  // });



}
