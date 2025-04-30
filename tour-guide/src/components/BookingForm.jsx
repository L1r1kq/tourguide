import React, { useState } from 'react';

const BookingForm = ({ price, onConfirm }) => {
  const [fromDate, setFromDate] = useState('10/12/2021');
  const [toDate, setToDate] = useState('10/12/2021');
  const [guests, setGuests] = useState('2 adults');

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({ fromDate, toDate, guests });
  };

  return (
    <div className="booking-form">
      <h2 className="booking-form-title">Booking</h2>
      <span className="booking-form-price">${price}</span>
      <form onSubmit={handleSubmit}>
        <div className="booking-form-field">
          <label htmlFor="from-date">From</label> {/* Заменяем for на htmlFor */}
          <div className="booking-form-input">
            <span>{fromDate}</span>
            <img src="public/icons/bxbxcalendar3795-tagg.svg" alt="Calendar" className="booking-form-icon" />
          </div>
        </div>
        <div className="booking-form-field">
          <label htmlFor="to-date">To</label> {/* Заменяем for на htmlFor */}
          <div className="booking-form-input">
            <span>{toDate}</span>
            <img src="public/icons/bxbxcalendar3795-mnk8.svg" alt="Calendar" className="booking-form-icon" />
          </div>
        </div>
        <div className="booking-form-field">
          <label htmlFor="guests">No. of guest</label> {/* Заменяем for на htmlFor */}
          <div className="booking-form-input">
            <span>{guests}</span>
            <img src="public/icons/antdesigncaretdownoutlined3796-ahke.svg" alt="Dropdown" className="booking-form-icon" />
          </div>
        </div>
        <button type="submit" className="booking-form-confirm">Confirm Booking</button>
      </form>
      <div className="booking-form-actions">
        <div className="booking-form-action">
          <img src="public/icons/vector3796-hs8c.svg" alt="Wishlist" className="booking-form-action-icon" />
          <span>Save to wishlist</span>
        </div>
        <div className="booking-form-action">
          <img src="public/icons/bxbxsshare3797-x3r.svg" alt="Share" className="booking-form-action-icon" />
          <span>Share the activity</span>
        </div>
      </div>
      <img src="public/icons/rectangle1873797-xaxh-200h.png" alt="Divider" className="booking-form-divider" />
      <span className="booking-form-subtotal">Subtotal</span>
    </div>
  );
};

export default BookingForm;