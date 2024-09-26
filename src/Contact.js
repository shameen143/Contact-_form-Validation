import React, { useState } from 'react';
import './contact.css'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
    
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.name) {
        validationErrors.name = "Name is required"
    }

    if(!formData.email) {
        validationErrors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "Email is not valid"
    }
    if(!formData.message){
      validationErrors.message='Message is required'
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
         
        alert("Form Submitted successfully");
        setFormData({
          name:'',
          email:'',
          message:''
        });
    }else{
      console.log('Form submission failed due to validation errors.');
    }

  }

  return (
    <div className="contact-container">
        <div className='contact-form'>
            <div className='title'>
                <h1>Contact Us</h1>
            </div>
    <form onSubmit={handleSubmit} className='form-input'>
      <div>
      
        <input
          type="text"
          name="name"
          placeholder='Name'  
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.name && <span>{errors.name}</span>}  
      </div>
      <div>
       
        <input
          type="email"
          name="email"
          placeholder='Email'
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.email && <span>{errors.email}</span>}  
      </div>
      <div>
      
        <textarea
          name="message"
          placeholder='Message'
          cols='20'
          rows='10'
          value={formData.message}
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.message && <span>{errors.message}</span>}  
      </div>
      
      <input type="submit" value='send'></input>
    </form>
    <img src='img.png' alt='img'></img>
    </div>
    </div>
  );
};

export default Contact;