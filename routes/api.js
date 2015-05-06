var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var order = mongoose.model('Order');


/* save to db */
router.post('/save', function(req, res, next) {
 	console.log('fi');
 	console.log(req.body);
 	//var instance = new order()
 	//db.save();
 	res.end();
});

module.exports = router;
