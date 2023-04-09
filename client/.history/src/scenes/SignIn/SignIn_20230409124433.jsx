import React from 'react'
import {Component, useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import axios from "axios";
const urlForServer = "http://localhost:3200/";

 const SignIn = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    username:'',
    password:''


  });


  
    const handleSubmit= async (e) => {
    e.preventDefault();

    console.log(username, password);

    console.log(formData.username,formData.password);
        let user=await axios.post(urlForServer + "login", {
      username: formData.username,
      password: formData.password,
      email: formData.email,
        
  
    })
    setUsername(user.username);

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    // <div className="App" >
    //     <form>
    //         <label>User Name: </label>
    //         <input type='text' id="userName"></input>
    //         <br></br>
    //         <br></br>
    //         <label>Password: </label>
    //         <input type='text' id="password"></input>
    //         <br></br>
    //         <br></br>
    //         <button>Sign In</button>

    //     </form>
    // </div>
    <div className="App"  style={{width:"80%", margin:"80px auto"}}>
     <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
       
              name='username'
              placeholder="Username"
              value={formData.username} 
              onChange={handleChange }
            //   onChange={(e) => setUsername(e.target.value)}
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
            //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
 </div>
  )

}




export default SignIn;
