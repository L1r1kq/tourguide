// DescriptionSection.js
import React from 'react';

const DescriptionSection = ({ description }) => {
  return (
    <div className="description-section">
      <h2 className="description-section-title">Description</h2>
      <p className="description-section-text">{description}</p>
      <img src="public/external/rectangle2053798-1lf-200h.png" alt="Divider" className="description-section-divider" />
    </div>
  );
};

export default DescriptionSection;