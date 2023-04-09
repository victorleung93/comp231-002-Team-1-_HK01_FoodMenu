const mongoose=require('mongoose');

const menuSchema = new mongoose.Schema({

    username:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type: String, 
        require:true, 
        unique: true
    }
    
})

const signUp=mongoose.model('menu',menuSchema);

module.exports={menu}







