const express = require("express");
const path=require("path");
const bodyParser = require("body-parser");
const app = express();
var http = require('http')
const crypto = require("crypto");
const mongoose = require('mongoose');
const db="mongodb+srv://Mridul:Bagri@cluster0.gacsq.mongodb.net/TechnoColabs?retryWrites=true&w=majority"
const PORT = 5500;
const Checkout = require("../models/CheckOut")
const Course=require("../models/courseSchema");
const PCourse=require("../models/popularcourseSchema");
const Ambassador=require("../models/Ambassorder")
const User=require("../models/schema");
const Remainder=require("../models/Remainder")
const Demo  = require("../models/Demo")
const wishlist = require("../models/wishlist");
app.use(express.json());
var cors = require('cors')
app.use(cors())
var multer = require('multer');
var fs = require('fs');
const Job = require("../models/jobschema");
const Community = require("../models/communityschema");
const nodemailer=require("nodemailer");





mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(()=>console.log(`connection successful`)
  ).catch((err)=>console.log(`no connection`));

  //  console.log(path.join(__dirname,"../../das"));
  const staticPath=path.join(__dirname,"../..");

  app.use(express.static(staticPath));
  app.set("view engine", "ejs");


  const RazorPay = require("razorpay");
const instance = new RazorPay({
    key_id : "rzp_test_QWApmg5OFpCGXo",
    key_secret : "diN2ZLmRHIxQbO6e8TruNSsL"
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());




  app.post("/api/payment/order", (req, res) => {
    params = req.body;
    instance.orders
      .create(params)
      .then((data) => {
        res.send({ sub: data, status: "success" });
      })
      .catch((error) => {
        res.send({ sub: error, status: "failed" });
      });
  });
  

  app.get("/payments", (req, res) => {
    const p={
      price:parseInt(req.query.price),
      link:req.query.link,
      title:req.query.title,
      pic1:req.query.pic1,
      courseFooter:req.query.courseFooter
    }
    console.log(p)
    res.render("Payment", { key: instance.key_id,p:p});
  });




  app.post("/api/payment/verify", (req, res) => {
    body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
  
    var expectedSignature = crypto
      .createHmac("sha256", instance.key_secret)
      .update(body.toString())
      .digest("hex");
    console.log("sig" + req.body.razorpay_signature);
    console.log("sig" + expectedSignature);
    var response = { status: "failure" };
    if (expectedSignature === req.body.razorpay_signature)
      response = { status: "success" };
    res.send(response);

    
  });

  app.post("/check",async(req,res)=>{
    const check=new Checkout(req.body);
    await check.save();
    return res.redirect('course-intro.html')
    console.log("done");
    
  })
  app.get('/checks', function(req,res){
    Checkout.find(req.body).then((data)=>{
      res.json(data);
    })
  })


  app.get('/course', function(req,res){
    Course.find(req.body).then((data)=>{
      res.json(data);
    })
  })

  app.get('/popularcourse', function(req,res){
    PCourse.find(req.body).then((data)=>{
      res.json(data);
    })
  })

  app.post('/courses',async function(req,res){
    const data=new Course(req.body);
    await data.save();
  })

  app.post('/popularcourses',async function(req,res){
    const data=new PCourse(req.body);
    console.log(data);
    await data.save();
    
  })

  // heenal
app.get('/Blog',(req, res)=>{
  res.render('Blog');
})

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });



var imgModel = require('../models/model');

app.get('/uploadblog', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('Blog', { items: items });
        }
    });
});

app.post('/uploadblog', upload.single('image'), (req, res, next) => {
 
    var obj = {
       username:req.body.username,
       email: req.body.email,
        name: req.body.name,
        desc: req.body.desc,
        category :req.body.category,
        img: {
            data: fs.readFileSync(path.join(__dirname + "/uploads/" + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/Blog');
        }
    });
});

// sadaf



app.get('/community', function(req,res){
  Community.find(req.body).then((data)=>{
    res.json(data);
  })
})

app.post('/community',async function(req,res){
  const data=new Community(req.body);
  await data.save();
})

app.post("/apply",async (req,res)=>{
  try {
    const uniqueString = randString();
    const {name,lname,email,phone,linkedin,techno}=req.body;
    const regis = new Job({name:name,lname:lname,email:email,phone:phone,linkedin:linkedin,techno:techno,isValid:false,uniqueString:randString()});
    await regis.save();
    sendEmail(email,uniqueString);
    console.log("sent");
  } 
  catch (error) {
    console.log(error)
  }
  
})





const sendEmail=(email,uniqueString)=>{
  var Transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:"mridulbagri25@gmail.com",
      pass:"Mridul@20"
    }
  });

  var mailOptions;
  let sender="Satyam";
  mailOptions={
    from:sender,
    to:email,
    subject:"Email Confirmation",
    html:`Press <a href="http://localhost:5500/verify/${uniqueString}"> here </a> to verify your email. Thanks`
  };

  Transport.sendMail(mailOptions,function(error,response){
    if(error){
      console.log(error);
    }
    else{
      console.log("Message sent");
    }
  })
}


function randString(){
  const len = 8
  let randStr=''
  for(let i=0;i<len;i++){
    const ch = Math.floor((Math.random()*10)+1)
    randStr+=ch
  }
  return randStr
}

app.get('/verify/:uniqueString',async (req,res)=>{
  const uniqueString = req.params
  const user = await Job.findOne({uniqueString:uniqueString})
  if(user){
    user.isValid=true
    await user.save();
  }
  else{
    res.json("Not applied")
  }
})



//nidhi


var transports=nodemailer.createTransport(
  {
      service:'gmail',
      auth:{
          user:'guptanidhigupta25@gmail.com',
          pass:'helloworld@1234'
      }
  }
)

app.post("/sign_up",async(req,res)=>{

  const ambassadordata = new Ambassador(req.body);
  await ambassadordata.save();
  console.log('ambassadordata inserted')

 



  var mailOptionssss={
    from:'guptanidhigupta25@gmail.com',
    to:req.body.email,
    subject:'Registration successful',
    text:'Thank you for registering for our campus ambassador program.'
}


transports.sendMail(mailOptionssss,function(error,info)  {
  if(error)
  {
      console.log('Error');
  }
  else
  {
      console.log('Email sent'+info.response)
  }
}
)

return res.redirect('/campus_success')

})



// anand

app.post("/register",async (req,res)=>{
  try {
  const {name,email,password,cpassword}=req.body;
  const check=await User.findOne({email:email})
  if(check){
    console.log("already registered")
  }
  else if(password!==cpassword){
    console.log("fill properly")
  }else{
    const uniqueString=randStrings();
    const regis = new User({name:name,email:email,password:password,cpassword:cpassword,isValid:false,uniqueString:uniqueString});
    await regis.save();
    sendEmails(email,uniqueString);
    console.log("registered");
  }
  } catch (error) {
    console.log(error)
  }
  
})


const sendEmails=(email,uniqueString)=>{
  var Transportss=nodemailer.createTransport({
    service:"Gmail",
    auth:{
      user:"mridulbagri25@gmail.com",
      pass:"Mridul@20"
    }
  });

  var mailOptionss;
  let sender="Technocolabs";
  mailOptionss={
    from:sender,
    to:email,
    subject:"Email Confirmation",
    html:`Press <a href=http://localhost:5500/verify/${uniqueString}> click here </a> to verify your email. Thanks`
  };

  Transportss.sendMail(mailOptionss,function(error,response){
    if(error){
      console.log(error);
    }
    else{
      console.log("Message sent");
    }
  })
}


function randStrings(){
  const len = 8
  let randStr=''
  for(let i=0;i<len;i++){
    const ch = Math.floor((Math.random()*10)+1)
    randStr+=ch
  }
  return randStr
}

app.get('/verify/:uniqueString',async (req,res)=>{
  const {uniqueString} = req.params
  const user = await User.findOne({uniqueString:uniqueString})
  if(user){
    user.isValid=true
     await user.save();
  }
  else{
    res.json("user not found")
  }
})



//harsh



app.post("/remainder", function(req, res) {
  let newrem = new Remainder({
      Name: req.body.Name,
      Email: req.body.Email,
      PhoneNo: req.body.Phone
  });
  newrem.save();

  return res.redirect('/index')
})

//rishabh

var transportsDemo=nodemailer.createTransport(
  {
      service:'gmail',
      auth:{
          user:'guptanidhigupta25@gmail.com',
          pass:'helloworld@1234'
      }
  }
)

app.post("/send",async(req,res)=>{

  const demo = new Demo(req.body);
  await demo.save();
  console.log('Record Inserted Successfully')

 



  var mailOptionDemo={
    from:'guptanidhigupta25@gmail.com',
    to:req.body.email,
    subject:'DEMO REGISTERATION PAGE',
    text:'CONGRATS YOU HAVE SUCCESFULLY REGISTERED'
}


transportsDemo.sendMail(mailOptionDemo,function(error,info)  {
  if(error)
  {
      console.log('Error');
  }
  else
  {
      console.log('Email sent'+info.response)
  }
}
)

return res.redirect('/confirmation-page')

})


//mridul

app.get("/wish", function (req, res) {
  wishlist.find(req.body).then((data) => {
    res.json(data);
  });
});


app.post("/wish",async(req, res)=>{
  const wish = new wishlist(req.body);
  await wish.save();
  console.log('wish inserted')
})




  app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
  });