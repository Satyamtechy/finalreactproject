const mongodb=require('mongoose');


const CommunitySchema = new mongodb.Schema({
    link_intern:{
        type:String
    },
    title_Intern:{
        type:String
    },
    Duration_intern:{
        type:String
    },
    Location_intern:{
        type:String
    },
    Description_intern:{
        type:String
    },
    Eligibilty_intern:{
        type:String
    },
    link_job:{
        type:String
    },
    title_job:{
        type:String
    },
    Location_job:{
        type:String
    },
    Description_job:{
        type:String
    },
    Eligibilty_job:{
        type:String
    }

})


const Community=mongodb.model('COMMUNITY',CommunitySchema);

module.exports=Community;