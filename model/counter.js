var mongoose = require("mongoose");

var Schema   = mongoose.Schema;


var Counter = new Schema({
  seq : Number
});


mongoose.model('Counter', Counter);





