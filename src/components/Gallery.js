import React from 'react'
import Img1 from '../img/1.JPG'
import Img2 from '../img/2.JPG'
import Img3 from '../img/3.JPG'
import Img4 from '../img/4.JPG'
import Img5 from '../img/5.JPG'
import Img6 from '../img/6.JPG'
import Img7 from '../img/7.JPG'
import Img8 from '../img/8.JPG'
import Img9 from '../img/9.JPG'
function Gallery() {
    let data = [{
        id: 3,
        imgsrc: Img3
    }, {
        id: 4,
        imgsrc: Img4
    }, {
        id: 5,
        imgsrc: Img5
    }, {
        id: 6,
        imgsrc: Img6
    }, {
        id: 7,
        imgsrc: Img7
    },

    ]
    return (
        <>
            <div className="row1">

            </div>
            <div className="gallery">
                {
                    data.map((items, index) => {
                        return (
                            <div className="pics" key={index}>
                                <img src={items.imgsrc} style={{ width: "100%" }} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="row2">

            </div>
        </>
    )
}

export default Gallery
