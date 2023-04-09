const mongoose=require('mongoose');

const PostSchema = new mongoose.Schema({
   
    title:{
        type: String,
        // required:true
        // unique: true
    },
    description:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.
    }
    // price:{
    //     type: String,
    //     // required:true
    // },
    // description:{
    //     type: String, 
    //     // require:true, 
    //     unique: true
    // }
    
})

const post=mongoose.model('post',PostSchema);

module.exports={post}







