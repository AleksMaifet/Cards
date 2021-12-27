import React, {useEffect, useState} from "react";
import s from "./Carousel.module.css"

export const CarouselItem = ({children, width}: any) => {
    return (
        <div className={s.carouselItem} style={{width: width}}>
            {children}
        </div>
    );
};

const Carousel = ({children}: any) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex: any) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    return (
        <div className={s.carousel}>
            <div
                className={s.inner}
                style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
            <div className={s.indicators}>
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    Prev
                </button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${index === activeIndex ? s.active : ""}`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        >
                            {index + 1}
                        </button>
                    );
                })}
                <button
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carousel;