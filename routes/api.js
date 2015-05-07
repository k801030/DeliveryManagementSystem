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
		res.write(JSON.stringify(docs)); // only accept string
		res.end();
	});
	
})

router.put('/order/:id', function(req, res, next) {
	
	id = req.param("id");
	console.log(req.param("id"));

	order.findOne({_id: id}, function(err, doc) {
		if(err) console.log("order put error");

		doc.status = req.body.status;
		console.log(req.body);
		doc.save();
		res.write(JSON.stringify(req.body));
		res.end();
	});

})

module.exports = router;
