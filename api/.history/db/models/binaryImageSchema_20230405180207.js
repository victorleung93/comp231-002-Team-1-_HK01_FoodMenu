const mongoose=require('mongoose');

const PostSchema = new mongoose.Schema({
   
    // title:{
    //     type: String,
    //     // required:true
    //     // unique: true
    // },
    // description:{
    //     type:String,
    // },
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
    // price:{
    //     type: String,
    //     // required:true
    // },
    // description:{
    //     type: String, 
    //     // require:true, 
    //     unique: true
    // }
    
},{strict: false})

const post=mongoose.model('binartimages',PostSchema);

module.exports={post}







