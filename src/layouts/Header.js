import React, { Component }                                               from 'react';
import { Link }                                                           from "react-router-dom";
import { Col, Input, Navbar, NavbarToggler }                              from "reactstrap";
import                                                                         '../css/header/header.css';


export default class Header extends Component {

    state = {
        isOpen: false
    };


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    render() {

        const { isOpen } = this.state;

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Col xs="6" sm="4">
                        <Link to="/">
                            <img className="brand-shoes" src={require("../image/header/brand.png")} alt="logo" />
                        </Link>
                    </Col>
                    <Col xs="6" sm="4">
                        <NavbarToggler onClick={ () => this.toggle() } />
                        <div className="menu" isOpen={isOpen}>
                            <Link to="#">MEN</Link>
                            <Link to="#">WOMEN</Link>
                            <Link to="/collections">COLLECTIONS</Link>
                            <Link to="#">CONTACT</Link>
                        </div>
                    </Col>
                    <Col sm="4">
                        <div className="input-g">
                            <div className="icon-search">
                                <img src={require("../image/header/search.png")} alt="search"/>
                            </div>
                            <div className="cell-input">
                                <Input placeholder="Search" />
                            </div>
                        </div>
                    </Col>
                </Navbar>
            </div>
        );
    }
}
