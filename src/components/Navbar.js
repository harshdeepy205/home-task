import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './navbar.css'

function Navbar() {
    const [isMenu, setMenu] = useState(false)

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <div>
            <navbar className={navbar ? "navbar active" : "navbar"}>
                <div className="logo" >
                    <button onClick={() => (setMenu(!isMenu))}>
                        {
                            isMenu ? <CloseIcon /> : <MenuIcon />
                        }
                    </button>
                    <h1>BAKER</h1>
                </div>
                <div className={isMenu ? "menu_items_mobile" : "menu_items"}>
                    {/* // onClick={() => setMenu(false)}> */}


                    <h5>Home</h5>
                    <h5>About</h5>
                    <h5>Serives</h5>
                    <h5>Portfolio</h5>
                    <h5>Testimonial</h5>
                    <h5>Blog</h5>
                    <h5>ContactUs</h5>
                </div>
            </navbar>


        </div>
    )
}

export default Navbar
