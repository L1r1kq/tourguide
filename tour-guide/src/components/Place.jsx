import React from "react";
import { Link } from "react-router-dom";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';

function Place({ id, image, type, reviews, title, duration, cost }) {
  return (
    <Link to={`/tour/${id}`} className="places__item-link">
      <li className="places__item">
        <div className="places__item--left">
          <img className="places__img" src={image} alt={title} />
          <div className="places__info">
            <div className="places__info--top">
              <span className="places__type">{type}</span>
              <img src="icons/stars.svg" alt="stars" />
              <span className="places__reviews">({reviews} reviews)</span>
            </div>
            <h2 className="places__title">{title}</h2>
            <div className="places__bottom">
              <div className="places__info-item">
                <img src="icons/clock.svg" alt="duration" />
                <span className="places__info-item--text">{duration}</span>
              </div>
              <div className="places__info-item">
                <img src="icons/transport.svg" alt="transport" />
                <span className="places__info-item--text">Transport</span>
              </div>
              <div className="places__info-item">
                <img src="icons/family.svg" alt="family" />
                <span className="places__info-item--text">Family Plan</span>
              </div>
            </div>
          </div>
        </div>
        <div className="places__item--right">
          <h3 className="places__cost">{cost}</h3>
          <p className="places__reviews">per person</p>
        </div>
      </li>
    </Link>
  );
}

export default Place;