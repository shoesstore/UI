import React,           { Component }               from 'react';
import                  { BrowserRouter as Router } from "react-router-dom";
import RouterProtect                                from './routes';
import Topbar                                       from "./components/Topbar/Topbar";


export default class App extends Component {

   render() {
     return (
        <Router>
            <Topbar/>
            <RouterProtect/>
        </Router>
     );
   }
}
