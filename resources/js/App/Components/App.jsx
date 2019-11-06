import React from 'react';
import { Route, Switch } from "react-router-dom";
import Register from './Auth/Register.jsx';
import Login from './Auth/Login.jsx';
 
export default class App extends React.Component {
    constructor(props) {
        super(props);

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