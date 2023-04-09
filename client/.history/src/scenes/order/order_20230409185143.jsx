
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Stepper, Step, StepLabel, Divider, IconButton, Typography } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { shades } from "../../theme";
import { decreaseCount, increaseCount, removeFromCart } from "../../state";
import  CloseIcon  from '@mui/icons-material/Close';
import  RemoveIcon  from '@mui/icons-material/Remove';
import  AddIcon  from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";




const Order = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  // var [price, setPrice] = useState(0);
  // var [taxPrice, setTaxPrice] = useState(0);
  // var [totalPrice, settTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const urlForServer = "http://localhost:3200/";
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
const PriceCal = cart.reduce((total, item)=>{
  return total + item.count * item.price;
}, 0);


const subPrice = (PriceCal).toFixed(2);
const taxPriceCal = (PriceCal*0.13);
const taxPrice = (PriceCal*0.13).toFixed(2);
const totalPriceCal = taxPriceCal+PriceCal;
const totalPrice = totalPriceCal.toFixed(2);


const onSubmitOrder = async () => {
  
 

  await axios.post(urlForServer + "order", {
    order: cart,
    subPrice: PriceCal,
    tax:taxPriceCal,
    totalPrice:totalPriceCal,
  });
  // fetchData();
  // setPreview(null);

    cart.map((item) => (
        console.log(item.name),
        removeFromCart({_id:item._id})
    ));

};
cart.map((item) => (
    console.log(item.name)
console.log(cart);
;
console.log(cart);

// const  add =(a)=>{
//   price=price+a;
//   taxPrice=price*0.13;
//   totalPrice=price+taxPrice;
//   console.log(price);
// }

const [display, setDisplay] = useState(null);

console.log(cart);
  return (
    <div className="App"  style={{width:"80%", margin:"80px auto"}}>
    
   {/* {cart.map((el) => {
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
        <h1>Total : {totalPrice}</h1> */}

        <h1>Order</h1>
        <Box>
                {cart.map((item) => (
                  
                 
                    <Box key={`${item.name}-${item._id}`}>
                     
                        <Box p="15px 0" display="flex" >
                            <Box flex = "1 1 40%" paddingLeft="10%">
                                <img   width="300px"  src={item.image} alt={item?.name} />
                            </Box>
                            <Box flex = "1 1 60%" >
                                <Box mb="5px" pl="10px" display="flex" alignItems="center">
                                    <h2>{item.name}</h2>
                                    <IconButton onClick={()=> dispatch(removeFromCart({ id:item.id}))}>
                                        <CloseIcon/>
                                    </IconButton>
                                </Box>

                                
                                {/*Amount*/}
                                <Box m="5px 0" display="flex" alignItems="center" >
                                    <Box display="flex" alignItems="center" textAlign="center" padding="auto" border={`1.5px solid ${shades.neutral[600]}`} m="10px" >
                                        <IconButton onClick={()=> dispatch(decreaseCount({ _id:item._id }))} >
                                            <RemoveIcon sx={{fontSize:"2rem"}}/>
                                        </IconButton>
                                        <Typography fontSize="150%">
                                            {item.count}
                                        </Typography>
                                        <IconButton onClick={()=> dispatch(increaseCount({ _id:item._id }))}>
                                            <AddIcon sx={{fontSize:"2rem"}}/>
                                        </IconButton>
                                    </Box>
                                    {/*Price*/}
                                    <Typography marginLeft="200px" fontSize="150%" fontWeight="bold">
                                        ${item.price}
                                    </Typography>
                                </Box>
                                
                            </Box>
                        </Box>
                        <Divider/>
                        
                    </Box>
                 
                ))}
            </Box>
            <div style={{margin:"20px", display:"flex",  justifyContent:"flex-end"}}  >
                <div style={{padding:" 10px "}}>
                    <h2>Subtotal: ${subPrice} </h2> 
                    <h2>Tax: ${taxPrice} </h2> 
                    <h2>Total Price: ${totalPrice} </h2> 
                    {/* <h2>Tax: ${taxPrice} </h2> 
                    <h2>Total: ${totalPrice} </h2>  */}
                    <Button  sx={{ 
                                backgroundColor: shades.primary[400],
                                color: "white",
                                minWidth: "100px",
                                padding: "20px 40px",
                                m: "10px 0",
                                '&:hover':{ backgroundColor: shades.neutral[300], color:"black" }
                                
                    }} onClick={onSubmitOrder}>Submit Order!</Button>
                </div>
            </div>
            
    </div>

    
    // <Box width="80%" m="100px auto">  <h1>Hi</h1></Box>
  
    )


//     <Box width="80%" m="100px auto">
//       <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
//         <Step>
//           <StepLabel>Billing</StepLabel>
//         </Step>
//         <Step>
//           <StepLabel>Payment</StepLabel>
//         </Step>
//       </Stepper>
//       <Box>
//         <Formik
//           onSubmit={handleFormSubmit}
//           initialValues={initialValues}
//           validationSchema={checkoutSchema[activeStep]}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleBlur,
//             handleChange,
//             handleSubmit,
//             setFieldValue,
//           }) => (
//             <form onSubmit={handleSubmit}>
//               {isFirstStep && (
//                 /*<Shipping
//                   values={values}
//                   errors={errors}
//                   touched={touched}
//                   handleBlur={handleBlur}
//                   handleChange={handleChange}
//                   setFieldValue={setFieldValue}
//                 />*/
//                 <>d</>
//               )}
//               {isSecondStep && (
//                 <>i</>
//                 /*<Payment
//                   values={values}
//                   errors={errors}
//                   touched={touched}
//                   handleBlur={handleBlur}
//                   handleChange={handleChange}
//                   setFieldValue={setFieldValue}
//                 />*/
//               )}
//               <Box display="flex" justifyContent="space-between" gap="50px">
//                 {!isFirstStep && (
//                   <Button
//                     fullWidth
//                     color="primary"
//                     variant="contained"
//                     sx={{
//                       backgroundColor: shades.primary[200],
//                       boxShadow: "none",
//                       color: "white",
//                       borderRadius: 0,
//                       padding: "15px 40px",
//                     }}
//                     onClick={() => setActiveStep(activeStep - 1)}
//                   >
//                     Back
//                   </Button>
//                 )}
//                 <Button
//                   fullWidth
//                   type="submit"
//                   color="primary"
//                   variant="contained"
//                   sx={{
//                     backgroundColor: shades.primary[400],
//                     boxShadow: "none",
//                     color: "white",
//                     borderRadius: 0,
//                     padding: "15px 40px",
//                   }}
//                 >
//                   {!isSecondStep ? "Next" : "Place Order"}
//                 </Button>
//               </Box>
//             </form>
//           )}
//         </Formik>
//       </Box>
//     </Box>
//   );
// };

// const initialValues = {
//   billingAddress: {
//     firstName: "",
//     lastName: "",
//     country: "",
//     street1: "",
//     street2: "",
//     city: "",
//     state: "",
//     zipCode: "",
//   },
//   shippingAddress: {
//     isSameAddress: true,
//     firstName: "",
//     lastName: "",
//     country: "",
//     street1: "",
//     street2: "",
//     city: "",
//     state: "",
//     zipCode: "",
//   },
//   email: "",
//   phoneNumber: "",
};

// const checkoutSchema = [
//   yup.object().shape({
//     billingAddress: yup.object().shape({
//       firstName: yup.string().required("required"),
//       lastName: yup.string().required("required"),
//       country: yup.string().required("required"),
//       street1: yup.string().required("required"),
//       street2: yup.string(),
//       city: yup.string().required("required"),
//       state: yup.string().required("required"),
//       zipCode: yup.string().required("required"),
//     }),
//     shippingAddress: yup.object().shape({
//       isSameAddress: yup.boolean(),
//       firstName: yup.string().when("isSameAddress", {
//         is: false,
//         then: yup.string().required("required"),
//       }),
//       lastName: yup.string().when("isSameAddress", {
//         is: false,
//         then: yup.string().required("required"),
//       }),
//       country: yup.string().when("isSameAddress", {
//         is: false,
//         then: yup.string().required("required"),
//       }),
//       street1: yup.string().when("isSameAddress", {
//         is: false,
//         then: yup.string().required("required"),
//       }),
//       street2: yup.string(),
//       city: yup.string().when("isSameAddress", {
//         is: false,
//         then: yup.string().required("required"),
//       }),
//       state: yup.string().when("isSameAddress", {
//         is: false,
//         then: yup.string().required("required"),
//       }),
//       zipCode: yup.string().when("isSameAddress", {
//         is: false,
//         then: yup.string().required("required"),
//       }),
//     }),
//   }),
//   yup.object().shape({
//     email: yup.string().required("required"),
//     phoneNumber: yup.string().required("required"),
//   }),
// ];


export default Order;