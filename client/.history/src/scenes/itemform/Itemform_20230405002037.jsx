import React, { useState } from 'react'

const Itemform = () =>{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
      });
    
      // Handle form submit
      const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with form data, e.g. send it to an API
        console.log(formData);
      };
    
      // Handle form field changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };
    return (
            <div className='form' style={{width:"80%", margin:"80px auto"}}>
                <h1>Add a new dish</h1>


            </div>





    )
}


export default Itemform;