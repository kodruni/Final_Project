import React from 'react';
import { Route, Switch } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Navigation from './Layout/Navigation.jsx';
import Register from './Auth/Register.jsx';
import Login from './Auth/Login.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          token: null,
          logged_in: null
      }

    }
 
    render() {
        const divStyle = {
            color: 'silver',
            backgroundImage: 'url('+ '/images/background.jpg' +')',
          };
        return (
            <div style={divStyle}>
                <Switch>
                    <Route exact path="/" render={() => 
                        <>
                         <Navigation/>
                         <Main/>
                         <Footer/>
                        </>
                    }>
                    </Route>
                    <Route exact path="/register" render={() => <Register/>}></Route>
                    <Route exact path="/login" render={() => <Login/>}></Route>
                </Switch>
            </div>
        )
    }
}