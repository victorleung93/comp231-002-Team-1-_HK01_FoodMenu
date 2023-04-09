import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
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

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

   function handleSubmit(e) {
    e.preventDefault();

    console.log(, password);

    console.log(formData.username,formData.password,formData.email);
    let user=await axios.post(urlForServer + "signup", {
      username: formData.username,
      password: formData.password,
      email: formData.email,
        
  
    });
    fetch("http://localhost:3200/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
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
    <div className="App"  style={{width:"80%", margin:"80px auto"}}>
     {success ? (
         <section>
             <h1>You are logged in!</h1>
             <br />
             <p>
                 <a href="#">Go to Home</a>
             </p>
         </section>
     ) : (
         <section>
             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
             <h1>Sign In</h1>
             <form onSubmit={handleSubmit}>
                 <label htmlFor="username">Username:</label>
                 <input
                     type="text"
                     id="username"
                     ref={userRef}
                     autoComplete="off"
                     onChange={(e) => setUser(e.target.value)}
                     value={user}
                     required
                 />

                 <label htmlFor="password">Password:</label>
                 <input
                     type="password"
                     id="password"
                     onChange={(e) => setPwd(e.target.value)}
                     value={pwd}
                     required
                 />
                 <button>Sign In</button>
             </form>
             <p>
                 Need an Account?<br />
                 <span className="line">
                     {/*put router link here*/}
                     <a href="/SignUp">Sign Up</a>
                 </span>
             </p>
         </section>
     )}
 </div>
  )

}




export default SignIn;
