import React, { useState } from 'react';
import "../../App.css"

const  Form = () =>{
    const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // Simple regex validation
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError('Invalid email address');
    } else {
      // Perform your email submission logic here
      console.log('Email submitted:', email);
      setError('');
    }
  };
  return (
    <div className='main'>
        <h3>Contact us</h3>
        <h1>Make an Appointment</h1>
        <h4>Book Appointment</h4>
        <form className='content-main' onSubmit={handleSubmit}>
            <div className='content-1'>
                <label className='label'>Name *</label>
                <input
                    placeholder='Full Name *'
                    name="name"
                    type='text'
                    required
                    className='input'
                />
                 <label className='label'>Email Address *</label>
                <input 
                    placeholder='Email *'
                    name="email"
                    type='text'
                    required
                     className='input'
                     onChange={(e) => setEmail(e.target.value)}
                />
                {error && <div className="error">{error}</div>}
             </div>
             <div className='content-2'>
             <label className='label'>Department *</label>
                <select
                    name="name"
                    type='text'
                    required
                    className='select-input'
                >
                    <option disabled>Please Select</option>
                    <option value="">User</option>
                    <option value="">Admin</option>
                    <option value="">creater</option>
                </select>
                <label className='label'>Time *</label>
                <select
                    name="name"
                    type='text'
                    required
                     className='select-input'
                >
                    <option value="">4:00 Available</option>
                    <option value="">5:00 Available</option>
                    <option value="">6:00 Available</option>
                    <option value="">6:00 Available</option>
                    <option value="">7:00 Available</option>
                </select>
             </div>
             <textarea placeholder='Message' className='text-box'>
                 
             </textarea>

             <button className='button' type='submit'>
                Book Appointment
             </button>
        </form>
    </div>
  )
}

export default Form