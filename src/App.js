import React,           { Component }               from 'react';
import                  { BrowserRouter as Router } from "react-router-dom";
import RouterProtect                                from './routes';
import Topbar                                       from "./components/Topbar/Topbar";
import Header                                       from "./layouts/Header";
import Footer                                       from "./layouts/Footer";


export default class App extends Component {

   render() {
     return (
        <Router>
            <Topbar/>
            <Header/>
            <RouterProtect/>
            <p style={{ fontSize: 100, textAlign: "center" }}>Body</p>
            <Footer/>
        </Router>
     );
   }
}
