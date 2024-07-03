import React, { useState } from 'react';
import './Anime.css';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import MovieCard from '../../Card/MovieCard';
import { anime } from '../../../../Constants/data';


function Anime() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Calculate the range of items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = anime.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(anime.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <>
      <Navbar />
      <div className="Anime">
        {currentItems.map((series, index) => (
          <MovieCard
            key={index}
            title={series.title}
            posterUrl={series.image}
            link={series.link}
            desc={series.desc}
            ratings={series.ratings}
            releaseDate={series.releaseDate}
            genre={series.genre}
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

export default Anime