const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    order:{
        type: Object,
        required:true
        // required:true,
        // minlength:1,
        // trim:true
    },
    subPrice:{
        type: Number,
        // required:true
    }, 
    tax:{
        type: Number,
        // required:true
    }, 
    totalPrice:{
        type: Number,
        // required:true
    },
    date:{
        ty
    }
   
    // description:{
    //     type: String, 
    //     // require:true, 
    //     unique: true
    // }
    
})

const order=mongoose.model('order',orderSchema);

module.exports={order}







