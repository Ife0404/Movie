import React from 'react';
import "./Footer.css";
import { IoLogoFacebook, IoLogoInstagram, } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";



function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-section'>
                <div className='footer-links'>
                    <div className='footer-main'>
                        <h4>Navigation</h4>
                        <a href='/home'>
                            <p>Home</p>
                        </a>
                        <a href='/movies'>
                            <p>Movies</p>
                        </a>
                        <a href='/tv shows'>
                            <p>TV shows</p>
                        </a>
                        <a href='/documentaries'>
                            <p>Documentaries</p>
                        </a>
                        <a href='/anime'>
                            <p>Anime</p>
                        </a>
                    </div>
                    <div className='footer-main'>
                        <h4>Resources</h4>
                        <a href='/resources'>
                            <p>Resource Center</p>
                        </a>
                        <a href='/resources'>
                            <p>Testimonials</p>
                        </a>
                        <a href='/resources'>
                            <p>STV</p>
                        </a>
                    </div>
                    <div className='footer-main'>
                        <h4>Partners</h4>
                        <a href='https://www.google.com/'>
                            <p>Google</p>
                        </a>
                    </div>
                    <div className='footer-main'>
                        <h4>Companies</h4>
                        <a href='/about'>
                            <p>About</p>
                        </a>
                        <a href='/advertisement'>
                            <p>Advertisement</p>
                        </a>
                        <a href='/contact'>
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className='footer-main'>
                        <h4>Coming soon on</h4>
                        <div className='socialmedia'>
                            <p><IoLogoFacebook /></p>
                            <p><IoLogoLinkedin /></p>
                            <p><IoLogoInstagram /></p>
                            <p><FaXTwitter /></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className='footer-below'>
                    <div className='footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} codeInn. All rights reserved.
                        </p>
                    </div>
                    <div className='footerlink'>
                        <a href='/terms'><div><p>Terms & conditions</p></div></a>
                        <a href='/privacy'><div><p>Privacy</p></div></a>
                        <a href='/security'><div><p>Security</p></div></a>
                        <a href='/cookie'><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer