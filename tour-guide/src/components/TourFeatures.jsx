// TourFeature.js
import React from 'react';
import '../styles/styleefs.css';

const TourFeature = ({ iconSrc, title, description }) => {
  return (
    <div className="tour-feature">
      <div className="tour-feature-header">
        <img src={iconSrc} alt={title} className="tour-feature-icon" />
        <span className="tour-feature-title">{title}</span>
      </div>
      <span className="tour-feature-description">{description}</span>
    </div>
  );
};

export default TourFeature;