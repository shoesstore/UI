import React                    from 'react';
import { Motion, spring }       from "react-motion";
import                               '../../components/Text/text.css';


const MotionTextShoesStore = (props) => {

    const { title, src, alt, isCartPage } = props;

    return (
        <div className="motion-text">
            <Motion defaultStyle={{ right: 20000 }} style={{ right: spring(100) }}>
                {
                    value => (
                        <div className={ isCartPage ? "classIconCPage" : "classIconPLPage" } style={{ ...value }}>
                            <img
                                className={ isCartPage ? "classIconCartPage" : "classIconProductListPage" }
                                src={src}
                                alt={alt}
                            />
                            <div className="title-list-product">
                                <p>
                                    { title }
                                </p>
                            </div>
                        </div>
                    )
                }
            </Motion>
        </div>
    );
}

export default MotionTextShoesStore;
