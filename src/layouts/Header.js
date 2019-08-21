import React, { Component }                                                                                from 'react';
import { Link }                                                                                            from "react-router-dom";
import { Col, Collapse, Input, InputGroup, InputGroupAddon, Nav, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap";
import                                                                                                          '../css/header/header.css';


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
                        <Collapse className="menu" isOpen={isOpen} navbar>
                            <Nav navbar>
                                <NavItem><NavLink href="#">MEN</NavLink></NavItem>
                                <NavItem><NavLink href="#">WOMEN</NavLink></NavItem>
                                <NavItem><NavLink href="#">COLLECTIONS</NavLink></NavItem>
                            </Nav>
                        </Collapse>
                    </Col>
                    <Col sm="4">
                        <div className="search-input">
                            <InputGroup style={{ width: 300 }}>
                                <InputGroupAddon addonType="prepend">
                                    <img className="search-icon" src={require("../image/header/search.png")} alt="search"/>
                                </InputGroupAddon>
                                <Input placeholder="Search" />
                            </InputGroup>
                        </div>
                    </Col>
                </Navbar>
            </div>
        );
    }
}
