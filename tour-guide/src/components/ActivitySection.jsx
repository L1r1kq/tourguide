// ActivitySection.js
import React from 'react';

const ActivitySection = ({ activities, includes, notIncludes, safety, details }) => {
  return (
    <div className="activity-section">
      <h2 className="activity-section-title">Activity</h2>
      <h3 className="activity-section-subtitle">What is included / not included</h3>
      <h3 className="activity-section-subheader">What you will do</h3>
      <ul className="activity-section-list">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
      <h3 className="activity-section-subheader">Includes</h3>
      <ul className="activity-section-list">
        {includes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="activity-section-subheader">Not Includes</h3>
      <ul className="activity-section-list">
        {notIncludes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="activity-section-subheader">Safety</h3>
      <ul className="activity-section-list">
        {safety.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="activity-section-subheader">Details</h3>
      <div className="activity-section-details">
        <div className="activity-section-detail">
          <span className="activity-section-detail-label">Language</span>
          <span>{details.languages.join(', ')}</span>
        </div>
        <div className="activity-section-detail">
          <span className="activity-section-detail-label">Meeting point address</span>
          <span>{details.meetingPoint}</span>
          <span className="activity-section-detail-link">Open in Google Maps</span>
        </div>
        <div className="activity-section-detail">
          <span className="activity-section-detail-label">Duration</span>
          <span>{details.duration}</span>
        </div>
        <div className="activity-section-detail">
          <span className="activity-section-detail-label">Number of people</span>
          <span>{details.numberOfPeople}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivitySection;