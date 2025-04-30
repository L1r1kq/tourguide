import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/reset.css";
import "../styles/styles.css";

function ActivityCard({ id, image, title, duration, reviews, price }) {
  console.log("ActivityCard rendering with ID:", id); // Отладка
  return (
    <Link to={`/tour/${id}`} className="activity-card">
      <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>Duration: {duration}</p>
        <p>Reviews: {reviews}</p>
        <p>Price: {price}</p>
      </div>
    </Link>
  );
}

export default ActivityCard;