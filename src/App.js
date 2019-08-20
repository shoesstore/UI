import React,           { Component }               from 'react';
import                  { BrowserRouter as Router } from "react-router-dom";
import RouterProtect                                from './routes';
import Topbar                                       from "./components/Topbar/Topbar";
import Header                                       from "./layouts/Header";
import Footer                                       from "./layouts/Footer";

import { Spinner }                                  from "reactstrap";
import './css/body/body.css';

import FirstButton from "./components/Buttons/FirstButton";
import SecondButton from "./components/Buttons/SecondButton";


export default class App extends Component {

   render() {
     return (
        <Router>
            <Topbar/>
            <Header/>
            <RouterProtect/>

                <p style={{ fontSize: 100, textAlign: "center" }}>B <Spinner className="spinner" color="success"/>dy</p>

            <FirstButton/>
            <SecondButton/>

            <Footer/>
        </Router>
     );
   }
}
