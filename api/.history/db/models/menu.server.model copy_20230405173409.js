const mongoose=require('mongoose');

const PostSchema = new mongoose.Schema({
   
    :{
        type: String,
        // required:true
        // unique: true
    },
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







