import React, { useState } from 'react';
import './Documentaries.css';
import Navbar from '../../Navbar/Navbar';
import MovieCard from '../../Card/MovieCard'; // 
import { documentaries } from '../../../../Constants/data';
import Footer from '../../Footer/Footer';

function Documentaries() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Calculate the range of items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = documentaries.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(documentaries.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <div className="Documentaries">

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

export default Documentaries