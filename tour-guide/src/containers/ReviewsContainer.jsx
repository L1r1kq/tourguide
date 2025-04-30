import React, { useState } from "react";
import ReviewSummary from "../components/ReviewSummary";
import ReviewItem from "../components/ReviewItem";
import ReviewFilter from "../components/ReviewFilter";

const ReviewsContainer = ({ initialReviews }) => {
  const [reviews, setReviews] = useState(initialReviews);

  const summary = {
    overallRating: "4,30",
    totalReviews: 854,
    categories: [
      { name: "Guide", rating: "4.8" },
      { name: "Transportation", rating: "3.0" },
      { name: "Value for money", rating: "4.5" },
      { name: "Safety", rating: "4.0" },
    ],
  };

  return (
    <>
      <ReviewSummary overallRating={summary.overallRating} totalReviews={summary.totalReviews} categories={summary.categories} />
      <ReviewFilter />
      {reviews.map((review, index) => (
        <div key={index} className={`city-tour-group31${index + 4}`}>
          <ReviewItem
            date={review.date}
            rating={review.rating}
            name={review.name}
            comment={review.comment}
            summary={review.summary}
            isHelpful={review.isHelpful}
          />
        </div>
      ))}
      <img src="public/icons/rectangle1813793-m8vi-200h.png" alt="Rectangle1813793" className="city-tour-rectangle181" />
      <img src="public/icons/rectangle1823793-sf9n-200h.png" alt="Rectangle1823793" className="city-tour-rectangle182" />
      <img src="public/icons/rectangle1833793-l1uf-200h.png" alt="Rectangle1833793" className="city-tour-rectangle183" />
      <img src="public/icons/rectangle1843793-uf4u-200h.png" alt="Rectangle1843793" className="city-tour-rectangle184" />
      <img src="public/icons/rectangle1853794-ynxb-200h.png" alt="Rectangle1853794" className="city-tour-rectangle185" />
      <span className="city-tour-text161">View More Comments</span>
    </>
  );
};

export default ReviewsContainer;