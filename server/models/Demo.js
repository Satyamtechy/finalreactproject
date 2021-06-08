var mongoose = require('mongoose');
 
var demoschema = new mongoose.Schema({
    name: String,
    email:String,    
    phno: String,

});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('demo', demoschema);