
import { useState } from "react";
import { useDispatch } from 'react-redux';
import  RemoveIcon  from '@mui/icons-material/Remove';
import  AddIcon  from '@mui/icons-material/Add';
import { Box, Button, IconButton, Typography} from "@mui/material";
import { shades } from "../theme";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../state";
import { useTheme } from "@emotion/react";

const ItemList = ({item, width}) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const { palette: { neutral} } = useTheme();
    const { category, price, name } = item.attributes;
    const productUrl = item.image.data.attributes.url;
 
    return (
        <Box width = "350px"> 
            <Box position="relative" onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)} >
                <img src={`http://localhost:1337${productUrl}`} alt={item.name}  width="350px" height="400px" onClick={()=> navigate(`/item/${(item.id)}`)}
                style={{ cursor: 'pointer'}}
                />
                <Box display={ isHovered ? "blocked":'none'} position="absolute" bottom="10%" left = "0" width ="100%" padding = "0 5%"> 
                    <Box display="flex" justifyContent="space-between">
                        <Box display="flex" alignItems="center" backgroundColor = {shades.neutral[100]} borderRadius="3px">
                        <IconButton onClick={()=> setCount(Math.max(count -1, 1))}>
                            <RemoveIcon/>
                        </IconButton>
                        <Typography color= { shades.primary[300]}>
                            {count}
                        </Typography>
                        <IconButton onClick={()=> setCount(count + 1)}>
                            <AddIcon/>
                        </IconButton>
                        </Box>
                        {/*Button*/}
                        <Button onClick={() => {
                            dispatch(addToCart({ item: { ...item, count } }))}} sx={{backgroundColor: shades.primary[300], color:"white", "&:hover": {
                                backgroundColor: shades.primary[700],
                              }}}  >
                            Add to Cart
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box mt="3px">
                <Typography variant="subtitle2" color={neutral.dark}>
                    {category.replace(/([A-Z])/g, " $1").replace(/^./, (str)=> str.toUpperCase("\ "))}
                </Typography>
                <Typography>
                    {name}
                </Typography>
                <Typography>
                    ${price}
                </Typography>
            </Box>
        </Box>
    )
}


export default ItemList;