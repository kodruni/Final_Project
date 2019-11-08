import React from 'react';
import { Route, Switch } from "react-router-dom";
import Register from './Auth/Register.jsx';
import Login from './Auth/Login.jsx';
import Navigation from './Layout/Navigation.jsx';
import { Link } from 'react-router-dom';
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          token: null,
          logged_in: null
      }
    }

    render() {
        return (
    
            <Switch>
                <Route exact path="/" render={() => 
                <>
                  <Navigation>
                    <h1>Home Page</h1>
                 </Navigation>
                </>
              }></Route>

              <Route exact path="/register" render={() =>            <Register/>}>                 
              </Route>
              <Route exact path="/login" render={() => 
                <Login/>}>                
              </Route>
              {/* <Route exact path="/">
                {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
              </Route> */}
            </Switch>
        )
    }
}