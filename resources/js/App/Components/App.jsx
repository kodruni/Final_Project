import React from 'react';
import { Route, Switch } from "react-router-dom";
import Register from './Auth/Register.jsx';
import Login from './Auth/Login.jsx';
import Navigation from './Layout/Navigation.jsx';
import NotFoundPage from './Layout/NotFoundPage.jsx';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
            data: ""
     } 
     this.parentCallback = this.parentCallback.bind(this);
     
    }

     parentCallback(value) {
         console.log(value)
         
        

   }

    render() {
        return (
    
            <Switch>
                <Route exact path="/" render={() => 
                <>
                  <Navigation />
                            
                </>
              }></Route>

              <Route exact path="/app/register" component={Register}/>                 
               <Route exact path="/app/login" component={() => <Login childCallback={this.parentCallback} />} />                 
              {/* <Route exact path="/app/login" component={Login} /> */}

              <Route path="*" component={NotFoundPage} />

            </Switch>
        )
    }
}