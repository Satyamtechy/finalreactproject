const mongodb=require('mongoose');


const popularcourseSchema = new mongodb.Schema({
    link:{
        type:String
    },
    pic:{
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
    description:{
        type:String
    },
    pic:{
        type:String
    }
    
})


const PCourse=mongodb.model('POPULARCOURSE',popularcourseSchema);

module.exports=PCourse;