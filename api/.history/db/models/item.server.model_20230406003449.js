const mongoose=require('mongoose');

const ItemSchema = new mongoose.Schema({
 

    name:{
        type:String,
        // required:true
        // unique: true
    },
    shortDescription:{
        type:String,
        // required:true
        // unique: true
    }, 
    longDescription:{
        type:String,
        // required:true
        // unique: true
    },
    price:{
        type:Number,
        // required:true
     
    },
    category:{
        type:String,
        // required:true
        // unique: true
    },
    image:{
        type: String,
        // required:true
        // unique: true
    }
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

const item=mongoose.model('item',ItemSchema);

module.exports={item}







