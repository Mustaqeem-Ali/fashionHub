import React from 'react'
import './CSS/LoginSignUp.css'
import { useState } from 'react'

const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const login = async ()=>{
    console.log("Login Function executed",formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/"); 
    }
    else{
      alert(responseData.error)
    }
  }
  const signup = async ()=>{
    console.log(" Function executed",formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/"); 
    }
    else{
      alert(responseData.error)
    }
  }
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-feilds">
          {state === "Sign Up"?<input type="text" placeholder='Your Name' name='username' value={formData.username} onChange={changeHandler}/> : <></>}
          <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Your Email' />
          <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='password' />
        </div>
        <button onClick={()=>{state === "Login"?login():signup()}}>Continue</button>

        {state === "Sign Up" ? 
        <p className="loginsignup-login">Already have an account? <span  onClick={()=>{setState("Login")}}>Login</span></p> : 
        <p className="loginsignup-login">Create an Account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree with the terms and Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp