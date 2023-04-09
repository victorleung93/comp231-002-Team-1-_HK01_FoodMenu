//connect mongodb

const mongoose=require('mongoose');

mongoose.Promise=global.Promise

db="mongodb+srv://leoauwork:PlW7orfXkbAr4bQV@api.mqdk990.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(db/*,{userNewUrlParser: true}*/).then(()=>{
    console.log("Connected to MongoDB");
}).catch((e)=>{
    console.log("MongoDB connection Error!!!!!");
    console.log(e);
});

/*
//prevent deprectation warning from mongdb native driver
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);

*/

module.exports={mongoose};

