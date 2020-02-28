import React from 'react';
import './App.css';

function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName,lastName,email,message);
    let url = "http://localhost:8000/login"
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({firstName,lastName,email, message})
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

class Form extends React.Component {

    state= {
        firstName: "",
        lastName:"",
        email:"",
        message:"",
    }
    render(){
        return (
            <form>
               <input placeholder="First name" type="text"
               value ={this.state.firstName} 
               onChange={event =>this.setState({firstName: event.target.value})} required/>

<input placeholder="Last name" type="text"
               value ={this.state.lirstName} 
               onChange={event =>this.setState({lastName: event.target.value})} required/>

<input placeholder="email" type="email"
               value ={this.state.email} 
               onChange={event =>this.setState({email: event.target.value})}required/>

<input placeholder="Write me a message" type="text"
               value ={this.state.message} 
               onChange={event =>this.setState({message: event.target.value})}/>

<input type="submit" value="Submit" onSubmit={handleSubmit}/>
            </form>
        )
    }
}
export default Form; 
