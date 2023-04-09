
import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../../theme";




const Order = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  var [price, setPrice] = useState(0);
  var [taxPrice, setTaxPrice] = useState(0);
  var [totalPrice, settTotalPrice] = useState(0);
//   const handleFormSubmit = async (values, actions) => {
//     setActiveStep(activeStep + 1);

//     // this copies the billing address onto shipping address
//     if (isFirstStep && values.shippingAddress.isSameAddress) {
//       actions.setFieldValue("shippingAddress", {
//         ...values.billingAddress,
//         isSameAddress: true,
//       });
//     }

//     if (isSecondStep) {
//       makePayment(values);
//     }

//     actions.setTouched({});
//   };

//   async function makePayment(values) {
//     //const stripe = await stripePromise;
//     const requestBody = {
//       userName: [values.firstName, values.lastName].join(" "),
//       email: values.email,
//       products: cart.map(({ id, count }) => ({
//         id,
//         count,
//       })),
//     };

//     const response = await fetch("http://localhost:3000/api/orders", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(requestBody),
//     });
//     const session = await response.json();
//     //await stripe.redirectToCheckout({sessionId: session.id,});
//   }

const  add =(a)=>{
  price=price+a;
  taxPrice=price*0.13;
  totalPrice=price+taxPrice;
  console.log(price);
}

const [display, setDisplay] = useState(null);

console.log(cart);
  return (
    <div className="App"  style={{width:"80%", margin:"80px auto"}}>
      
   {cart.map((el) => {
         add(el.price*el.count)
          return (
            <tr key={el._id}>
                   <td><img src={el.image} alt="" /></td>
                 <td>{el.name}</td>
            <td>{el.count}</td>
            <td>{el.price} CAD</td>
            <td>{el.count*el.price}</td>
            

            </tr>
          );
          
     
        })}
        <h1>Sub Total : {price}</h1>
        <h1>Tax : {taxPrice}</h1>
        <h1>Total : {totalPrice}</h1>
    </div>
    // <Box width="80%" m="100px auto">  <h1>Hi</h1></Box>
  
    )


// ];


export default Order;