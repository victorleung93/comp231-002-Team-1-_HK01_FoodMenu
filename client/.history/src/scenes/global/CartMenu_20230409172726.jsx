
import { Box, Button, Divider, IconButton, Typography} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import  CloseIcon  from '@mui/icons-material/Close';
import  RemoveIcon  from '@mui/icons-material/Remove';
import  AddIcon  from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { shades } from "../../theme";
import { decreaseCount, increaseCount, removeFromCart, setIsCartOpen } from "../../state";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const urlForServer = "http://localhost:3200/";

const FlexBox = styled(Box)`
display:fles;
jsutify-content: space-between;
align-items:center
`

const CartMenu = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart.cart);
    const isCartOpen = useSelector((state)=> state.cart.isCartOpen);
    
      
    const totalPrice = cart.reduce((total, item)=>{
        return total + item.count * item.price;
    }, 0 ).toFixed(2);

    return(
        <Box  //overlays
            display={isCartOpen ? "block": 'none'} 
            backgroundColor="rgba(0,0,0,0.4)"
            position="fixed"
            zIndex={10}
            width="100%"
            height="100%"
            left="0"
            top="0"
            overflow="auto"
        >
        
        <Box 
            position={"fixed"}
            right = "0"
            top = "0"
            backgroundColor= "white"
            width = "max(400px, 30%)"
            height = "75%"
        >
                <Box padding="30px" overflow="auto" height="100%">
                    {/*Header*/}
                    <FlexBox mb="15px">
                        <Typography variant="h3">Shopping Cart ({cart.length})</Typography> 
                        <IconButton  onClick ={()=> dispatch(setIsCartOpen({}))}>
                            <CloseIcon sx={{fontSize:"2rem"}}/>
                        </IconButton>
                    </FlexBox>
                    {/*Cart List*/}
                    <Box>
                        {cart.map((item) => (
                            
                            <Box key={`${item.name}-${item._id}`}>
                                <FlexBox p="15px 0">
                                    <Box flex = "1 1 40%">
                                        <img  width="100px" height="100px" src={item?.image} alt={item?.name} />
                                    </Box>
                                    <Box flex = "1 1 60%">
                                        <FlexBox mb="5px">
                                            <Typography fontWeight="bold">
                                                {item.name}
                                            </Typography>
                                            <IconButton onClick={()=> dispatch(removeFromCart({_id:item._id}))}>
                                                <CloseIcon/>
                                            </IconButton>
                                        </FlexBox>

                                        <Typography>
                                            {item.shortDescription}
                                        </Typography>
                                        {/*Amount*/}
                                        <FlexBox m="5px 0">
                                            <Box display="flex" alignItems="center" border={`1.5px solid ${shades.neutral[600]}`} m=" 0 10px">
                                                <IconButton onClick={()=> dispatch(decreaseCount({_id:item._id }))}>
                                                    <RemoveIcon/>
                                                </IconButton>
                                                <Typography>
                                                    {item.count}
                                                </Typography>
                                                <IconButton onClick={()=> dispatch(increaseCount({_id:item._id }))}>
                                                    <AddIcon/>
                                                </IconButton>
                                            </Box>
                                            {/*Price*/}
                                                <Typography marginLeft="20px" fontWeight="bold">
                                                    ${item?.price}
                                                </Typography>
                                        </FlexBox>
                                        
                                    </Box>
                                </FlexBox>
                                <Divider/>
                            </Box>
                        ))}
                    </Box>
                    
                    {/* Actions */}
                    <Box m="20px 0">
                        <FlexBox m="20px 0">
                            <Typography fontWeight="bold"> Subtotal:</Typography>
                            <Typography fontWeight="bold" sx={{ml:"200px"}}  > ${totalPrice} </Typography>
                        </FlexBox>
                        <Button  sx={{ 
                            backgroundColor: shades.primary[400],
                            color: "white",
                            minWidth: "100px",
                            padding: "20px 40px",
                            m: "20px 0",
                            '&:hover':{ backgroundColor: shades.neutral[300], color:"black" }
                        }} onClick={() => {
                            navigate("/order");
                            dispatch(setIsCartOpen({}));
                        }}>Checkout</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};


export default CartMenu;