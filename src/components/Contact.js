import React, { useState } from 'react';

export default function Contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or API call with form data
    // You can use libraries like Axios to send the data to your server

    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='form--div'>
      
    <form onSubmit={handleSubmit}>
    <h1>Contact</h1>
      <div className='name--email'>
        <input type="text" id="name" value={name} onChange={handleNameChange} placeholder='Name'/>
        
        <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder='Email'/>
      </div>

      <div>
        <textarea id="message" value={message} onChange={handleMessageChange}  />
      </div>
      <button type="submit" id='submit'>Submit</button>
    </form>


    </div>
  );
    
}