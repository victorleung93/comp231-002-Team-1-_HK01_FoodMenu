const mongoose=require('mongoose');

const menuSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        unique: true
    },
    price:{
        type: double,
        required:true
    },
    description:{
        type: String, 
        require:true, 
        unique: true
    }
    
})

const menu=mongoose.model('menu',menuSchema);

module.exports={menu}







