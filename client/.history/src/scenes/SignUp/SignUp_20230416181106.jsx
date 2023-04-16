import React from 'react'
import {Component, useRef, useState, useEffect, useContext } from 'react';

import axios from "axios";
const urlForServer = "http://localhost:3200/";


 const SignUp = () => {
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        email:''
   
      });

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [cfmPassword, setCfmPassword] = useState("");
    // const [email, setEmail] = useState("");
 


    const onSubmit = async (e) => {
        e.preventDefault();
  
        

       

        console.log(formData.username,formData.password,formData.email);
        let user=await axios.post(urlForServer + "signup", {
          username: formData.username,
          password: formData.password,
          email: formData.email,
            
      
        });
        setUser(user.username);
           
        if(user.data.Status===0)
        {
            console.log("Already exist")
            alert("Username or Email Already exist");
        }else{
            console.log("Created")
            alert("Created");
            window.location.href = "./SignIn";
        }
      
      };

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };
  return (
    
   
    <div className="auth-wrapper"  style={{width:"80%", margin:"80px auto"}}>
      <div className="auth-inner">
        <form onSubmit={onSubmit}>
          <h3>Sign Up</h3>
        
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
       
              name='username'
              placeholder="Username"
              value={formData.username} 
              onChange={handleChange }
        
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
      
              name='password'
              value={formData.password} 
              onChange={handleChange }
              placeholder="Enter password"
           
            />
          </div>

        

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
          
              name='email'
              value={formData.email} 

              placeholder="Enter email"
              onChange={handleChange }
            />
          </div>

       

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  )

}




export default SignUp;
