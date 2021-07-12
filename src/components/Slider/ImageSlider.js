import React, { useState } from 'react'
import { SliderData } from './SliderData'
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import NavigateNextSharpIcon from '@material-ui/icons/NavigateNextSharp';
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp';

const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    console.log(current)


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }


    return (
        <section className="slider">
            <NavigateBeforeSharpIcon className="left-arrow" onClick={prevSlide} />
            <NavigateNextSharpIcon className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && <img src={slide.image} alt="work" className="image" />}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider
