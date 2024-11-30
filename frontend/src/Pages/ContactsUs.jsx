import React from 'react'
import './About.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";

function ContactsUs() {
  return (
    <>
   
    <div className='container mt-3 mb-2 '>
      <h2>Get In Touch With Us...</h2>
    <div className='container d-flex justify-content-center align-items-center p-2 contact'>
     <div className='col align-items-center justify-content-center' >
     <div className=''>
     <FaLocationDot style={{fontSize:'2rem'}}/>
     <div className='d-inline-block ms-2'>Lorem ipsum dolor sit, amet </div> 
     </div>
     <div className='mt-3 p-1 '>
     <FaPhoneAlt style={{fontSize:'2rem'}}/>
     <div className='d-inline-block ms-2'>Lorem ipsum dolor sit, amet </div> 
      </div>
     <div className='mt-3 p-1'>
     <MdEmail style={{fontSize:'2rem'}}/>
     <div className='d-inline-block ms-2'>Lorem ipsum dolor sit, amet </div> 
     </div>
     <div className='mt-3 p-1'>
     <FaGlobeAmericas style={{fontSize:'2rem'}}/>
     <div className='d-inline-block ms-2'>Lorem ipsum dolor sit, amet </div> 
     </div>
     </div>
     <div className='col'>
       <div className='mt-2 p-1 '>
        <input type="text" className='form-control'/>
       </div>
       <div className='mt-2 p-1'>
        <input type="text" className='form-control'/>
       </div>
       <div className='mt-2 p-1'>
        <input type="text" className='form-control'/>
       </div>
       <div className='mt-2 p-1'>
        <textarea name="" id="" className='form-control'></textarea>
       </div>
       <div className='mt-2 p-1'>
        <input type="submit" className='form-control'/>
       </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default ContactsUs