import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Box, Typography, Tab, Tabs, useMediaQuery} from "@mui/material";
import ItemList from "../../components/itemList";
import { setItems } from "../../state";
import axios from "axios";



const ShoppingList = ( ) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
    const isNonMobile = useMediaQuery("(min-width:600px");
    const urlForServer = "http://localhost:3200/";

    const handleChange = (event, newValue) => {
        setValue(newValue);  
    };

    // const fetchData = async () => {
    //   let res = await axios.get(urlForServer + "data");
    //   console.log(res.data);
    //   setDisplay(res.data);
    // };
  
    async function getItems() {
        // const items = await fetch(
        //   // "http://localhost:1337/api/items?populate=image",
       
        //   { method: "GET" }
        // );
        let items = await axios.get(urlForServer + "data");
        // const itemsJson = await items.json();
        dispatch(setItems(itemsJson.data));
      }
    
      useEffect(() => {
        getItems();
      }, []);

    const topRateditems = items.filter(
      (item) => item.attributes.category === "topRated"
    );
    const bestSellersitems = items.filter(
      (item) => item.attributes.category === "bestSellers"
    );
    const newArrivalsitems = items.filter(
      (item) => item.attributes.category === "newArrivals"
    );

    return (
      <Box width="80%" margin="80px auto">
        <Typography variant="h3" textAlign="center">
          Our Featured <b>Products</b>
        </Typography>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            sx: { display: isNonMobile ? "block" : "none" },
          }}
          sx={{
            m: "25px",
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}
        >
          <Tab label="ALL" value="all" />
          <Tab label="Top Rated" value="topRated" />
          <Tab label="Best Sellers" value="bestSellers" />
          <Tab label="New Arrivals" value="newArrivals" />
        </Tabs>
        <Box
          margin="0 auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, 350px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="5%"
        >
            {value === "all" && items.map((item) => 
                <ItemList item={item} key={`${item.name}-${item.id}`} />
                )}
            {value === "topRated" && topRateditems.map((item) => 
                <ItemList item={item} key={`${item.name}-${item.id}`} />)}
            {value === "bestSellers" && bestSellersitems.map((item) => 
                <ItemList item={item} key={`${item.name}-${item.id}`} />)} 
            {value === "newArrivals" && newArrivalsitems.map((item)=>
                <ItemList item={item} key ={`${item.name}-${item.id}`}/>)}
        </Box>
            </Box>
    );
};

export default ShoppingList;