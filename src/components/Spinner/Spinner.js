import React, { Component }      from 'react';
import { ScalingSquaresSpinner } from 'react-epic-spinners'
import './spinner.css';


export default class Spinner extends Component {

    render() {
        return (
            <div>
                <div className="spinner">
                    <ScalingSquaresSpinner
                        color="black"
                    />
                </div>
            </div>

        );
    }
}
