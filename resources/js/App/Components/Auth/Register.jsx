import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
 
export default class Register extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
      name : '',
      email: '',
      password: '',
      c_password: '',
    }
  }

    handleNameChange = (event) => {
      this.setState({
        name: event.target.value
      });
    }
    handleEmailChange = (event) => {
      this.setState({
          email: event.target.value
      });
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }
  
    handlePasswordChangeConformation = (event) => {
      this.setState({
        c_password: event.target.value
      });

      if (this.state.password !== this.state.c_password) {
        console.log("Passwords don't match");
    }
  }
      
  handleFormSubmit = (event) => {
    event.preventDefault();
  
    

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            c_password: this.state.c_password

        })
    })
    .then(response => response.json())
    .then(data => {
  
    })
}
    render() {
        return (
          <>
           <h1>Please Register</h1>
           <form action="" method="post" onSubmit={this.handleFormSubmit}>
             <label htmlFor="register_name">Name</label>
             <input type="text" name="register_name" value={this.state.name}
              onChange={this.handleNameChange}  placeholder="Enter Your Name" id="register_name"/>
             <br/>
             <label htmlFor="register_name">Email</label>
             <input type="email" name="register_email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Your Email" id="register_email"/>
             <br/>
             <label htmlFor="register_password">Password</label>
             <input type="password" name="register_password" value={this.password} onChange={this.handlePasswordChange} placeholder="Enter Your Password" id="register_password"/>
             <br/>
             <label htmlFor="register_password_confirm">Confirm Password</label>
             <input type="password" name="register_password_confirmation" value={this.passwordConformation} onChange={this.handlePasswordChangeConformation}  placeholder="Confirm Your Password" id="register_password_confirmation"/>
             <br/>
       
               {/* Need to add on change - if submit success */}
               {/* Is not sended to database */}
               <Link to="/login">Login</Link> 
                 <Button type="submit" value="Submit" color="danger">Submit</Button>
             
           </form>
          </>
 
        )
    }
}