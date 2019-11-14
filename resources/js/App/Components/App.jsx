import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from './Auth/Register.jsx';
import Login from './Auth/Login.jsx';
import NotFoundPage from './Layout/NotFoundPage.jsx';
import HomePage from './Pages/HomePage.jsx';


export default class App extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                 <Route exact path="/app/register" component={Register}/>           
               <Route exact path="/app/login" component={Login} />                 
              {/* <Route exact path="/app/login" component={Login} /> */}
              <Route path="*" component={NotFoundPage} />
            </Switch>
            </BrowserRouter>
        )
    }
}