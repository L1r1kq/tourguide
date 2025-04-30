import React from "react";

const RelatedTourItem = ({ image, title, duration, price, reviewsCount, hasTransport, hasFamilyPlan }) => (
  <div className="city-tour-group233">
    <img src={image} alt="Rectangle1293710" className="city-tour-rectangle1292" />
    <span className="city-tour-text240">{title}</span>
    <div className="city-tour-group202">
      <span className="city-tour-text241">{duration}</span>
      <img src="public/external/vector3710-lkud.svg" alt="Vector3710" className="city-tour-vector24" />
    </div>
    <div className="city-tour-group232">
      <div className="city-tour-group231">
        <span className="city-tour-text242">{price}</span>
        <span className="city-tour-text243">per person</span>
      </div>
      <div className="city-tour-group230">
        <div className="city-tour-group229">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={`public/icons/star${i + 1}3710-${i === 0 ? "6b0u" : i === 1 ? "8519" : i === 2 ? "ukii" : i === 3 ? "i5jc" : "ius7"}.svg`}
              alt={`Star${i + 1}3710`}
              className={`city-tour-star${i + 1}17`}
            />
          ))}
        </div>
        <span className="city-tour-text244">{reviewsCount} reviews</span>
      </div>
    </div>
    {hasTransport && (
      <div className="city-tour-group201">
        <span className="city-tour-text245">Transport Facility</span>
        <img src="public/icons/vector3710-ywx.svg" alt="Vector3710" className="city-tour-vector25" />
      </div>
    )}
    {hasFamilyPlan && (
      <div className="city-tour-group200">
        <span className="city-tour-text246">Family Plan</span>
        <img src="public/icons/vector3710-ylv.svg" alt="Vector3710" className="city-tour-vector26" />
      </div>
    )}
    <img src="public/icons/rectangle1453710-t9c-200h.png" alt="Rectangle1453710" className="city-tour-rectangle1451" />
  </div>
);

export default RelatedTourItem;