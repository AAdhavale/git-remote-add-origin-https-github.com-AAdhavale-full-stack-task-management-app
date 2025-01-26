import React, { useState } from 'react'
import'./LogingPopup.css'

const LogingPopup = ({setShowLogin}) => {

  const [currState , setCurrState] = useState("Sign Up")

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <p onClick={() => setShowLogin(false) }>x</p>
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? <></> : <input type='text' placeholder='your name' required className='input'/> } 
          
          <input type='email' placeholder='your email' required className='input'/>
          <input type='password' placeholder='Password' required className='input'/>
        </div>

        <button>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type= "checkbox" required/>
          <p>by contonuing , i agree to the terms of use and privacy policy</p>

        </div>
        {currState==="Login" ? 
        <p>Create a newe account ? <span onClick={() => setCurrState("Sign Up")}>Click here</span> </p> :
        <p>Alreadey have an account ? <span onClick={() => setCurrState("Login")} >Login here</span></p>
        }
      
        
      </form>
      
    </div>
  )
}

export default LogingPopup
