const mongoose=require('mongoose');

const ItemSchema = new mongoose.Schema({
    name:req.body.name,
    shortDescription:req.body.shortDescription,
    longDescription:req.body.longDescription,
    price:req.body.price,
    category:body.category,
    image: req.body.file,

    name:{
        type:String,
          // required:true
    },
    image:{
        type: String,
        // required:true
        // unique: true
    },
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







