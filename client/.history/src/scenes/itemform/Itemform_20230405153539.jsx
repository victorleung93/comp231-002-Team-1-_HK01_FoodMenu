import React, { useState } from 'react'

const Itemform = () =>{
    const [formData, setFormData] = useState({
        // firstName: '',
        // lastName: '',
        // email: '',
        name:''
      });
    
      // Handle form submit
      const handleSubmit = (e) => {
        e.preventDefault();
        try {
    const response = await fetch('http://localhost:3000/menu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      // Handle success response
      console.log('Form data submitted successfully');
    } else {
      // Handle error response
      console.error('Form data submission failed');
    }
  } catch (error) {
    console.error('Error submitting form data', error);
  }
};
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
                <form onSubmit={handleSubmit}>
                    {/* Form fields */}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    /><br></br>
                    {/* <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    /><br></br>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    /><br></br>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    /><br></br> */}
                    {/* Submit button */}
                    <button type="submit">Submit</button>
                </form>

            </div>





    )
}


export default Itemform;