 import React from 'react';
 import { Link } from 'react-router-dom';
 import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
 import { Dialog } from 'react';
 //  import { Modal } from 'react-bootstrap';

 export default class Login extends React.Component {
    constructor(props) {
        super(props);
        
       this.state = {
           email: '',
           password: '',
           loginSuccess: '',
       }
    }
    handleEmailChange = (event) => {
      this.setState ({
        email: event.target.value,
      })
    }
    handlePasswordChange = (event) => {
      this.setState ({
        password: event.target.value,
      })  
    }
    
    componentDidMount() {
      let token = window.localStorage.getItem('_token');
      if(token !== undefined) {
        this.setState({
          loginSuccess: true,
        })
      }
    }

    handleFormSubmit = (event) => {
      event.preventDefault();

      fetch('/api/login', {
        method: 'POST',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    })
    .then(response => response.json())
    .then(data => {
    
        if (data.status === 'success') {
           window.localStorage.setItem('_token', data.success.token);
           this.setState({
             loginSuccess: true,
           });
           

        }
    })
   }

    render() {
        return (
          <Dialog>
            <Form action="" method="post" onSubmit={ this.handleFormSubmit }>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="text" name="email" 
                        id="email"
                       value={ this.state.email } 
                       onChange={ this.handleEmailChange } 
                 />
                 </FormGroup>
                 <FormGroup>
                 <Label for="password">Password</Label>
                 <Input type="password" name="password" 
                      value={ this.state.password } 
                     onChange={ this.handlePasswordChange }
                  />
                  </FormGroup>
                  <Button type="submit" value="Log in" color="danger">Log In</Button>
                </Form>
              </Dialog>
        )
     }
 }