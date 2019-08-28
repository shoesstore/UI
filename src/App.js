import React,           { Component }               from 'react';
import                  {BrowserRouter as Router}   from "react-router-dom";
import RouterProtect                                from './routes';
import Spinner                                      from "./components/Spinner/Spinner";
import Topbar                                       from "./layouts/Topbar/Topbar";
import Header                                       from "./layouts/Header/Header";
import Footer                                       from "./layouts/Footer/Footer";
import                                                   './App.css';
import UpToTop from "./components/Button/ScrollUpButton";


export default class App extends Component {

    state = {
        loading: true
    };


    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1700);
    };


    componentWillUnmount(){
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    };


    render() {
        return (
            <Router>
                {
                    this.state.loading
                    ?
                        <Spinner/>
                    :
                        <div>
                            <div className="z-index">
                                <Topbar/>
                                <Header/>
                            </div>
                            <RouterProtect/>
                            <Footer/>
                            <UpToTop/>
                        </div>
                }
            </Router>
        );
    }
}
