import React, { Component }              from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


export default class FormRegister extends Component {
    render() {
        return (
            <Form row>
                <FormGroup>
                    <center>
                        <img className="brand-shoes-logo" src={require("../../image/header/brand.png")} alt="logo"/>
                    </center>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail" hidden>Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email"/>
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label className="form-login" for="examplePassword" hidden>Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Password"/>
                </FormGroup>
                {' '}
                <FormGroup>
                    <FormGroup tag="fieldset">
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox"/>{' '}
                            Agree To Terms
                        </Label>
                    </FormGroup>
                </FormGroup>
                </FormGroup>
            </Form>
        );
    }
}
