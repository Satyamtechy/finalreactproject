
var mongoose = require('mongoose');
 
var blogSchema = new mongoose.Schema({
    username: String,
    email:String,    
    name: String,
    desc: String,
    category:String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('blog', blogSchema);