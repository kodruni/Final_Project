import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './../Layout/Navigation.jsx';
import { Link } from 'react-router-dom';
export default class Homepage extends React.Component {
   constructor(props) {
       super(props);

   }
   render() {
       return (
         <>
           <Navigation />
         <h1>This is a homepage</h1>
  
         </>
       )
    }
}