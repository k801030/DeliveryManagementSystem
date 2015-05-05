var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/pick-up-system')

var Schema   = mongoose.Schema;


var Order = new Schema({
  name         : String,
  phone    	   : String,
  email        : String,
  email        : String,
  messages     : String
});

mongoose.model('Order', Order);
console.log("db connected");

var ListsModel = function(){};
ListsModel.prototype.save = function(obj, callback) {
	var instance = new Order(obj);
	instance.save(function(err){
		callback(err);
	});
};

exports.ListsModel = ListsModel;