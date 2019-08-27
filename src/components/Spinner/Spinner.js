import React, { Component }      from 'react';
// import { ScalingSquaresSpinner } from 'react-epic-spinners'
import './spinner.css';


export default class Spinner extends Component {

    render() {
        return (
            <div>
                <div className="spinner">
                    <img style={{ width: 300 }}/>
                    <p className="title-of-tony-pham">
                        I'm Tony Pham! Owner of ShoesStore
                    </p>
                </div>
                <div className="co-founder">
                    <div className="spinner-duy">
                        <img style={{ width: 300 }}/>
                        <p className="title-of-tien-duy">
                            Co-founder: Tien Duy
                        </p>
                    </div>
                    <div className="spinner-dung">
                        <img style={{ width: 300 }}/>
                        <p className="title-of-chi-dung">
                            Co-founder: Chi Dung
                        </p>
                    </div>
                    <div className="spinner-hai">
                        <img style={{ width: 300 }}/>
                        <p className="title-of-long-hai">
                            Co-founder: Long Hai
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}
