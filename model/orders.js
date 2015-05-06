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
  status       : String
});


mongoose.model('Order', Order);
console.log("db connected");
mongoose.connect('mongodb://localhost/pick-up-system')


