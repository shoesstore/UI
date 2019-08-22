import React, { Component }                                                                  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormGroup } from 'reactstrap';


export default class FormResetPassword extends Component {

    state = {
        modal: false,
        nestedModel: false,
        closeAll: false
    };


    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };


    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    };


    render() {

        const { className }                    = this.props;
        const { modal, nestedModal, closeAll } = this.state;


        return (
            <Form row>
                <div onClick={ () => this.toggle() } >Forgotten your password?</div>
                <Modal isOpen={modal} toggle={ () => this.toggle() } className={className}>
                    <ModalHeader toggle={ () => this.toggle() }>
                        RESET PASSWORD
                            <FormGroup>
                                <center>
                                    <img className="brand-shoes-logo" src={require("../../image/header/brand.png")} alt="logo"/>
                                </center>
                            </FormGroup>
                    </ModalHeader>
                    <ModalBody>
                       Enter your email to receive instructions on how to reset your password.
                        <br/>
                        <FormGroup>
                            <Label for='exampleEmail' hidden>Email</Label>
                            <Input type='email' name='email' id='exampleEmail' placeholder='email'/>
                        </FormGroup>
                        <Modal isOpen={nestedModal} toggle={ () => this.toggleNested() } onClosed={closeAll ? this.toggle : undefined}>
                            <ModalHeader>Nested Modal title</ModalHeader>
                            <ModalBody>Check Your Email</ModalBody>
                        </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={ () => this.toggleNested() }>RESET</Button>
                    </ModalFooter>
                </Modal>
            </Form>
        );
    }
}
