const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
    price:{
        type: Number,
        // required:true
    },  subPrice: body.PriceCal,
    tax:req.body.taxPriceCal,
    totalPrice:req.body.totalPriceCal,
    // description:{
    //     type: String, 
    //     // require:true, 
    //     unique: true
    // }
    
})

const order=mongoose.model('order',orderSchema);

module.exports={order}







