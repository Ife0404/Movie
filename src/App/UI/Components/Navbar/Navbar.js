import React from 'react';
import './Navbar.css';
import Button from '../Button/Button';
import pageLogo from '../../../Images/png/pageLogo.png'

function Navbar() {
    return (
        <div className='Navbar'>
            <div className='nav-content'>
                <div className='nav-links'>
                    <nav>
                        <div>
                            <ul>
                                <a href={"/home"}><img src={pageLogo} alt='' /></a>
                                <li><a href={"/movies"}>Movies</a></li>
                                <li><a href={"/tv shows"}>TV Shows</a></li>
                                <li><a href={"/documentaries"}>Documentaries</a></li>
                                <li><a href={"/anime"}>Anime</a></li>
                                <Button type="button" text={"Log Out"} class="log-out" />
                            </ul>
                        </div>
                    </nav>
                </div>


            </div>

        </div>



    )
}

export default Navbar