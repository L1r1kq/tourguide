// TourFeaturesList.js
import React from 'react';
import TourFeature from './TourFeatures';
import '../styles/styleefs.css';

const TourFeaturesList = ({ features }) => {
  return (
    <div className="tour-features-list">
      {features.map((feature, index) => (
        <TourFeature
          key={index}
          iconSrc={feature.iconSrc}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default TourFeaturesList;