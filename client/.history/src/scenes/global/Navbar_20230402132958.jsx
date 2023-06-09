import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton} from '@mui/material';
import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined } from '@mui/icons-material';
import { useNavigate,Link } from 'react-router-dom';
import { shades } from "../../theme";
import { setIsCartOpen } from '../../state';

/* Trial 1   */
import React,{useState} from 'react'



const Navbar = () =>{
    const [sidebar,setSidebar]=useState(false)
    const showSidebar=()=>

    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)
    return (
    <Box display="flex" alignItems="center" width="100%" height="70px" backgroundColor="rgba(255,255,255,0.9)" color="black" position="fixed" top="0" left="0" zIndex="1" margin="0 0 10px 0" >
        <Box width="80%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">
            <Box 
            onClick={() => Navigate("/")} 
            sx={{'&:hover':{ cursor:"pointer"}}}
            color={shades.secondary[300]}>
                <h1>HK01 Food Menu</h1>
            </Box>
            <Box display="flex" justifyContent="space-between" columnGap="20px"zIndex={2}>
                <IconButton sx={{ color: "black", '&:hover':{ backgroundColor:"orange"}}} >
                    <SearchOutlined/>
                </IconButton>
                <IconButton sx={{ color: "black", '&:hover':{ backgroundColor:"orange"}}}>
                    <PersonOutline/>
                </IconButton>
                <Badge badgeContent = {cart.length} color="secondary" invisible={cart.length ===0 } sx={{ "& .MuiBadge-badeg":{
                    right:5, top:5, padding: "0 4px", height:"14px", minWidth:"13px"
                }}}>
                    <IconButton sx={{ color: "black" , '&:hover':{ backgroundColor:"orange"}}} onClick ={()=> dispatch(setIsCartOpen({}))}>
                        <ShoppingBagOutlined/>
                    </IconButton>
                </Badge>
                <IconButton sx={{ color: "black", '&:hover':{ backgroundColor:"orange"}}}>
                    <MenuOutlined/>
                </IconButton>
                
                
            </Box>
        </Box>
    </Box>
    )
}

export default Navbar;