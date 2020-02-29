import React,  { useState } from 'react';
import './App.css';

function Form() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState ();
  

      
      function handleSubmit(event) {
        event.preventDefault();
        
       fetch("http://localhost:8080/contactme", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
          body: JSON.stringify({firstName,lastName,email, message})
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }

      function handleFirstNameChange(event) {
        setFirstName( event.target.value );
      }
    
      function handleLastNameChange(event) {
        setLastName( event.target.value)
      }
    
      function handleEmailChange(event) {
        setEmail (event.target.value)
      }
    
      function handleMessageChange(event) {
        setMessage( event.target.value)
      }
    
                
        return (
            <form onSubmit={handleSubmit}>
               <input placeholder="First name" type="text"
               onChange={handleFirstNameChange} required/>

<input placeholder="Last name" type="text"
               onChange={handleLastNameChange}required/>

<input placeholder="email" type="email"
               onChange={handleEmailChange}required/>

<input placeholder="Write me a message" type="text"
               onChange={handleMessageChange}/>

<input type="submit"/>
            </form>
        )
    }

export default Form; 
