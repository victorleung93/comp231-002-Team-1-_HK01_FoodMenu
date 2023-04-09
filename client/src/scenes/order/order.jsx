import { Box, Button, Divider, IconButton, Typography} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import  CloseIcon  from '@mui/icons-material/Close';
import  RemoveIcon  from '@mui/icons-material/Remove';
import  AddIcon  from '@mui/icons-material/Add';
import { shades } from "../../theme";
import { decreaseCount, increaseCount, removeFromCart } from "../../state";
import { useNavigate } from "react-router-dom";

const Order = () =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart.cart);

    
      
    const totalPrice = cart.reduce((total, item)=>{
        return total + item.count * item.attributes.price;
    }, 0 ).toFixed(2);

    return <div style={{width:"80%", margin:"80px auto"}}>
            <h1>Order</h1>
            <Box>
                {cart.map((item) => (
                    <Box key={`${item.attributes.name}-${item.id}`}>
                        <Box p="15px 0" display="flex" >
                            <Box flex = "1 1 40%" paddingLeft="10%">
                                <img   width="300px"  src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`} alt={item?.name} />
                            </Box>
                            <Box flex = "1 1 60%" >
                                <Box mb="5px" pl="10px" display="flex" alignItems="center">
                                    <h2>{item.attributes.name}</h2>
                                    <IconButton onClick={()=> dispatch(removeFromCart({ id:item.id}))}>
                                        <CloseIcon/>
                                    </IconButton>
                                </Box>

                                
                                {/*Amount*/}
                                <Box m="5px 0" display="flex" alignItems="center" >
                                    <Box display="flex" alignItems="center" textAlign="center" padding="auto" border={`1.5px solid ${shades.neutral[600]}`} m="10px" >
                                        <IconButton onClick={()=> dispatch(decreaseCount({ id:item.id }))} >
                                            <RemoveIcon sx={{fontSize:"2rem"}}/>
                                        </IconButton>
                                        <Typography fontSize="150%">
                                            {item.count}
                                        </Typography>
                                        <IconButton onClick={()=> dispatch(increaseCount({ id:item.id }))}>
                                            <AddIcon sx={{fontSize:"2rem"}}/>
                                        </IconButton>
                                    </Box>
                                    {/*Price*/}
                                    <Typography marginLeft="200px" fontSize="150%" fontWeight="bold">
                                        ${item.attributes.price}
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
                    <h2>Subtotal: ${totalPrice} </h2> 
                    <Button  sx={{ 
                                backgroundColor: shades.primary[400],
                                color: "white",
                                minWidth: "100px",
                                padding: "20px 40px",
                                m: "10px 0",
                                '&:hover':{ backgroundColor: shades.neutral[300], color:"black" }
                                
                    }}>Submit Order!</Button>
                </div>
            </div>
            
        </div>
}

export default Order;