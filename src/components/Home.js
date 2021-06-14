import { AccountBalanceWalletTwoTone, DynamicFeed, EmojiObjects, HttpsTwoTone } from '@material-ui/icons'
import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import Navbar from './Navbar';
function Home() {

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
        <>
            <div className="container">
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
                        <h5>Home</h5>
                        <h5>About</h5>
                        <h5>Serives</h5>
                        <h5>Portfolio</h5>
                        <h5>Testimonial</h5>
                        <h5>Blog</h5>
                        <h5>ContactUs</h5>
                    </div>
                </navbar>
                <section>
                    <div className="content">
                        <h3>We Are At Baker</h3>
                        <h1>Starting A new Journey!!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut!</p>
                    </div>
                    <div className="buttons">
                        <button className="btn">Download Now</button>
                        <button className="btn">Learn More</button>
                    </div>
                </section>
            </div>

            <section className="section-class">
                <div className="card">
                    <div className="card-each">
                        <div className="card-each--logo">
                            <EmojiObjects />
                        </div>
                        <div className="card-each--heading">
                            Creative Concept
                        </div>
                        <div className="card-each--content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint
                        </div>
                    </div>
                    <div className="card-each">
                        <div className="card-each--logo">
                            <DynamicFeed />
                        </div>
                        <div className="card-each--heading">
                            Amazing Design
                        </div>
                        <div className="card-each--content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint
                        </div>
                    </div>
                    <div className="card-each">
                        <div className="card-each--logo">
                            <AccountBalanceWalletTwoTone />
                        </div>
                        <div className="card-each--heading">
                            Cost Effective
                        </div>
                        <div className="card-each--content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint
                        </div>
                    </div>
                    <div className="card-each">
                        <div className="card-each--logo">
                            <HttpsTwoTone />
                        </div>
                        <div className="card-each--heading">
                            Secure
                        </div>
                        <div className="card-each--content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
