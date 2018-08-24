var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var foodServices = require('../Services/foodServices');
router.get('/', foodServices.getall);
router.get('/', foodServices.tophot);
module.exports = router;
