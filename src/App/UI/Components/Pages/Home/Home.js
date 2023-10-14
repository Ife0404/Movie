import React, { useState, useEffect } from 'react';
import './Home.css';
import SearchIcon from "../../../../Images/svg/search.svg"
import Navbar from "../../Navbar/Navbar"

// Define your moviesData array here or import it from a separate file
const moviesData = [
  // Your movie objects go here
];

function Home() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState('');

  // Create the searchMovies function
  const searchMovies = (query) => {
    // Implement your movie search logic here
    // You can filter the moviesData array based on the query and update the movies state
    const filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    setMovies(filteredMovies);
  };

  return (
    <div>
      <Navbar />
      <div className="Home">
        <div className='Home-content'>
          <div className="search">
            <input
              placeholder="Search for movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
        </div>
        {/* Render your movie list here using the 'movies' state */}
      </div>
    </div>

  );
}

export default Home;
