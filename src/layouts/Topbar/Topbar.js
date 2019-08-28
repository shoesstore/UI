import React, { Component }                                             from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, NavLink }          from "reactstrap";
import FormRegister                                                     from "../../components/Form/FormRegister";
import FormLogin                                                        from "../../components/Form/FormLogin";
import { ButtonShoesStore }                                             from '../../ui';
import                                                                       './topbar.css';
    import ButtonGroup                                                  from "reactstrap/es/ButtonGroup";
import ButtonDropdown                                                   from "reactstrap/es/ButtonDropdown";
import DropdownToggle                                                   from "reactstrap/es/DropdownToggle";


export default class Topbar extends Component {

    state = {
        modalOne: false,
        modalTwo: false,
        dropdown: false,
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

    toggleThree() {
        this.setState({
            dropdown: !this.state.dropdown
        })
    };

    render() {

        const { modalOne, modalTwo } = this.state;

        return (
            <div className="topbar-total">
                <div className="topbar">
                    <ButtonGroup>
                        <ButtonDropdown isOpen={this.state.dropdown} toggle={ () => this.toggleThree() }>
                            <DropdownToggle style={{ background: "#fcfcfc", height:50 }}>
                                <img style={{ height: 30, width: 30, marginRight: 15, marginTop: 3 }}
                                     src={require('../../image/cart/icon-cart.jpg')}
                                     alt="icon-cart"
                                />
                            </DropdownToggle>
                        </ButtonDropdown>
                    </ButtonGroup>
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
