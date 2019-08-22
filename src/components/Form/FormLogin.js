import React, { Component }                from 'react';
import { Form, FormGroup, Input, Label }   from "reactstrap";
import { NavLink }                         from 'react-router-dom'
import FormResetPassword                   from "./FormResetPassword";


export default class FormLogin extends Component {
    render() {
        return (
            <Form row>
                <FormGroup>
                    <center>
                        <img className="brand-shoes-logo" src={require("../../image/header/brand.png")} alt="logo"/>
                        <div>
                            <p className="view-topbar">YOUR ACCOUNT FOR EVERYTHING NIKE</p>

                        </div>
                    </center>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail" hidden>Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email"/>
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="examplePassword" hidden>Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Password"/>
                </FormGroup>
                {' '}
                <FormGroup>
                    <FormGroup tag="fieldset">
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox"/>{' '}
                                Keep me logged in
                            </Label>
                            <NavLink className="login-option" >
                                <FormResetPassword/>
                            </NavLink>
                        </FormGroup>
                    </FormGroup>
                </FormGroup>
            </Form>
        );
    }
}
