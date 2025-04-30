// ReviewList.js
import React from 'react';
import Review from './Review';
import '../styles/styleefs.css';

const ReviewList = ({ reviews, overallRating, totalReviews }) => {
  return (
    <div className="review-list">
      <h2 className="review-list-title">Customer Review</h2>
      <div className="review-list-summary">
        <div className="review-list-stars">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={`public/external/star${index + 1}3775-${index === 0 ? '5icj' : index === 1 ? 't55k' : index === 2 ? '618c' : index === 3 ? 'b41x' : 'dr1'}.svg`}
              alt={`Star ${index + 1}`}
              className="review-list-star"
            />
          ))}
        </div>
        <div className="review-list-stats">
          <span className="review-list-rating">{overallRating}</span>
          <span className="review-list-total">{totalReviews} reviews</span>
        </div>
      </div>
      <div className="review-list-categories">
        <div className="review-category">
          <span>Guide</span>
          <span>4.8</span>
          <div className="review-progress">
            <img src="public/external/rectangle1773777-33s-200h.png" alt="Progress" className="review-progress-bar" />
          </div>
        </div>
        <div className="review-category">
          <span>Transportation</span>
          <span>3.0</span>
          <div className="review-progress">
            <img src="public/external/rectangle1773777-v0boc-200h.png" alt="Progress" className="review-progress-bar" />
          </div>
        </div>
        <div className="review-category">
          <span>Value for money</span>
          <span>4.5</span>
          <div className="review-progress">
            <img src="public/external/rectangle1773778-s58f-200h.png" alt="Progress" className="review-progress-bar" />
          </div>
        </div>
        <div className="review-category">
          <span>Safety</span>
          <span>4.0</span>
          <div className="review-progress">
            <img src="public/external/rectangle1773778-9z9l-200h.png" alt="Progress" className="review-progress-bar" />
          </div>
        </div>
      </div>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <Review
            key={index}
            user={review.user}
            date={review.date}
            rating={review.rating}
            comment={review.comment}
            summary={review.summary}
            helpful={review.helpful}
          />
        ))}
      </div>
      <div className="review-list-footer">
        <div className="review-list-pagination">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={`public/external/rectangle18${index + 1}3793-${index === 0 ? 'm8vi' : index === 1 ? 'sf9n' : index === 2 ? 'l1uf' : index === 3 ? 'uf4u' : 'ynxb'}-200h.png`}
              alt={`Page ${index + 1}`}
              className="review-list-page"
            />
          ))}
        </div>
        <span className="review-list-view-more">View More Comments</span>
      </div>
    </div>
  );
};

export default ReviewList;