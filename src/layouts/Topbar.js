import React, { Component }                                             from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, NavLink }          from "reactstrap";
import FormRegister                                                     from "../components/Form/FormRegister";
import FormLogin                                                        from "../components/Form/FormLogin";
import { ButtonShoesStore }                                             from '../ui';
import                                                                       '../css/topbar/topbar.css';
import {Link} from "react-router-dom";


export default class Topbar extends Component {

    state = {
        modalOne: false,
        modalTwo: false
    };


    toggleOne() {
        this.setState({
            modalOne: !this.state.modalOne
        })
    }

    toggleTwo() {
        this.setState({
            modalTwo: !this.state.modalTwo
        })
    }

    render() {

        const { modalOne, modalTwo } = this.state;

        return (
            <div>
                <div className="topbar">
                    <div>
                        <Link to="/cart">
                            <img style={{ height: 30, width: 30, marginRight: 15, marginTop: 3 }} src={require('../image/cart/icon-cart.jpg')}/>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <NavLink onClick={ () => this.toggleOne() }>Login</NavLink>
                        </div>
                        <Modal isOpen={modalOne} toggle={ () => this.toggleOne() }>
                            <ModalHeader toggle={ () => this.toggleOne() }>Login</ModalHeader>
                            <ModalBody>
                                <FormLogin/>
                            </ModalBody>
                            <ModalFooter>
                                <ButtonShoesStore
                                    color="primary"
                                    onClick={ () => this.toggleOne() }
                                >
                                    Login
                                </ButtonShoesStore>
                                <ButtonShoesStore
                                    color="secondary"
                                    onClick={ () => this.toggleOne() }
                                >
                                    Cancel
                                </ButtonShoesStore>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div>
                        <div>
                            <NavLink onClick={() => this.toggleTwo()}>Register</NavLink>
                        </div>
                        <Modal isOpen={modalTwo} toggle={ () => this.toggleTwo() }>
                            <ModalHeader toggle={ () => this.toggleTwo() }>Register</ModalHeader>
                            <ModalBody>
                                <FormRegister/>
                            </ModalBody>
                            <ModalFooter>
                                <ButtonShoesStore
                                    color="primary"
                                    onClick={ () => this.toggleOne() }
                                >
                                    Register
                                </ButtonShoesStore>
                                <ButtonShoesStore
                                    color="secondary"
                                    onClick={ () => this.toggleOne() }
                                >
                                    Cancel
                                </ButtonShoesStore>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}
