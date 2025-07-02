import { useState } from 'react'
import './App.css'
import { ToastContainer,toast } from 'react-toastify';

function App() {
  const[email,setEmail]=useState("");
  const [password,setPassword]=useState("");
 const notifyLogin=()=>{
  toast("Login Successfully !!");
 }

 const notifyError=()=>{
  toast("Please enter correct email and password ");
 }
  function handleLogin(){
    if(email==="rahul@gmail.com" && password==="password"){
      notifyLogin();
    }else{
      notifyError();
    }
  }

  return (
    <div class="abc">
      <br />
     <h2>Login Page !!</h2>
     <br />
     <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
     <br /><br />
     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
     <br /><br />
     <button onClick={handleLogin}>Submit</button>
     <ToastContainer />
    </div>
  )
}

export default App
