import React from 'react'
import {Component, useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import axios from "axios";
const urlForServer = "http://localhost:3200/";

 const SignUp = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cfmPassword, setCfmPassword] = useState("");
    const [email, setEmail] = useState("");
 


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
          image: b64file,
        });
        // fetchData();
        // setPreview(null);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

      console.log(username,  password,email);
      fetch("http://localhost:3200/signup", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username,
          password,
          email
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }


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
   
    <div className="auth-wrapper"  style={{width:"80%", margin:"80px auto"}}>
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
        
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              name='na'
              placeholder="First name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password again"
              onChange={(e) => setCfmPassword(e.target.value)}
            />
          </div> */}

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
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
