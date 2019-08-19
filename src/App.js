import React,           { Component }               from 'react';
import                  { BrowserRouter as Router } from "react-router-dom";
import RouterProtect                                from './routes';


export default class App extends Component {

   render() {
     return (
        <Router>
            <RouterProtect/>
        </Router>
     );
   }
}
