var express = require('express');
var router = express.Router();

const si = require('systeminformation');

/* GET home page. */
router.get('/', function(req, res, next) {
  Promise.all(si.mem(), si.osInfo()])
  .then(data => 
    res.send({
      memory: data[0],
      os: {
        platform: data[1].platform,
        distro: data[1].distro,
        hostname: data[1].hostname
      }
    })
  )
});

module.exports = router;
