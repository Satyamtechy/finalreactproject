const mongodb=require('mongoose');


const courseSchema = new mongodb.Schema({
    link:{
        type:String
    },
    title:{
        type:String
    },
    courseFooter:{
        type:String
    },
    lectures:{
        type:Number
    },
    duration:{
        type:String
    },
    courseInfo:{
        type:String
    },
    courseDetails:{
        type:String
    },
    author:{
        type:String
    },
    courseVideoList:{
        type:String
    },
    description:{
        type:String
    },
    pic:{
        type:String
    },
    price:{
        type:Number
    }
    
})


const Course=mongodb.model('COURSE',courseSchema);

module.exports=Course;