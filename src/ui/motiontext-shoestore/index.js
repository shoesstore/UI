import React                    from 'react';
import { Motion, spring }       from "react-motion";
import                               '../../css/text/text.css';


const MotionTextShoesStore = (props) => {

    const { title, src, alt } = props;

    return (
        <div className="motion-text">
            <Motion defaultStyle={{ right: 20000 }} style={{ right: spring(100) }}>
                {
                    value => (
                        <h3 style={{ display: "flex", paddingRight: 710, position: 'absolute', ...value }}>
                            <img
                                style={{ width: 40, height: 40, paddingRight: 10 }}
                                src={src}
                                alt={alt}
                            />
                            <div className="title-list-product">
                                { title }
                            </div>
                        </h3>
                    )
                }
            </Motion>
        </div>
    );
}

export default MotionTextShoesStore;
