import React from 'react'
import { Form } from 'react-bootstrap'

function Slider() {
    return (
        <div>
            <section id="slider">
                <input type="radio" name="slider" id="s1" checked onChange={() => { }} style={{ display: 'none' }} />
                <input type="radio" name="slider" id="s2" onChange={() => { }} style={{ display: 'none' }} />
                <input type="radio" name="slider" id="s4" onChange={() => { }} style={{ display: 'none' }} />
                <input type="radio" name="slider" id="s3" onChange={() => { }} style={{ display: 'none' }} />
                <input type="radio" name="slider" id="s5" onChange={() => { }} style={{ display: 'none' }} />

                <label htmlFor="s1" id="slide1" style={{ width: '50%', left: '18%' }}>1</label>
                <label htmlFor="s2" id="slide2" style={{ width: '50%', left: '18%' }}>2</label>
                <label htmlFor="s3" id="slide3" style={{ width: '50%', left: '18%' }}>3</label>
                <label htmlFor="s4" id="slide4" style={{ width: '50%', left: '18%' }}>4</label>
                <label htmlFor="s5" id="slide5" style={{ width: '50%', left: '18%' }}>5</label>
            </section>
            <center> <input type="range" className="form-range" id="customRange1" style={{ width: '20%' }} /></center>

            {/* <section id="slider">
                <input type="radio" name="slider" id="s1" checked />
                <input type="radio" name="slider" id="s2" />
                <input type="radio" name="slider" id="s3" />
                <input type="radio" name="slider" id="s4" />
                <input type="radio" name="slider" id="s5" />

                <label htmlFor="s1" id="slide1">1</label>
                <label htmlFor="s2" id="slide2">2</label>
                <label htmlFor="s3" id="slide3">3</label>
                <label htmlFor="s4" id="slide4">4</label>
                <label htmlFor="s5" id="slide5">5</label>
            </section> */}
        </div>
    )
}

export default Slider
