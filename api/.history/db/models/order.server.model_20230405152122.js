const mongoose=require('mongoose');

const menuSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
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

const menu=mongoose.model('menu',menuSchema);

module.exports={menu}







