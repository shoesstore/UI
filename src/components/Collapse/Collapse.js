import React, { Component } from 'react';
import { Collapse }         from 'reactstrap';
import { ButtonShoesStore } from "../../ui";
import                           "./collapse.css";


class Collapses extends Component {

    state = {
        collapseOne : false,
        collapseTwo : false,
        collapseThree : false,
        collapseFour : false,
    };

    toggleOne() {
        this.setState(state => ({ collapseOne: !state.collapseOne }));
    }

    toggleTwo() {
        this.setState(state => ({ collapseTwo: !state.collapseTwo }));
    }

    toggleThree() {
        this.setState(state => ({ collapseThree: !state.collapseThree }));
    }

    toggleFour() {
        this.setState(state => ({ collapseFour: !state.collapseFour }));
    }

    render() {
        return (
            <div>
                <div className="left-nav-collapse" onClick={ () => this.toggleOne() }>
                    <div>
                        Colour
                    </div>
                    <div>
                        {
                            this.state.collapseOne
                                ? <img src={require('../../image/product/down-arrow.png')} alt="down-arrow"/>
                                : <img src={require('../../image/product/up-arrow.png')} alt="up-arrow"/>
                        }
                    </div>
                </div>
                <Collapse isOpen={this.state.collapseOne}>
                    <div className="left-nav-collapse-result">
                        <ButtonShoesStore color="primary" style={{ borderRadius: "25px", height: 22 }}/>
                        <ButtonShoesStore color="secondary" style={{ borderRadius: "25px", height: 22 }}/>
                        <ButtonShoesStore color="success" style={{ borderRadius: "25px", height: 22 }}/>
                        <ButtonShoesStore color="info" style={{ borderRadius: "25px", height: 22 }}/>
                        <ButtonShoesStore color="warning" style={{ borderRadius: "25px", height: 22 }}/>
                        <ButtonShoesStore color="danger" style={{ borderRadius: "25px", height: 22 }}/>
                    </div>
                </Collapse>


                <div className="left-nav-collapse" onClick={ () => this.toggleTwo() }>
                    <div>
                        Size
                    </div>
                    <div>
                        {
                            this.state.collapseTwo
                                ? <img src={require('../../image/product/down-arrow.png')} alt="down-arrow"/>
                                : <img src={require('../../image/product/up-arrow.png')} alt="up-arrow"/>
                        }
                    </div>

                </div>
                <Collapse isOpen={this.state.collapseTwo}>
                    <div className="left-nav-collapse-result">
                        <div>Mens Sizes</div>
                        <div>Womens Sizes</div>
                        <div>Youths Sizes</div>
                    </div>
                </Collapse>

                <div className="left-nav-collapse" onClick={ () => this.toggleThree() }>
                    <div>
                        Price
                    </div>
                    <div>
                        {
                            this.state.collapseThree
                                ? <img src={require('../../image/product/down-arrow.png')} alt="down-arrow"/>
                                : <img src={require('../../image/product/up-arrow.png')} alt="up-arrow"/>
                        }
                    </div>
                </div>
                <Collapse isOpen={this.state.collapseThree}>
                    <div className="left-nav-collapse-result">
                        <div>Iron</div>
                        <div>Bronze</div>
                        <div>Silver</div>
                        <div>Gold</div>
                        <div>Platinum</div>
                        <div>Diamond</div>
                        <div>VIP</div>
                    </div>
                </Collapse>


                <div className="left-nav-collapse" onClick={ () => this.toggleFour() }>
                    <div>
                        Brand
                    </div>
                    <div>
                        {
                            this.state.collapseFour
                                ? <img src={require('../../image/product/down-arrow.png')} alt="down-arrow"/>
                                : <img src={require('../../image/product/up-arrow.png')} alt="up-arrow"/>
                        }
                    </div>
                </div>
                <Collapse isOpen={this.state.collapseFour}>
                    <div className="left-nav-collapse-result">
                        <div>Nike</div>
                        <div>Nike By You</div>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default Collapses;
