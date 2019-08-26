import React                    from 'react';
import { Motion, spring }       from "react-motion";
import                               '../../css/text/text.css';


const MotionTextShoesStore = (props) => {

    const { title, src, alt, style, isCardPage } = props;

    return (
        <div className="motion-text">
            <Motion defaultStyle={{ right: 20000 }} style={{ right: spring(100) }}>
                {
                    value => (
                        <div className=""  style={{...value }}>
                            <img
                                className={ isCardPage ? "classCardPage" : "classListPage" }
                                style={{ height: isCardPage ? 50 : 70 }}
                                src={src}
                                alt={alt}
                            />
                            <p className="title-list-product">
                                { title }
                            </p>
                        </div>
                    )
                }
            </Motion>
        </div>
    );
}

export default MotionTextShoesStore;
