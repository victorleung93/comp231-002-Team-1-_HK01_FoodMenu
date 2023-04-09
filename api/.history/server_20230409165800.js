const bodyParser = require('body-parser');
const express =require('express');
var app = express();


const {mongoose} =require('./db/mongoose')
let cors                = require('cors')

//load models
const {item} = require('./db/models/item.server.model');
const {order}=require('./db/models/order.server.model');
const {surveyResponse}=require('./db/models/surveyResponse.server.model');
const {signUp}=require('./db/models/signUp.server.model');

//middleware
app.use(bodyParser.json());
app.use(express.json());


app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    // res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
/*
const cors = require('cors');
const frontEndUrl = 'http://localhost:4200/';

app.use(cors({ origin:frontEndUrl}));
*/
//route

app.use(cors({ origin: '*'})) 

app.post("/upload", async (req, res) => {
    await item.create({ 
        name:req.body.name,
        shortDescription:req.body.shortDescription,
        longDescription:req.body.longDescription,
        price:req.body.price,
        category:req.body.category,
        image: req.body.image
     });
    console.log("posted");
    res.send("posted");
});

app.get("/data", async (req, res) => {
    // let data = await item.find();
    // console.log("data was sent");
    // res.send(data);
    item.find({}).then((item)=>{
        res.send(item);
        console.log(req.query)
    });
});

app.get("/data/:_id", async (req, res) => {
   
    // let data = await item.find();
    // console.log("data was sent");
    // res.send(data); 
    item.findOne({_id:req.params._id}).then((item)=>{
        res.send(item);
        // console.log(item)
    });
});

app.delete("/data/:_id", async (req, res) => {
   

    let _id=req.params.id;
    console.log(_id)
    item.findByIdAndDelete({_id:req.params._id}).then((removedListDoc)=>{
        res.send(removedListDoc);
    });
});


// update
app.patch('/data/:id',(req,res)=>{
    let _id=req.params.id;
    console.log(_id)

    item.findByIdAndUpdate(_id,{
        name:req.body.name,
        shortDescription:req.body.shortDescription,
        longDescription:req.body.longDescription,
        price:req.body.price,
        category:req.body.category,
        image: req.body.image


    
    
    } ,function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            // res.sendStatus(200);
        }})
        
   
});




///////////////get response

//get list of q
app.get('/order',(req,res)=>{
    //return all q in the survey
    // let _id=req.params._id
    // surveyList.findById({_id}).then((surQ)=>{
    //     res.send(surQ);
    // });
    order.find({}).then((order)=>{
        res.send(order);
    });

    
});


///////////////////////////////////////////////////////////////////////////////////////////
app.post('/order',(req,res)=>{ 
    
    await item.create({ 
    order:req.body.cart,
    subPrice: body.PriceCal,
    tax:req.body.taxPriceCal,
    totalPrice:req.body.totalPriceCal,

 });
console.log("posted");
res.send("posted");

  


   



   
    });
});
  //////////////////////////////////////////////

app.get('/signup',(req,res)=>{

    signUp.find({}).then((signUp)=>{
        res.send(signUp);
    });

    
});

//login
app.post('/login',(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;

    
    signUp.findOne({username:username}, function(err,user){
        if(err){
            res.send({
                "Data": "NO",
                "Status": 0,
                "Message": "User not found"
              })
              
        }
        console.log(username);
        console.log(password);
        if (user && user.password === password){
           
            res.send({
                //Data is the token to access restricted page 
                "token": "dvcioljwefiosdfjweiofslkdgfjoiejfweiofjiojfsiodvjoiwefohisf",
                "Status": 200,
                "Message": "Login successful"
              })
            
          } else {
                res.send({
                "Data": "NO",
                "Status": 0,
                "Message": "Username or Password incorrect"
                
              })
              
          }      
    }) 
   
    


});
//Sign UP
app.post('/signup',async (req,res)=>{
    //create
    var username =req.body.username;
    var password =req.body.password;
    // var cfmpsw = req.body.CfmPassword;
    var email = req.body.email
   
    

    // if(password === cfmpsw){
        
        var newAcct = new signUp({
        username,
        password,
        email
        })
        try{
            console.log(username);
            console.log(password);
            console.log(email);
            const newaA = await signUp.create(newAcct);
            res.send({
                "Status": 200,
                "Message": "Account is created"
              })
        }
        catch(error){
            if(error.code === 11000){
                res.send({
                    "Status": 0,
                    "Message": "Duplicated"
                })
            }
        // }

    
  
    // }else{
    //     res.send({
    //         "Status": 0,
    //         "Message": "Password is not match"
    //       })
    }

    
});


const HOST='localhost'
const PORT=process.env.PORT|| 3200

app.listen(PORT)

console.log(`Server is running at http://${HOST}:${PORT}`)

