import React, { useState, useEffect } from 'react';
import './Home.css';
import SearchIcon from "../../../../Images/svg/search.svg"
import Navbar from "../../Navbar/Navbar"
import Footer from '../../Footer/Footer';


// Define your moviesData array here or import it from a separate file
const moviesData = [
  // Your movie objects go here
];

function Home() {

  return (
    <div className='Main'>
      <Navbar />
      <div className="Home">
        <div className='Home-content'>
          <p>Home Page</p>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Home;

