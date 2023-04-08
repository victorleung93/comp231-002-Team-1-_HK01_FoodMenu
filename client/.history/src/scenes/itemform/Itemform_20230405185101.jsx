import React, { useState, useEffect } from 'react'
import axios from "axios";
import Resizer from 'react-image-file-resizer';

const Itemform = () =>{
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [display, setDisplay] = useState(null);
    const urlForServer = "http://localhost:3200/";
    const MAX_FILE_SIZE = 60 * 1024; // 60KB in bytes


    const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    const resizeFile = (file) => new Promise(resolve => {
        Resizer.imageFileResizer(file, 300, 300, 'JPEG', 100, 0,
        // uri => {
        //   resolve(uri);
        // }, 'base64', MAX_FILE_SIZE);

        (resizedBlob) => {
            let quality = 100;
            while (resizedBlob.size > MAX_FILE_SIZE && quality > 0) {
              quality -= 5;
              Resizer.imageFileResizer(
                file,
               300,300,
                file.type.split('/')[1], // output file type
                quality, // reduce the quality until the file size is below the limit
                0, // rotation
                (newBlob) => {
                  resizedBlob = newBlob;
                },
                'base64', MAX_FILE_SIZE);
            }})
           
    });

    const onChange = (e) => {
        setFile(e.target.files[0]);
        // let prevBlob = URL.createObjectURL(e.target.files[0]);
        // setPreview(prevBlob);
        const file = e.target.files[0];
        Resizer.imageFileResizer(
            file,
            300,
            300,
            'JPEG', // output file type
            100, // quality
            0, // rotation
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
    await axios.post(urlForServer + "upload", { file: b64file });
    fetchData();
    setPreview(null);
  };
 // FETCH THE FILE FROM MONGO DB, AND SAVE THE BIN64 STRING INTO STATE
 const fetchData = async () => {
    let res = await axios.get(urlForServer + "data");
    console.log(res.data);
    setDisplay(res.data);
  };


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App"  style={{width:"80%", margin:"80px auto"}}>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onChange} />
        <button type="submit">send data</button>
      </form>
      <hr />
      {/* DISPLAY FILE AS A PREVIEW */}
      <h1>file preview</h1>
      {preview && <img src={preview} alt="" />}
      <hr />
      {/* DISPLAY FILES */}
      <h1>display files</h1>
      {display &&
        display.map((el) => {
          return (
            <div key={el._id}>
              <hr />
              <img src={el.fileBin} alt="" />
            </div>
          );
        })}
    </div>
  );




        
    // const [formData, setFormData] = useState({
    //     // firstName: '',
    //     // lastName: '',
    //     // email: '',
    //     name:''
    //   });
    
    //   // Handle form submit
    //   const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://localhost:3200/menu', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify(formData),
    //         });
    //         if (response.ok) {
    //           // Handle success response
    //           console.log('Form data submitted successfully');
    //         } else {
    //           // Handle error response
    //           console.error('Form data submission failed');
    //         }
    //       } catch (error) {
    //         console.error('Error submitting form data', error);
    //       }
    //       console.log(formData);
    //     };
    //     // Do something with form data, e.g. send it to an API
        
      
   
    
    // //   // Handle form field changes
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevState) => ({ ...prevState, [name]: value }));
    //   };
    // return (
    //         <div className='form' style={{width:"80%", margin:"80px auto"}}>
    //             <h1>Add a new dish</h1>
    //             <form onSubmit={handleSubmit}>
    //                 {/* Form fields */}
    //                 <input
    //                     type="text"
    //                     name="name"
    //                     value={formData.name}
    //                     onChange={handleChange}
    //                     placeholder="Name"
    //                 /><br></br>
    //                 <div className="form-group">
    //                         <input type="file" />
    //                     </div>
    //                 {/* <input
    //                     type="text"
    //                     name="firstName"
    //                     value={formData.firstName}
    //                     onChange={handleChange}
    //                     placeholder="First Name"
    //                 /><br></br>
    //                 <input
    //                     type="text"
    //                     name="lastName"
    //                     value={formData.lastName}
    //                     onChange={handleChange}
    //                     placeholder="Last Name"
    //                 /><br></br>
    //                 <input
    //                     type="email"
    //                     name="email"
    //                     value={formData.email}
    //                     onChange={handleChange}
    //                     placeholder="Email"
    //                 /><br></br> */}
    //                 {/* Submit button */}
    //                 <button type="submit">Submit</button>
    //             </form>

    //         </div>





    // )
}


export default Itemform;