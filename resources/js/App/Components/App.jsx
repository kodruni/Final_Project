import React from 'react';
import { Route, Switch } from "react-router-dom";
import Register from './Auth/Register.jsx';
import Login from './Auth/Login.jsx';
 
export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          token: null,
          logged_in: null
      }

    }
 

    getToken = () => {
      console.log(window.localStorage.getItem('token'));
      return window.localStorage.getItem('token');
     }

    onLoginSuccess = (token) => {
      this.setState({
          logged_in: true,
          token: token
      })
    }

    componentDidMount = () => {
      if (null === this.getToken()) {
          this.setState({
              logged_in: false,
              token: null
          })
      } else {

          fetch('/api/user', {
              headers: {
                  'Accept':       'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer '+this.getToken()
              }
          })
          .then(response => response.json())
          .then(data => {
              if (data.id) { // if user's id was in the response
                  this.setState({
                      logged_in: true,
                      token: this.getToken()
                  })
              } else {
                  this.setState({
                      logged_in: false,
                      token: null
                  })
              }                
          });     
      }
  }
    

    render() {
        return (
            <h1>You are signed in</h1>,
            <Switch>
              <Route exact path="/" render={() => <Register/>}></Route>
              <Route exact path="/login" render={() => <Login/>}></Route>
            </Switch>
        )
    }
}