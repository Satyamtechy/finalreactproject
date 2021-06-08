const mongodb=require('mongoose');

const checkoutSchema = new mongodb.Schema({
    price:{
        type:String
    },
    link:{
        type:String
    },
    title:{
        type:String
    },
    pic1:{
        type:String
    },
    courseFooter:{
        type:String
    }
    
})


const Checkout=mongodb.model('CHECKOUT',checkoutSchema);

module.exports=Checkout;