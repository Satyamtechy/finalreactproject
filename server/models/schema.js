const mongoose=require('mongoose');



const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    cpassword:{
        type:String
    },
    isValid:{
        type:Boolean
    },
    uniqueString:{
        type:String
    }
})


const User=mongoose.model('USER',userSchema);

module.exports=User;