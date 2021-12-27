import React, {useState} from "react";
import s from "./Carousel.module.css"
import arrowRight from './../../../../images/Path 2 Copy 1.svg'
import arrowLeft from './../../../../images/Path 2 Copy 2.svg'

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
                    return React.cloneElement (child,{width:'100%'})
                })}
            </div>
            <div className={s.indicators}>
                <div style={{pointerEvents:'all'}}>
                    <img style={{cursor:'pointer',width:'50px',height:'50px'}} src={arrowLeft} onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}/>
                </div>
                <div style={{pointerEvents:'all'}}>
                    <img style={{cursor:'pointer',width:'50px',height:'50px'}} src={arrowRight} onClick={() => {updateIndex(activeIndex + 1);}}/>
                </div>
            </div>
        </div>
    );
};

export default Carousel;