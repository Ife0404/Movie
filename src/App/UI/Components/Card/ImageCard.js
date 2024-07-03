import React from 'react';
import './ImageCard.css'

function ImageCard({imageUrl, altText}) {
  return (
    <div className='image-card'>
        <img src={imageUrl} alt={altText} />
    </div>
  );
}

export default ImageCard