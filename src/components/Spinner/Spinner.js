import React, { Component }      from 'react';
import { ScalingSquaresSpinner } from 'react-epic-spinners'
import './spinner.css';


export default class Spinner extends Component {

    render() {
        return (
            <div className="spinner">
                <ScalingSquaresSpinner
                    size={200}
                    color="black"
                />
            </div>
        );
    }
}
