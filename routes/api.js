var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var order = mongoose.model('Order');


/* save to db */
router.post('/save', function(req, res, next) {
	/*
 	console.log('save operation');
 	objs = req.body;
 	var instance;
 	for(var i=0; i<objs.length; i++){
 		//string = JSON.stringify(objs[i])
 		instance = new order(objs[i]);
 		instance.save();
 	}
 	*/
 	res.end();
});

router.get('/order/all', function(req, res, next) {

	order.find().exec(function(err, docs) {
		res.write(docs);
		res.end();
	});
	
})
module.exports = router;
