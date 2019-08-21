import React, { Component }                                                    from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Navbar, NavLink } from "reactstrap";
import                                                                              '../css/topbar/topbar.css';


export default class Topbar extends Component {

    state = {
        modal: false
    };

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    render() {

        const { className } = this.props;
        const { modal } = this.state;


        return (
            <div>
                <Navbar color="light" light expand="md">
                    <div className="topbar">
                        <div>
                            <div>
                                <NavLink onClick={() => this.toggle()}>Login</NavLink>
                            </div>
                            <Modal isOpen={modal} toggle={ () => this.toggle() } className={className}>
                                <ModalHeader toggle={ () => this.toggle() }>Login</ModalHeader>
                                <ModalBody>
                                    Hello
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={ () => this.toggle() }>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={ () => this.toggle() }>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>

                        <div>
                            <div>
                                <NavLink onClick={() => this.toggle()}>Register</NavLink>
                            </div>
                            <Modal isOpen={modal} toggle={ () => this.toggle() } className={className}>
                                <ModalHeader toggle={ () => this.toggle() }>Register</ModalHeader>
                                <ModalBody>
                                    Hello
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={ () => this.toggle() }>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={ () => this.toggle() }>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                </Navbar>
            </div>
        );
    }
}
