import React from 'react'
import Corousel from './corousel'
import Cards from './cards'

function navbar() {
    return (
        <div>
            <div id="navBar">
                <div id="topHalf">
                    <div id="logoWrapper">
                        <img
                            id="logo"
                            src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png"
                            alt=""
                        />
                    </div>
                    <input type="text" placeholder="Give me all your money" />

                    <div id="head-top">
                        <div className="section">Your Account</div>
                        <div className="section">Try Prime</div>
                        <div className="section">Lists</div>
                        <div className="section">Cart</div>
                    </div>

                </div>
                <div id="bottomHalf">
                    <div id="department">Departments</div>
                    <div id="sections">
                        <div className="section">Your Amazon.com</div>
                        <div className="section">Today's Deals</div>
                        <div className="section">Gift Cards &amp; Registry</div>
                        <div className="section">Sell</div>
                        <div className="section">Help</div>
                    </div>
                    <div id="accountStuff">
                        <div className="section">Your Account</div>
                        <div className="section">Try Prime</div>
                        <div className="section">Lists</div>
                        <div className="section">Cart</div>
                    </div>
                </div>
            </div>

            {/* third navbar */}
            <div className="topnav">





                <a href="#news">prime video</a>
                <div className='nav-left'>
                    <a href="#search">Home</a>
                    <a href="#about">Originals</a>
                    <a href="#search">TV Shows</a>
                    <a href="#about">Movies</a>
                    <a href="#about">Kids</a>
                </div>



                <div className="topnav-right">
                    <a href="#search">Your Work List</a>
                    <a href="#about">Your Video Library</a>
                    <a href="#search">Settings</a>
                    <a href="#about">Getting Started</a>
                    <a href="#about">Help</a>
                </div>

            </div>

            {/* corousel */}

            <Corousel/>

            <div className="topnav">

                <div className='nav-mid'>
                    <a href="#search">All Videos</a>
                    <a href="#about">Your Videos</a>
                    <a href="#search">Included with Prime</a>
                    <a href="#about">Channels</a>
                    <a href="#about">Rent or buy</a>
                </div>

            </div>

            {/* cards*/}

                <Cards/>

        </div>
    )
}

export default navbar
