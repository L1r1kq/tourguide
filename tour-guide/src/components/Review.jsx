// Review.js
import React from 'react';
import '../styles/styleefs.css';

const Review = ({ user, date, rating, comment, summary, helpful }) => {
  return (
    <div className="review">
      <div className="review-header">
        <img src="public/external/ellipse603779-ehdr-200h.png" alt="User Avatar" className="review-avatar" />
        <div className="review-info">
          <span className="review-date">{date}</span>
          <div className="review-stars">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={`public/external/star${index + 1}3779-${index === 0 ? 'f7ie' : index === 1 ? 'hcso' : index === 2 ? 'pjqq' : index === 3 ? 'knj9' : 'n3h'}.svg`}
                alt={`Star ${index + 1}`}
                className="review-star"
              />
            ))}
          </div>
          <div className="review-user">
            <span className="review-username">{user}</span>
            <img src="public/external/vector3780-w5c.svg" alt="Verified" className="review-verified" />
          </div>
        </div>
      </div>
      <div className="review-content">
        <span className="review-comment">{comment}</span>
        <div className="review-summary">
          <span className="review-summary-text">{summary}</span>
          <div className="review-helpful">
            <span>Helpful?</span>
            <span className="review-helpful-answer">{helpful ? 'Yes' : 'No'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;