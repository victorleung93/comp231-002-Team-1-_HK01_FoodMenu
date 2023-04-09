import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";

 const SignIn = () => {
  return (
    <div className="App"  style={{width:"80%", margin:"80px auto"}}>
        <form>
            <label>User Name: </label>
            <input type='text' id="userName"></input>
            <br></br>
            <br></br>
            <label>Password: </label>
            <input type='text' id="password"></input>
            <br></br>
            <br></br>
            <button>Sign In</button>

        </form>
    </div>
  )
}




export default SignIn;
