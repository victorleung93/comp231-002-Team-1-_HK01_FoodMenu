import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import  RemoveIcon  from '@mui/icons-material/Remove';
import  AddIcon  from '@mui/icons-material/Add';
import { Box, Button, IconButton, Typography, Tabs, Tab} from "@mui/material";
import { shades } from "../../theme";
import { useParams } from "react-router-dom";
import { addToCart } from "../../state";
import { useTheme } from "@emotion/react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ItemList from "../../components/itemList";

const ItemDetails = () =>{
    const dispatch = useDispatch();
    const { itemId } = useParams();
    const [ value , setValue ] = useState("description");
    const [ count, setCount ] = useState(1);
    const [ item, setItem ] = useState(null);
    const [ items, setItems ] = useState([]);


    const handleChange = (event, newValue) => {
        setValue(newValue);  
    };

    async function getItem(){
        const item = await fetch(`http://localhost:1337/api/items/${itemId}?populate=image`, {method:"GET"});
        const itemJson = await item.json();
        setItem(itemJson.data);
    }

    async function getItems() {
        const items = await fetch(
          "http://localhost:1337/api/items?populate=image",
          { method: "GET" }
        );
        const itemsJson = await items.json();
        setItems(itemsJson.data);
      }
    
    useEffect(() =>{
        getItem();
        getItems();
    },[itemId]);

    return (
        <div style={{width:"80%", margin:"80px auto"}}>
            <h1>ItemDetails</h1>
            <div style={{display:"flex", flexWrap:"wrap", columnGap:"40px"}}>
                <div style={{flex:"1 1 40%", marginBottom:"40px" }}>
                    {/*Image*/}
                    <img src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`} style={{objectFit : "contain"}} alt={item?.name} width="400px" height="400px" />
                </div>
                <div style={{flex:"1 1 50%", marginBottom:"40px" }}>
                    {/*Action*/}
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div>Home</div>
                        <div>Prev Next</div>
                    </div>
                    <div style={{margin:"65px 0 25px 0"}}>
                        <Typography variant="h3">{item?.attributes?.name}</Typography>
                        <Typography>${item?.attributes?.price}</Typography>
                        <Typography sx={{mt:"20px"}}>{item?.attributes?.longDescription}</Typography>
                    </div>

                    <div style={{display:"flex", alignItem:"center", minheight:"50px"}}>
                        <div style={{display:"flex", alignItem:"center", border:"1px solid orange", marginRight:"20px", padding:"5px 5px" }}>
                        <IconButton onClick={()=> setCount(Math.max(count -1, 1))}>
                            <RemoveIcon/>
                        </IconButton>
                        <Typography sx={{p:"10px"}} color= { shades.primary[300]}>
                            {count}
                        </Typography>
                        <IconButton onClick={()=> setCount(count + 1)}>
                            <AddIcon/>
                        </IconButton>
                        <Button onClick={() => {
                            dispatch(addToCart({ item: { ...item, count } }))}} sx={{backgroundColor: shades.primary[300], color:"white", "&:hover": {
                                backgroundColor: shades.primary[700],
                              }}}  >
                            Add to Cart
                        </Button>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    
)
    
}

export default ItemDetails;