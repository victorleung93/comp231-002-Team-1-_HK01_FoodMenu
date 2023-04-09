
import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios";
import { setItems } from "../../state";
import { useSelector, useDispatch } from 'react-redux';

const OrderHistory = () => {
    const dispatch = useDispatch();
    const urlForServer = "http://localhost:3200/";
    async function getItems() {
        // const items = await fetch(
        //   // "http://localhost:1337/api/items?populate=image",
       
        //   { method: "GET" }
        // );
        let histories = await axios.get(urlForServer + "order");
        // const itemsJson = await items.json();
        dispatch(setItems(histories.data));
      }
    
      useEffect(() => {
        getItems();
      }, []);

  return (
    <div style={{width:"80%", margin:"80px auto"}}>

        <h1>Order History</h1>
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

    </div>
  )
}

export default OrderHistory;