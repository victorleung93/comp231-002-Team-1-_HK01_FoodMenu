const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    order:{
        type: Object,
        required:true
        // required:true,
        // minlength:1,
        // trim:true
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

const order=mongoose.model('order',orderSchema);

module.exports={order}






