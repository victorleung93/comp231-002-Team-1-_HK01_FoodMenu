
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
        let item = await axios.get(urlForServer + "data/"+itemId);
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
        
        // const itemsJson = await items.json();
        // const idToRemove = itemId;
        // const randomItems = itemsJson.data.sort(() => Math.random() - 0.5);
        // const filteredItems = randomItems.filter((item) => item._id != idToRemove);
        // setItems(filteredItems);
    //   }
      
    
    useEffect(() =>{
        getItem();
        // getItems();
    },[itemId]);

    return (
        <div style={{width:"80%", margin:"80px auto"}}>
            <h1>ItemDetails</h1>
           
        </div>
    )
}


export default ItemDetails;