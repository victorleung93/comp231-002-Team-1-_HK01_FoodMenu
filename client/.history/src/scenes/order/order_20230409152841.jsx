
// import { useSelector } from "react-redux";
// import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
// import { Formik } from "formik";
// import { useState } from "react";
// import * as yup from "yup";
// import { shades } from "../../theme";




// const Order = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const cart = useSelector((state) => state.cart.cart);
//   const isFirstStep = activeStep === 0;
//   const isSecondStep = activeStep === 1;
//   var [price, setPrice] = useState(0);
//   var [taxPrice, setTaxPrice] = useState(0);
//   var [totalPrice, settTotalPrice] = useState(0);
// //  

// const  add =(a)=>{
//   price=price+a;
//   taxPrice=price*0.13;
//   totalPrice=price+taxPrice;
//   console.log(price);
// }

// const [display, setDisplay] = useState(null);

// console.log(cart);
//   return (
//     <div className="App"  style={{width:"80%", margin:"80px auto"}}>
      
//    {cart.map((el) => {
//          add(el.price*el.count)
//           return (
//             <tr key={el._id}>
//                    <td><img src={el.image} alt="" /></td>
//                  <td>{el.name}</td>
//             <td>{el.count}</td>
//             <td>{el.price} CAD</td>
//             <td>{el.count*el.price}</td>
            

//             </tr>
//           );
          
     
//         })}
//         <h1>Sub Total : {price}</h1>
//         <h1>Tax : {taxPrice}</h1>
//         <h1>Total : {totalPrice}</h1>
//     </div>

  
//     )


//       }


// export default Order;