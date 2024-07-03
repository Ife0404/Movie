import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ImageCard from '../Card/ImageCard';
import './ImageCarousel.css';
// import { imageSets } from '../../../Constants/data';

const ImageCarousel = ({ imageSets }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageSets.length) % imageSets.length);
    };

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 3000); // Change the interval time as needed

        return () => clearInterval(intervalId);
    }, [currentIndex, imageSets.length]);

    return (
        <div className="image-carousel">
            <FaArrowLeft className="carousel-arrow left" onClick={goToPrevSlide} />
            <div className="carousel-content">
                {imageSets.map((imageUrl, index) => (
                    <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}>
                        <ImageCard imageUrl={imageUrl} altText={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <FaArrowRight className="carousel-arrow right" onClick={goToNextSlide} />
        </div>
    );
};

export default ImageCarousel;
