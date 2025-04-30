import React from "react";

const ReviewItem = ({ date, rating, name, comment, summary, isHelpful }) => (
  <div className="city-tour-group313">
    <img src={`public/external/ellipse603779-ehdr-200h.png`} alt="Ellipse60" className="city-tour-ellipse60" />
    <div className="city-tour-group309">
      <span className="city-tour-text126">{date}</span>
      <div className="city-tour-group229">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={`public/external/star${i + 1}3779-${i === 0 ? "f7ie" : i === 1 ? "hcso" : i === 2 ? "pjqq" : i === 3 ? "knj9" : "n3h"}.svg`}
            alt={`Star${i + 1}3779`}
            className={`city-tour-star${i + 1}12`}
          />
        ))}
      </div>
      <div className="city-tour-group308">
        <div className="city-tour-frame33">
          <span className="city-tour-text127">{name}</span>
          <div className="city-tour-bicheckall">
            <div className="city-tour-group4">
              <img src="public/external/vector3780-w5c.svg" alt="Vector3780" className="city-tour-vector17" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="city-tour-group312">
      <span className="city-tour-text128">{comment}</span>
      <div className="city-tour-group311">
        <span className="city-tour-text129">{summary}</span>
        <div className="city-tour-group310">
          <span className="city-tour-text130">Helpful?</span>
          <span className="city-tour-text131">{isHelpful ? "Yes" : "No"}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewItem;