import React from 'react'
import login from '../assets/images/login.png'
import { Link } from 'react-router-dom'
import './Login.css'

function Register() {
  return (
    <div className='container mt-2 mb-3 d-flex justify-content-center align-items-center p-2'>
    <div className=' justify-content-center align-items-center p-2 d-flex register mt-3 mb-3'>
    <div className='col p-1 ms-3 colmn2'>
   
   <div  className='mt-2'>
      <input type="text" 
      placeholder='Enter Your Email Address' className='form-control'/>
   </div>
   <div className='mt-2'>
      <input type="text" 
      placeholder='Enter Your Password' className='form-control'/>
   </div>
   <div className='mt-2'>
      <input type="Submit" className='form-control' />
   </div>
   <div style={{textAlign:'center'}}>
   <p className='mt-2'>Forgot Password?</p>
      <p>Already have an account? <span className=''><Link  to={'/log-in'}>Login</Link></span> </p>
   </div>
   </div>
    <div className='col p-1 colmn1'>
     <img src={login} alt="" height={'400px'} width={'350px'} />
    </div>
   
    </div>
   </div>
  )
}

export default Register