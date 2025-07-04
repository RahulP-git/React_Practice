import React, { useState,useEffect } from "react";
import { ToastContainer,toast } from "react-toastify";
import "./index.css"
import "./App.css"

const LoginPage=()=>{
  const notify = () => toast("Refresh ..!");
  const notify1=()=>toast("Please Login");
  const notify2=()=>toast("Please Enter Correct Email And Password");
  const notify3=()=>toast("This function is not available currently");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLogin,setLogin]=useState(false)

   useEffect(() => {
    notify1();
  }, []);

  useEffect(() => {
    if (isLogin) {
     
    notify3();
    }
  }, [isLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "rahul@gmail.com" && password === "password") {
      notify1();
      setIsLoggedIn(true);
    } else {
      notify2();
    }
  };

  const handleForgotPassword = () => {
   notify3();
  };
return (
<div class="abc">
  <button onClick={notify}>Refresh</button>
<h2>Login Page</h2>
<br /><br />
<input type="text" value={email} onChange={(e)=>e.target.value} placeholder="Enter Email" />
<br /><br />
<input type="text" value={password} onChange={(e)=>e.target.value} placeholder="Enter Password" />
<br /><br />
 
<button onClick={handleSubmit}>Login</button>
<br /><br />
<button onClick={handleForgotPassword}>Forgot Password</button>
<ToastContainer/> 
</div>)
}
export default LoginPage;