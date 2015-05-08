var mongoose = require("mongoose");

var Schema   = mongoose.Schema;


var Order = new Schema({
  name         : String,
  contact	   : {
  	phone: String,
  	email: String
  },
  type    	   : String,
  order        : Array,
  status       : String,
  seq		   : Number
});


mongoose.model('Order', Order);


