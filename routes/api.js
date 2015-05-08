var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var order = mongoose.model('Order');

/* socket.io */

var io = require('socket.io')(1234);
var socket;
io.on('connection', function(_socket) {
	socket = _socket;
});

function sendOrder(order) {
	socket.emit('order', order);
}

/* save to db */
router.post('/save', function(req, res, next) {
	
 	console.log('save operation');
 	objs = req.body;
 	var instance;
 	for(var i=0; i<objs.length; i++){
 		//string = JSON.stringify(objs[i])
 		instance = new order(objs[i]);
 		instance.save();
 	}
 	
 	res.end();
});

router.get('/order/all', function(req, res, next) {

	order.find().exec(function(err, docs) {
		res.write(JSON.stringify(docs)); // only accept string
		res.end();
	});
	
})

router.get('/order/status/:statusCode', function(req, res, next) {
	status = req.param("statusCode");

	order.find({ $or:[ {'status':1}, {'status':2}]}).exec(function(err, docs) {
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

		sendOrder(req.body);
	});



})

module.exports = router;
