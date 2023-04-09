

const mongoose=require('mongoose');

const surveyResponseSchema = new mongoose.Schema({

    // _id:{
    //     type:String,
    //     // required:true
    // },
    refId:{
        type:mongoose.Types.ObjectId,
        required:true
      
    },
    responseDate:{
        type:Date,
        required:true
    },


    responses:{
        type: Object,
        required:true
        // required:true,
        // minlength:1,
        // trim:true
    }

//////////////////////////////////
    // result:[{
    //     _refId:String,
        
    //     responses:String
            
    // }]
///////////////////////////////////////////
    // _refId:{
    //             type:String,
    //             required:true
    //         },

  
    // responses:{
    //     type: Array,
    //     required:true,
    //     minlength:1,
    //     trim:true
    // }
})

const surveyResponse=mongoose.model('surveyResponse',surveyResponseSchema);

module.exports = { surveyResponse }
[
  {
    _id: "64332ca3a4e320579d24bd13",
    order: [
      {
        _id: "642e5c61aa2e7748c3c26a09",
        name: "Sushi2",
        shortDescription: "asdasd",
        longDescription: "Very good",
        price: 20,
        category: "bestSellers",
        __v: 0,
        count: 1,
      },
      {
        _id: "64302f521203324e89b42da2",
        name: "Pie",
        shortDescription: "Good",
        longDescription: "Really Good",
        price: 10,
        category: "newArrivals",
        __v: 0,
        count: 1,
      },
      {
        _id: "642e5b3baa2e7748c3c26920",
        name: "SushiA12",
        shortDescription: "Good",
        longDescription: "Very good",
        price: 12,
        category: "newArrivals",
        __v: 0,
        count: 1,
      },
    ],
    subPrice: 42,
    tax: 5.46,
    totalPrice: 47.46,
    __v: 0,
  },
  {
    _id: "64332ca3a4e320579d24bd13",
    order: [
      {
        _id: "642e5c61aa2e7748c3c26a09",
        name: "Sushi2",
        shortDescription: "asdasd",
        longDescription: "Very good",
        price: 20,
        category: "bestSellers",
        __v: 0,
        count: 1,
      },
      {
        _id: "64302f521203324e89b42da2",
        name: "Pie",
        shortDescription: "Good",
        longDescription: "Really Good",
        price: 10,
        category: "newArrivals",
        __v: 0,
        count: 1,
      },
      {
        _id: "642e5b3baa2e7748c3c26920",
        name: "SushiA12",
        shortDescription: "Good",
        longDescription: "Very good",
        price: 12,
        category: "newArrivals",
        __v: 0,
        count: 1,
      },
    ],
    subPrice: 42,
    tax: 5.46,
    totalPrice: 47.46,
    __v: 0,
  }
];