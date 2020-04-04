var express = require('express');
var router = express.Router();

const si = require('systeminformation');

/* GET home page. */
router.get('/', function(req, res, next) {
  Promise.all([si.cpu(), si.mem()])
  .then(data => 
    res.send({
      cpu: data[0],
      memory: data[1]
    })
  )
});

module.exports = router;
