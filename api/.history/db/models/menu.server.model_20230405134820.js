const mongoose=require('mongoose');

const menuSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        unique: true
    },
    price:{
        type:,
        required:true
    },
    email:{
        type: String, 
        require:true, 
        unique: true
    }
    
})

const menu=mongoose.model('menu',menuSchema);

module.exports={menu}







