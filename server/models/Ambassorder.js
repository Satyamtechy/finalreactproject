var mongoose = require('mongoose');
 
var ambassadorschema = new mongoose.Schema({
    name: String,
    email:String,    
    phno: String,
    college: String,

});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('campusambassadors', ambassadorschema);