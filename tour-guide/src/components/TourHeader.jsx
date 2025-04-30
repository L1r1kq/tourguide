import React from "react";
import TourGallery from "./TourGallery";

const TourHeader = ({ title, location, reviewsCount, rating }) => (
  <div className="city-tour-city-tour">
    <span className="city-tour-text100">{title}</span>
    <div className="city-tour-frame38">
      <div className="city-tour-frame391">
        <img src="public/icons/vector3767-yh.svg" alt="Vector3767" className="city-tour-vector10" />
        <span className="city-tour-text101">{location}</span>
      </div>
      <img src="public/icons/rectangle1903768-810j-200w.png" alt="Rectangle1903768" className="city-tour-rectangle190" />
      <div className="city-tour-frame40">
        <div className="city-tour-group188">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={`public/icons/star${i + 1}3768-${i === 0 ? "5vow" : i === 1 ? "dvwq" : i === 2 ? "x5bd" : i === 3 ? "wfva" : "iopk"}.svg`}
              alt={`Star${i + 1}3768`}
              className={`city-tour-star${i + 1}10`}
            />
          ))}
        </div>
        <span className="city-tour-text102">({reviewsCount} reviews)</span>
      </div>
    </div>
    <TourGallery />
  </div>
);

export default TourHeader;