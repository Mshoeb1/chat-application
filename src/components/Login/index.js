import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

import {Backdrop, CircularProgress} from "@mui/material"

import './index.css'

const  LoginForm = () => {
  const [showLogin, setLogin]= useState(false)
  const [data, setData] = useState({ name:"", email:"", password:"" })
  const [loading, setLoading] = useState(false)
  const [showSubmitError, setShowSubmit] = useState(false)
  const [errorMsg, setErrMsg] = useState("")
  
  const navigate = useNavigate()
  
  const onChangeCredential = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const loginSubmitForm = async event => {
    event.preventDefault()
    setLoading(true)
    try {
      const config = {
        headers : {
          "Content-type" : "application/json"
        }
      }

      const response = await axios.post(
        "http://localhost:3000/user/login/", data, config
      )

      localStorage.setItem("userData", JSON.stringify(response))
      setLoading(false)
      navigate("/")
    }
    catch (error) {
      setLoading(false)
      setShowSubmit(true)
      setErrMsg("Invalid username and password")
    }
    
    
    setLoading(false)
  }

  const registerSubmitForm = async event => {
    event.preventDefault()
    setLoading(true)
    try {
      const config = {
        headers : {
          "Content-type" : "application/json"
        }
      }

      const response = await axios.post(
        "http://localhost:3000/user/register/", data, config
      )

      localStorage.setItem("userData", JSON.stringify(response))
      setLoading(false)
      navigate("/")
    }

    catch (error) {
      console.log(error)
      setLoading(false)
      if(error.response.status === 405) {
        setShowSubmit(true)
        setErrMsg("User with this email Id already Exists")
      }

      if(error.response.status === 406){
        setShowSubmit(true)
        setErrMsg("Username already taken, please choose another one")
      }
    }
    setLoading(false)
  }

  const renderPasswordField = () => {
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          onChange={onChangeCredential}
        />
      </>
    )
  }

  const renderUsernameField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          NAME
        </label>
        <input
          type="text"
          id="username1"
          className="username-input-field"
          onChange={onChangeCredential}
        />
      </>
    )
  }

  const renderEmailField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          EMAIL
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          onChange={onChangeCredential}
        />
      </>
    )
  }

  const toggleRegister = () => {
    setLogin(true)
  }

  const toggleLogin = () => {
    setLogin(false)
  }

    return (
      <>
    
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}>
            <CircularProgress color="secondary" />
        </Backdrop>
      <div className="login-form-container">
        <img
          src="https://res.cloudinary.com/dwekbzmuw/image/upload/v1708092518/people-showing-up-from-phone-screen-flat-vector-illustration-men-women-holding-hands-standing-line-inviting-friends-join-online-service-earning-money-referral-system-loyalty-concept_74855-25246_vg4qwr.avif"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        {showLogin && <form className="form-container" onSubmit={loginSubmitForm}>
          <img
            src="https://res.cloudinary.com/dwekbzmuw/image/upload/v1708082642/live-chat-icon-0_eoelm1.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />

          <h1 className='login-heading'>Login to your Account</h1>
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <p className='register-check-para'>Don't have an Account ? {" "} <span className='link-span' onClick={toggleLogin}>Sign Up</span></p>
        </form>
       }

      {!showLogin && <form className="form-container" onSubmit={registerSubmitForm}>
          <img
            src="https://res.cloudinary.com/dwekbzmuw/image/upload/v1708082642/live-chat-icon-0_eoelm1.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <h1 className='login-heading'>Create your Account</h1>
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderEmailField()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <p className='register-check-para'>Already Have Account ? {" "} <span className='link-span' onClick={toggleRegister}>Login</span></p>
        </form>
       }
      </div>
      </>
    )
}

export default LoginForm
