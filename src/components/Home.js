import { AccountBalanceWalletTwoTone, DynamicFeed, EmojiObjects, HttpsTwoTone } from '@material-ui/icons'
import React from 'react'


function Home() {
    return (
        <>
            <div className="container">
                <navbar>
                    <div className="logo">
                        <h1>BAKER</h1>
                    </div>
                    <div className="menu_items">
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
                        <button>Download Now</button>
                        <button>Learn More</button>
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
