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
                        <ButtonShoesStore color="danger"/>
                        <ButtonShoesStore color="success"/>
                        <ButtonShoesStore color="primary"/>
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
                    <div className="left-nav-collapse-result">Itami:R-S</div>
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
                    <div className="left-nav-collapse-result">Itami:R-S</div>
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
                    <div className="left-nav-collapse-result">Itami:R-S</div>
                </Collapse>
            </div>
        );
    }
}

export default Collapses;
