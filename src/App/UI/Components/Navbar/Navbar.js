import React, { useState } from 'react';
import './Navbar.css';
import Button from '../Button/Button';
import pageLogo from '../../../Images/png/pageLogo.png'
import { navLinks } from '../../../Constants/data';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='Navbar'>
            <div className='nav-content'>
                <div className='nav-links'>
                    <nav>
                        <div className='nav-but'>
                            <ul>
                                <a href={"/"}><img src={pageLogo} alt='' /></a>
                                <li><a className="active" href={"/movies"}>Movies</a></li>
                                <li><a href={"/tv shows"}>TV Shows</a></li>
                                <li><a href={"/documentaries"}>Documentaries</a></li>
                                <li><a href={"/anime"}>Anime</a></li>
                            </ul>
                            <Button type="button" text={"Sign In"} class="sign-in" />

                            {/* <div id='mobile'>
                                <i className='fas fa-bars'></i>
                                <i className='fas fa-times'></i>
                            </div> */}
                        </div>
                    </nav>
                </div>
            </div>


            <div className='navbarHidden'>
                <div className={`navbar ${isOpen ? 'open' : ''}`}>

                    <a href={"/"}>
                        <img className='logo'
                            src={pageLogo}
                            height={"45px"} alt="" />
                    </a>

                    <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV Shows</a></li>
                        <li><a href="#">Documentaries</a></li>
                        <li><a href="#">Anime</a></li>

                    </ul>
                </div>



            </div>
        </div>




    )
}

export default Navbar



