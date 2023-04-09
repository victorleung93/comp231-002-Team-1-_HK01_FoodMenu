const bodyParser = require('body-parser');
const express =require('express');
var app = express();


const {mongoose} =require('./db/mongoose')
let cors                = require('cors')

//load models
const {item} = require('./db/models/item.server.model');
const {menu}=require('./db/models/menu.server.model');
const {surveyResponse}=require('./db/models/surveyResponse.server.model');
const {signUp}=require('./db/models/signUp.server.model');

//middleware
app.use(bodyParser.json());
app.use(express.json());

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
// app.use(bodyParser.text({ limit: '200mb' }));

//https://enable-cors.org/server_expressjs.html
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
   
    // let data = await item.find();
    // console.log("data was sent");
    // res.send(data); 
    // item.findOne({_id:req.params._id}).then((item)=>{
    //     res.send(item);
    //     console.log(item)
    // });

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
    // let _id=req.params.id;
    // let name =req.body.name;
    // let author =req.body.author;
    // let startDate=req.body.startDate;
    // let endDate=req.body.endDate;
    // let questions =req.body.questions;
    // console.log(req.body)
    
    item.findByIdAndUpdate(_id,{
        name:req.body.name,
        shortDescription:req.body.shortDescription,
        longDescription:req.body.longDescription,
        price:req.body.price,
        category:req.body.category,
        image: req.body.image

//         author =req.body.author,
//   startDate=req.body.startDate;
//    endDate=req.body.endDate;
//    questions =req.body.questions;
    
    
    } ,function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            // res.sendStatus(200);
        }})
        
    // let newsurveyList =  surveyList({
    //     _id,
    //     name,
    //     author,
    //     startDate,
    //     endDate,
    //     questions,
        

    // });
    // console.log(id)
    // quotesCollection.findOneAndUpdate(/* ... */)
    // .then(result => {
    //   console.log(result)
    //  })
    // .catch(error => console.error(error))
});












app.get('/menu',(req,res)=>{
    //return an array of the survey
    menu.find({}).then((menu)=>{
        res.send(menu);
    });
    

})


//POST survey list
app.post('/menu',(req,res)=>{

    // console.log(req.body.name)
    // res.send(req.body.name)

    let newmenu = new menu({
        _id: new mongoose.Types.ObjectId(),
        name : req.body.name
        // price,
        // description,
        

    });

    newmenu.save().then((listDoc4)=>{
        //return the full list of survey
        res.send(listDoc4);

    });

});


//GET survey list

// update
app.put('/survey/:id',(req,res)=>{
    let _id=req.params.id;
    console.log(_id)
    // let _id=req.params.id;
    // let name =req.body.name;
    // let author =req.body.author;
    // let startDate=req.body.startDate;
    // let endDate=req.body.endDate;
    // let questions =req.body.questions;
    // console.log(req.body)
    
    surveyList.findByIdAndUpdate(_id,{
        name:req.body.name,
        author:req.body.author,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        questions :req.body.questions,

//         author =req.body.author,
//   startDate=req.body.startDate;
//    endDate=req.body.endDate;
//    questions =req.body.questions;
    
    
    } ,function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            // res.sendStatus(200);
        }})
        
    // let newsurveyList =  surveyList({
    //     _id,
    //     name,
    //     author,
    //     startDate,
    //     endDate,
    //     questions,
        

    // });
    // console.log(id)
    // quotesCollection.findOneAndUpdate(/* ... */)
    // .then(result => {
    //   console.log(result)
    //  })
    // .catch(error => console.error(error))
});


//del
app.delete('/survey/:id',(req,res)=>{
    //delete
    let _id=req.params.id;
    console.log(_id)
    surveyList.findByIdAndDelete({_id}).then((removedListDoc)=>{
        res.send(removedListDoc);
    });

});





/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

///////////////get response

//get list of q
app.get('/response',(req,res)=>{
    //return all q in the survey
    // let _id=req.params._id
    // surveyList.findById({_id}).then((surQ)=>{
    //     res.send(surQ);
    // });
    surveyResponse.find({}).then((surveyResponse)=>{
        res.send(surveyResponse);
    });

    
});

///////////////////////why try catch still crash??///////////////
//recieve response

                // app.post('/Response/:_id/:question_id',(req,res)=>{
                //     //add a ans to the response array
                //     let _id=req.params._id
                //     let _refId=req.params.question_id
                //     let responses =req.body.value;
                
                //     let newResponse = new surveyResponse({
                //         _id,_refId,
                //         responses
                //     });
                //     surveyResponse.findByIdAndUpdate({_id,_refId},
                //                 {
                //                 $push:{responses}
                //             }).then(()=>{
                //                 res.sendStatus(200);
                //             })

                //     try{
                //      newResponse.save().then(()=>{
                //         res.sendStatus(200);
                //     })
                //     }catch (err){
                //         console.log(err);
                //         res.sendStatus(200);
                //     }
                
                // });
///////////////////////////////////////////////////////////////////////////////////////////
app.post('/response',(req,res)=>{
    //add a ans to the response array
    // let _id="asdasdasdasdasdasdasdsd";
    //let _refId=req.body//.question_id
    // let refId='';
    surveyResponse.init()

    // let //.value;
 
    let newResponse = new surveyResponse({
        
        // refId,
        // date,
        // result:[{_refId,responses}]
        refId:req.body.refId,
        responseDate:req.body.responseDate,
        // result:[{_refId,responses}]
        responses: req.body.responses
    });

  

    newResponse.save().then((listDoc2)=>{
        //return the full list of response
        console.log('save data: ',listDoc2)
        // res.send(listDoc2);
    });
});
  //////////////////////////////////////////////

app.get('/signup',(req,res)=>{
    //return all q in the survey
    // let _id=req.params._id
    // surveyList.findById({_id}).then((surQ)=>{
    //     res.send(surQ);
    // });
    signUp.find({}).then((signUp)=>{
        res.send(signUp);
    });

    
});

//login
app.post('/login',(req,res)=>{
    var userName = req.body.formGroup.UserName;
    var password = req.body.formGroup.Password;

    
    signUp.findOne({username:userName}, function(err,user){
        if(err){
            res.send({
                "Data": "NO",
                "Status": 0,
                "Message": "User not found"
              })
              
        }
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
            const new = await signUp.create(newAcct);
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

        console.log("dddd");
  
    // }else{
    //     res.send({
    //         "Status": 0,
    //         "Message": "Password is not match"
    //       })
    }

    
});





/*
app.get('/',(req,res)=>{
   

res.send("Big explosion")

})
*/

const HOST='localhost'
const PORT=process.env.PORT|| 3200

app.listen(PORT)

console.log(`Server is running at http://${HOST}:${PORT}`)

