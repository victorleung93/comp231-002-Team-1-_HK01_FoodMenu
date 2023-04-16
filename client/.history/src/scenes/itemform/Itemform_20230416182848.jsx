import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios";
import Select from 'react-select'
import Resizer from 'react-image-file-resizer';
import './Itemform.css'

const Itemform = () =>{
    const [file, setFile] = useState(null);  
    const [formData, setFormData] = useState({
        name:'',
        shortDescription:'',
        longDescription:'',
        price:'',
        category:'',
        available:'',
        image: ''
      });

    const [preview, setPreview] = useState(null);
    const [display, setDisplay] = useState(null);
    const token = window.localStorage.getItem("token");
    const [existingCategory, setExistingCategory] = useState("");
    const [ item, setItem ] = useState(null);
    const urlForServer = "http://localhost:3200/";
    const [ refId, setRefID ] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const Navigate = useNavigate();

 // FETCH THE FILE FROM MONGO DB, AND SAVE THE BIN64 STRING INTO STATE
 const fetchData = async () => {
    let res = await axios.get(urlForServer + "allData");
    console.log(res.data);
    setDisplay(res.data);
  };

    const resizeFile = (file) => new Promise(resolve => {
        Resizer.imageFileResizer(file, 300, 300, 'JPEG', 50, 0,
        uri => {
          resolve(uri);
        }, 'base64');
    });

    const onChange = (e) => {
        setFile(e.target.files[0]);
        // let prevBlob = URL.createObjectURL(e.target.files[0]);
        // setPreview(prevBlob);
        const file = e.target.files[0];
        Resizer.imageFileResizer(file,300,300,'JPEG', 50, 0, 
            (resizedBlob) => {
              setPreview(resizedBlob);
            },
            'base64' // output type
          );
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        let b64file = await resizeFile(file);
        console.log(b64file);
        await axios.post(urlForServer + "upload", {
          name: formData.name,
          shortDescription: formData.shortDescription,
          longDescription: formData.longDescription,
          price: formData.price,
          category: formData.category,
          available: formData.available,

          image: b64file,
        });
        fetchData();
        setPreview(null);
      };

      async function onUpdate (){
        
        if (!file) {
          
          await axios.patch(urlForServer + "data/"+refId, {
            name: formData.name,
            shortDescription: formData.shortDescription,
            longDescription: formData.longDescription,
            price: formData.price,
            category: formData.category,
            available: formData.available,

           
          });
          }else{
            let b64file = await resizeFile(file);
            await axios.patch(urlForServer + "data/"+refId, {
                name: formData.name,
                shortDescription: formData.shortDescription,
                longDescription: formData.longDescription,
                price: formData.price,
                category: formData.category,
                available: formData.available,
                image: b64file,
         
              });

          }
       
        console.log(refId)
     
   

    fetchData();
      };

  const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };

  useEffect(() => {
    fetchData();
  }, []);

  

  async function getItem(itemId) {
    // const items = await fetch(
    //   // "http://localhost:1337/api/items?populate=image",
   
    //   { method: "GET" }
    // );
    let  _id=itemId;
    console.log(_id) 
    let item = await axios.get(urlForServer + "data/"+_id);
    // const itemsJson = await items.json();
   setItem(item.data);
    console.log(item.data.name)
    setFormData({
    name:item.data.name,
    shortDescription:item.data.shortDescription,
    longDescription:item.data.longDescription,
    price:item.data.price,
    category:item.data.category,
    available:item.data.available,
    });

    setRefID(item.data._id)
    // setExistingCategory(item.data.category)
    // setFormData({
    //     // ...
    //     category: item.data.category,
    //     // ...
    //   });
  }
  const handleCategoryChange = (event) => {
    setFormData({ ...formData, category: event.target.value });
  };

  const handleAvailableChange = (event) => {
    setFormData({ ...formData, available: event.target.value });
  };


    const handleClick = (id) => {
        setIsEditing(true);
       let _id=id; 
       getItem(_id);
      console.log(`Button ${id} clicked`);

   
    };


    async function deleteItem(itemId) {
        // const items = await fetch(
        //   // "http://localhost:1337/api/items?populate=image",
       
        //   { method: "GET" }
        // );
        let  _id=itemId;
        console.log(_id) 
        let item = await axios.delete(urlForServer + "data/"+_id);
        // const itemsJson = await items.json();
       setItem(item.data);
        console.log(item.data.name)
        fetchData();
        
      }
    const handleDeleteClick = (id) => {
        setIsEditing(true);
       let _id=id; 
       deleteItem(_id);
      console.log(`Button ${id} clicked`);

   
    };

    const handleChangeClick = (id) => {
        setIsEditing(false);
        setFormData({
            name:'',
            shortDescription:'',
            longDescription:'',
            price:'',
            category:"newArrivals",
            available:"available",

            });


   
    };
  return (
    <div className="App"  style={{width:"80%", margin:"80px auto"}}>
        {token==="admin"?<div>
      <form onSubmit={isEditing ? onUpdate : onSubmit}>
      {/* <form onSubmit={onUpdate}>  */}

      {isEditing&&<button onClick={handleChangeClick}>Change to Create Item</button>}
      
      <h1>{isEditing ? "Editing" : "Creating"}</h1> 
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"/><br></br>
      <input type="text" name="shortDescription" value={formData.shortDescription} onChange={handleChange} placeholder="Short Description"/><br></br>
      <input type="text" name="longDescription" value={formData.longDescription} onChange={handleChange} placeholder="Long Description"/><br></br>
    
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price"/><br></br>
   
      <select name="category" value={formData.category} onChange={handleCategoryChange}>
        <option value='newArrivals'>newArrivals</option>
        <option value='bestSellers'>bestSellerss</option>
        <option value='topRated'>topRated</option>
      </select><br></br>
      <select name="available" value={formData.available} onChange={handleAvailableChange}>
        <option value='available'>Available</option>
        <option value='notAvailable'>Not Available</option>
      </select><br></br>
        <input type="file"   onChange={onChange} />
        {!isEditing&&<button type="submit">send data</button>}
        {isEditing&&<button  type="submit">Save</button>}
      </form>
      <hr />
      {/* DISPLAY FILE AS A PREVIEW */}
      <h1>file preview</h1>
      {preview && <img src={preview} alt="" />}
      <hr />
      {/* DISPLAY FILES */}
      <h1>display files</h1>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Short Description</th>
          <th>Long Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Available</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {display &&
        display.map((el) => {
          return (
            <tr key={el._id}>
                 <td>{el.name}</td>
            <td>{el.shortDescription}</td>
            <td>{el.longDescription}</td>
            <td>{el.price} CAD</td>
            <td>{el.category}</td>
            <td><img src={el.image} alt="" /></td>
            <td>{el.available}</td>
            <td><button onClick={() => handleClick(el._id)}>Edit</button></td>
            <td><button onClick={() => handleDeleteClick(el._id)}>Delete</button></td>
            </tr>
          );
        })}
        </tbody>
           </table>
           </div>:
           <div>
            <h1>No Premission</h1>
            <button onClick ={()=> Navigate(`/`)} >Back to Home</button>
            </div>}
    </div>
  );
    
}


export default Itemform;