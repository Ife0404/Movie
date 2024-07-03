import React, { useState } from 'react';
import './Movies.css';
import Navbar from '../../Navbar/Navbar';
import MovieCard from '../../Card/MovieCard';
import { movies } from '../../../../Constants/data';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';


// Number of items to display per page

function Movies() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the range of items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get the navigate function
  const navigate = useNavigate();


  // Function to handle movie card click
  const handleMovieCardClick = (movieLink) => {
    navigate(movieLink);
  };

  return (
    <>
      <Navbar />
      <div className="Movies">
        {currentItems.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            posterUrl={movie.image}
            link={movie.link}
            desc={movie.desc}
            ratings={movie.ratings}
            releaseDate={movie.releaseDate}
            genre={movie.genre}
            onClick={() => handleMovieCardClick(movie.link)} // Pass the movie link to the click handler
          />
        ))}
        {/* Pagination component */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={index + 1 === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Movies;
