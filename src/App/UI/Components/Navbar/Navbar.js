import React, { useState } from 'react';
import './Navbar.css';
import Button from '../Button/Button';
import pageLogo from '../../../Images/png/pageLogo.png'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/home');
    };

    const handleSignupNavigation = () => {
        navigate('/');
    };


    // const [toggler, setToggler] = useState("about")
    // const userDetails = document.getElementsByClassName('tab')
    // const setActive = (e) => {
    //     for (let i = 0; i < userDetails.length; i++) {
    //         userDetails[i].classList.remove('active')
    //     }
    //     e.target.classList.add('active')
    // }

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
                                <a><img src={pageLogo} alt='' onClick={handleNavigation} /></a>
                                <li><a href={"/movies"}>Movies</a></li>
                                <li><a href={"/tv shows"}>TV Shows</a></li>
                                <li><a href={"/documentaries"}>Documentaries</a></li>
                                <li><a href={"/anime"}>Anime</a></li>
                            </ul>
                            <Button type="button" text={"Signup"} class="sign-in" onClick={handleSignupNavigation} />

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
                            height={"60px"} alt="" />
                    </a>

                    <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <li><a href={"/movies"}>Movies</a></li>
                        <li><a href={"/tv shows"}>TV Shows</a></li>
                        <li><a href={"/documentaries"}>Documentaries</a></li>
                        <li><a href={"/anime"}>Anime</a></li>

                    </ul>
                </div>



            </div>
        </div>




    )
}

export default Navbar



//  <li className="user-about user-details" onClick={() => {
//     setToggler("movies");
//   }}>
//     <a className="nav-link tab active " id="home-tab" onClick={(e) => {
//       setActive(e)
//     }} data-toggle="tab" href="#home" role="tab">Movies</a>
//   </li>
//   <li className="user-timeline user-details" onClick={() => { setToggler("tv shows") }}>
//     <a className="nav-link tab " id="profile-tab" onClick={(e) => {
//       setActive(e)
//     }} data-toggle="tab" href="#profile" role="tab">TV Shows</a>
//   </li> 