// TourImages.js
import React from 'react';
import '../styles/styleefs.css';

const TourImages = ({ images }) => {
  return (
    <div className="tour-images">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`tour-image tour-image-${index}`}
        />
      ))}
    </div>
  );
};

export default TourImages;