
let express = require('express');

module.exports = (function() {

  var router = express.Router();

  router.get('/', (req, res) => {
    res.send('api works');
  });

  require('./routes/currency')(router)
  
  return router;    
})();

