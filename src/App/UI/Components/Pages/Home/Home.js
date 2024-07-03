import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from "../../Navbar/Navbar"
import Footer from '../../Footer/Footer';
import { FaImdb } from "react-icons/fa";
import { LiaImdb } from "react-icons/lia";
import { BsDot, BsFillPlayFill } from "react-icons/bs";
import ImageCard from '../../Card/ImageCard';

function Home() {

  return (
    <div className='Main'>
      <Navbar />
      <div className="Home">
        <div className='Home-content'>
          <div className='Home-details'>
            <div className='Home-title'>
              <p> The Amazing
                Spiderman(I)
              </p>
            </div>
            <div className='ratings'>
              <span className='imdb'> <span className='react-icon'><LiaImdb /></span></span> <p>6.9(12.827)<span className='dot'><BsDot /></span><span className='straight'>|</span> 2 hour 16 minutes <span className='straight'>|</span> Sci-fi </p>
            </div>
            <div className='description'>
              <p>After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.</p>
            </div>
            <div className='buttons'>
              <div className='button1'>
                <button>Watch Trailer</button>
              </div>
              <div className='button2'>
                <button>
                  <span className='icon-container'>
                    <BsFillPlayFill />
                  </span>
                  Watch now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='home-card'>
          <ImageCard imageUrl='https://fzmovies.host/imdb_images/The%20Cabin%20in%20the%20Woods.jpg' altText='Your image' />
          <ImageCard imageUrl='https://fzmovies.host/imdb_images/The.Maze.Runner.2014.jpg' altText='Your image' />
          <ImageCard imageUrl='https://fzmovies.host/imdb_images/Captain%20America%20The%20First%20Avenger.jpg' altText='Your image' />
          <ImageCard imageUrl='https://fzmovies.host/imdb_images/Blended.2014.jpg' altText='Your image' />
          <ImageCard imageUrl='https://fzmovies.host/imdb_images/Oldboy.jpg' altText='Your image' />
          <ImageCard imageUrl='https://fzmovies.host/imdb_images/Clash%20of%20the%20Titans.jpg' altText='Your image' />
          <ImageCard imageUrl='https://fzmovies.host/imdb_images/Creed.jpg' altText='Your image' />
          <ImageCard imageUrl='https://fzmovies.host/imdb_images/I.Am.Bolt.(2016).jpg' altText='Your image' />
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Home;

// import React from 'react';
// import Navbar from '../../Navbar/Navbar';
// import Footer from '../../Footer/Footer';
// import { FaImdb } from 'react-icons/fa';
// import { BsDot, BsFillPlayFill } from 'react-icons/bs';
// import ImageCarousel from '../../Carousel/Imagecarousel';

// function Home({ imageSets }) {
//   return (
//     <div className='Main'>
//       <Navbar />
//       <div className='Home'>
//         <div className='Home-content'>
//           <div className='Home-details'>
//             <div className='Home-title'>
//               <p> The Amazing
//                 Spiderman(I)
//               </p>
//             </div>
//             <div className='ratings'>
//               <span className='imdb'> <span className='react-icon'><FaImdb /></span></span> <p>6.9(12.827)<span className='dot'><BsDot /></span><span className='straight'>|</span> 2 hour 16 minutes <span className='straight'>|</span> Sci-fi </p>
//             </div>
//             <div className='description'>
//               <p>After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.</p>
//             </div>
//             <div className='buttons'>
//               <div className='button1'>
//                 <button>Watch Trailer</button>
//               </div>
//               <div className='button2'>
//                 <button>
//                   <span className='icon-container'>
//                     <BsFillPlayFill />
//                   </span>
//                   Watch now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='home-card'>
//           <ImageCarousel images={imageSets} />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Home;
