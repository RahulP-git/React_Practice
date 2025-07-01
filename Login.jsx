import React, { useState } from "react";


const LoginPage=()=>{
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");

  function handleLogin(){
    if(email==="rahul@gmail.com" && password==="password"){
        alert("Login Successfully !!")
    }else{
        alert("Enter valide email and password");
    }
  }

    return (<div>
    <h1>Login Page</h1>
    <input type="text" 
     placeholder="Enter Your Email" 
     value={email}
     onChange={(e)=>setEmail(e.target.value )}/>
     <br /><br />
     <input type="text" 
     placeholder="Enter Your Password" 
     value={password}
     onChange={(e)=>setPassword(e.target.value )}/>
     <br /><br />
     <button onClick={handleLogin}>Submit</button>
    </div>)
}
export default LoginPage