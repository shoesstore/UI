import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import "../../css/collapse/collapse.css";

class Collapses extends Component {

    state = {
        collapseOne : false,
        collapseTwo : false,
        collapseThree : false,
        collapaseFour : false,
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
                <div className="left-nav-collapse" onClick={ () => this.toggleOne() }>Brands</div>
                <Collapse isOpen={this.state.collapseOne}>
                    <div className="left-nav-collapse-result"><strong>Itami:R-S</strong></div>
                </Collapse>

                <div className="left-nav-collapse" onClick={ () => this.toggleTwo() }>Color</div>
                <Collapse isOpen={this.state.collapseTwo}>
                    <div className="left-nav-collapse-result"><strong>Itami:R-S</strong></div>
                </Collapse>

                <div className="left-nav-collapse" onClick={ () => this.toggleThree() }>Size</div>
                <Collapse isOpen={this.state.collapseThree}>
                    <div className="left-nav-collapse-result"><strong>Itami:R-S</strong></div>
                </Collapse>

                <div className="left-nav-collapse" onClick={ () => this.toggleFour() }>Price</div>
                <Collapse isOpen={this.state.collapseFour}>
                    <div className="left-nav-collapse-result"><strong>Itami:R-S</strong></div>
                </Collapse>
            </div>
        );
    }
}

export default Collapses;
