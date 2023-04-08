
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
import axios from "axios";


const ItemDetails = () =>{
    const dispatch = useDispatch();
    const { itemId } = useParams();
    const [ value , setValue ] = useState("description");
    const [ count, setCount ] = useState(1);
    const [ item, setItem ] = useState(null);
    const [ items, setItems ] = useState([]);
    const urlForServer = "http://localhost:3200/";
    const handleChange = (event, newValue) => {
        setValue(newValue);  
    };

    // async function getItem(){
    //     const item = await fetch(`http://localhost:1337/api/items/${itemId}?populate=image`, {method:"GET"});
    //     const itemJson = await item.json();
    //     setItem(itemJson.data);
    // }

    async function getItem() {
        // const items = await fetch(
        //   // "http://localhost:1337/api/items?populate=image",
       
        //   { method: "GET" }
        // );
        let item = await axios.get(urlForServer + "data/"+);
        // const itemsJson = await items.json();
        dispatch(setItem(item.data));
      }
    
    //   useEffect(() => {
    //     getItems();
    //   }, []);

    // async function getItems() {
    //     const items = await fetch(
    //       "http://localhost:1337/api/items?populate=image",
    //       { method: "GET" }
    //     );
        
        const itemsJson = await items.json();
        const idToRemove = itemId;
        const randomItems = itemsJson.data.sort(() => Math.random() - 0.5);
        const filteredItems = randomItems.filter((item) => item._id != idToRemove);
        setItems(filteredItems);
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
                    <img src={item.image} style={{objectFit : "contain" , width:"500px", height:"600px"}} alt={item?.name}  />
                </div>
                <div style={{flex:"1 1 50%", marginBottom:"40px" }}>
                    
                    <div style={{margin:"65px 0 25px 0"}}>
                        <Typography sx={{mb:"20px"}} variant="h3">{item?.attributes?.name}</Typography>
                        <Typography>${item?.attributes?.price}</Typography>
                        <Typography sx={{mt:"20px"}}>{item?.attributes?.shortDescription}</Typography>
                    </div>
                    {/*Button*/}
                    <div style={{display:"flex", alignItem:"center", minheight:"50px"}}>
                        <div style={{display:"flex", alignItem:"center", border:"1px solid orange", marginRight:"20px", padding:"5px 5px" }}>
                        <IconButton onClick={()=> setCount(Math.max(count -1, 1))}>
                            <RemoveIcon/>
                        </IconButton>
                        <Typography sx={{p:"15px", m:"auto"}} color= { shades.primary[300]}>
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

                        <div>
                            <div style={{margin:"10px" , display:"flex",alignItems:"center"}}>
                            <FavoriteBorderOutlinedIcon /> 
                            <Typography style={{padding:"10px 20px"}}>Add to Favourite</Typography>
                            </div>
                            
                        </div>
                    </div >
                    {/*Info*/}
                    <div style={{margin:"30px 0"}}>
                        <Typography variant="h4">Categories: {item?.attributes?.category.replace(/([A-Z])/g, " $1").replace(/^./, (str)=> str.toUpperCase("\ "))}</Typography>
                    </div>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="DESCRIPTION" value="description"/>
                        <Tab label="REVIEWS" value="reviews"/>
                    </Tabs>

                <div style={{display:"flex" , flexWrap:"wrap", gap:"15px"}}>
                    {value === "description" && (
                        <div>{item?.attributes?.longDescription}</div>
                    ) }
                    {value === "reviews"}
                </div>
                </div>
            </div>
            <div style={{margin:"20px 0"}}>
                <div style={{margin:"50px 0" ,width:"100%"}}>
                        <Typography variant="h3" fontWeight="bold">
                            Other Items:
                        </Typography>
                        <div style={{margin:" 20px", display:"flex", flexWrap:"wrap", columnGap:"1.5%", justifyContent:"space-between"}}>
                            {items.slice(0,3).map((item,i) => 
                                <ItemList item={item} key={`${i}`} />)}
                        </div>
                </div>
            </div>
        </div>
    )
}


export default ItemDetails;