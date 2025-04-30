import React from "react";

const ReviewSummary = ({ overallRating, totalReviews, categories }) => (
  <div className="city-tour-group326">
    <span className="city-tour-text115">Customer Review</span>
    <div className="city-tour-group305">
      <div className="city-tour-group297">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={`public/icons/star${i + 1}3775-${i === 0 ? "5icj" : i === 1 ? "t55k" : i === 2 ? "618c" : i === 3 ? "b41x" : "dr1"}.svg`}
            alt={`Star${i + 1}3775`}
            className={`city-tour-star${i + 1}11`}
          />
        ))}
      </div>
      <div className="city-tour-group304">
        <span className="city-tour-text116">{overallRating}</span>
        <span className="city-tour-text117">{totalReviews} reviews</span>
      </div>
    </div>
    <div className="city-tour-group306">
      {categories.map((category, index) => (
        <div key={index} className={`city-tour-group30${index}`}>
          <span className={`city-tour-text${118 + index * 2}`}>{category.name}</span>
          <span className={`city-tour-text${119 + index * 2}`}>{category.rating}</span>
          <div className={`city-tour-group29${index + 1}`}>
            <img src={`public/icons/rectangle177377${index % 2 === 0 ? 7 : 8}-${index === 0 ? "33s" : index === 1 ? "v0boc" : index === 2 ? "s58f" : "9z9l"}-200h.png`} alt="Rectangle177" className={`city-tour-rectangle177${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewSummary;