var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {data: "data"});
});

router.get('/login', function(req, res, next) {
  res.render('login', {data: "data"});
});

module.exports = router;
