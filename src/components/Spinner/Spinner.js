import React, { Component } from 'react';
// import {FingerprintSpinner, ScalingSquaresSpinner} from 'react-epic-spinners'
import                            '../../css/spinner/spinner.css';


export default class Spinner extends Component {

    render() {
        return (
            <div className="spinner">
                {/*<ScalingSquaresSpinner*/}
                {/*    size={200}*/}
                {/*    color="black"*/}
                {/*/>*/}
                {/*<FingerprintSpinner*/}
                {/*    size={200}*/}
                {/*    color="black"*/}
                {/*/>*/}
            </div>
        );
    }
}