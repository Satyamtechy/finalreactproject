const mongodb=require('mongoose');


const JobSchema = new mongodb.Schema({
    name:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    linkedin:{
        type:String
    },
    techno:{
        type:String
    },
    isValid:{
        type:Boolean
    },
    uniqueString:{
        type:String
    }

})


const Job=mongodb.model('Job',JobSchema);

module.exports=Job;