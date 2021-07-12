import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Gallery2() {
    return (
        <>
            {/* <h2>Gallery2</h2> */}
            <Container>
                <Row className="rows" style={{ marginTop: '1rem' }}>
                    <Col md={4}>
                        <div className="box1">
                            hello
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="box2">
                            bye
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} className="column">
                        <div className="col-box-1" style={{ height: '50vh', width: '100%', background: 'grey', marginTop: '0.5rem' }}>
                            img1
                        </div>
                        <div className="col-box-1" style={{ width: '100%', height: '100vh', marginTop: '0.5rem', background: 'green' }}>
                            img2
                            {/* <img style={{ objectFit: 'contain', width: '100%', height: '100vh' }} src="https://images.pexels.com/photos/2419375/pexels-photo-2419375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
                        </div>
                        <div className="col-box-1" style={{ height: '50vh', width: '100%', background: 'grey', marginTop: '0.5rem' }}>
                            img3
                        </div>
                        {/* <img src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <img src="https://images.pexels.com/photos/2419375/pexels-photo-2419375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <img src="https://images.pexels.com/photos/2326290/pexels-photo-2326290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
                    </Col>
                    <Col md={6} className="column">
                        <div className='col2-box' style={{ height: '100vh', marginTop: '0.5rem', width: '100%', background: 'green' }}>
                            img1
                        </div>
                        <div className='col2-box' style={{ height: '101vh', marginTop: '0.5rem', background: 'grey' }}>
                            img2
                        </div>
                        {/* <img src="https://images.pexels.com/photos/2019546/pexels-photo-2019546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <img src="https://images.pexels.com/photos/1980720/pexels-photo-1980720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
                    </Col>
                </Row>
                <Row style={{ marginTop: '0.5rem' }}>
                    <Col md={4}>
                        <div className="box1">
                            hello
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="box2">
                            bye
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Gallery2

