import React from 'react';
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
    render() {
        return (
            <h1>You are signed in</h1>,
            <Register/>
        )
    }
}