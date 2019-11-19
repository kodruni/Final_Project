 import React from 'react';
 import { connect } from 'react-redux';
 import { Redirect } from 'react-router'
 import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);

       this.state = {
           email: '',
           password: '',
           token: null, 
           loginErrors: []
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
      if(token !== null) {
       this.props.loginFunction();
       console.log("Component did mount", this.props.loginFunction())
      }
      } 

    handleLogout = () => {
      if(this.props.loginStatus === "Logout" ) {
        console.log("Logout being called")
        console.log("Logout",this.props.loginStatus )
        window.localStorage.clear();
        this.setState({
          token: null,
        })
       this.props.logoutFunction();
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
      console.log("DATA", data)
      console.log("DATA", data.status )
      console.log("DATA", this.props.loginStatus )
      console.log("DATA", this.state.token  )
        if (data.status === 'success' && this.props.loginStatus === "Login" && this.state.token === null) {
           window.localStorage.setItem('_token', data.success.token);
           this.props.loginFunction();
           this.setState({
             token: data.success.token,
           });

           if(data.role_id === 1) {
             console.log('im admin');
  
           } else if(data.role_id === 2) {
            console.log('im normal user');
           }
        }
    })
    .catch(e => {
      this.setState({
        loginErrors: e
      })
    })
   }
    render() {
      console.log("Render, token", this.state.token)
      console.log("Render", this.props.loginStatus)
      console.log("Render", this.props.loginSuccess)
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
              <Button type="submit" value="Login" onClick={this.handleLogout} color="danger">{this.props.loginStatus}</Button>
           </Form>
           </>
        )
     }
 }

//==========
// REDUX
//==========
// What state be used
const mapStateToProps = state => {
   return {
     loginStatus: state.loginStatus,
     loginSuccess: state.loginSuccess,
   };
 }

// What Actions be used
 const mapDispatchToProps = dispatch => {
   return {
    loginFunction : () => dispatch({type: "login"}),
    logoutFunction : () => dispatch({type: "logout"})
  }
}
//what is connect?
 export default connect(mapStateToProps, mapDispatchToProps)(Login);