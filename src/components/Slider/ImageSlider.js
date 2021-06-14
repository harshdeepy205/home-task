import React, { useState } from 'react'
import { SliderData } from './SliderData'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    return (
        <section className="slider">
            <KeyboardArrowLeftIcon className="left-arrow" />
            <KeyboardArrowRightIcon className="right-arrow" />
            {SliderData.map((slide, index) => {
                return <img src={slide.image} alt="work" />
            })}
        </section>
    )
}

export default ImageSlider
