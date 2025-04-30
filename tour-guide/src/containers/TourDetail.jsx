import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TourDetail() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    comment: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchTour = async () => {
      try {
        console.log(`Fetching tour with ID: ${id}`);
        const response = await fetch(`http://localhost:5110/api/Tours/${id}`); // Исправлен порт и регистр
        console.log(`Response status: ${response.status}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Tour data:", data);
        setTour(data);
      } catch (error) {
        console.error("Error fetching tour:", error);
        setError(error.message);
        setTour(null);
      }
    };

    fetchTour();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.fullName.split(" ").filter(Boolean).length < 2) {
      setMessage("Full name must contain at least two words");
      return;
    }
    if (!formData.country) {
      setMessage("Country is required");
      return;
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage("Invalid email format");
      return;
    }
    if (!formData.phone) {
      setMessage("Phone number is required");
      return;
    }
    try {
      const response = await fetch("http://localhost:5110/api/applications", { // Исправлен порт
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          comment: `Tour: ${tour?.title || "Unknown Tour"}, ${formData.comment}`,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Booking request sent successfully! Check your email for confirmation.");
        setShowForm(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          country: "",
          comment: "",
        });
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error sending booking request:", error);
      setMessage("Failed to send booking request. Please try again later.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tour-detail">
      <h1>{tour.title}</h1>
      <img
        src={tour.image.startsWith("http") ? tour.image : `/images/${tour.image.split("/").pop()}`}
        alt={tour.title}
      />
      <p>Type: {tour.type}</p>
      <p>Duration: {tour.duration}</p>
      <p>Cost: {tour.cost}</p>
      <p>Reviews: {tour.reviews}</p>
      <p>Destination: {tour.destination}</p>

      <button onClick={() => setShowForm(true)}>Book Now</button>

      {showForm && (
        <div className="booking-form">
          <h2>Book This Tour</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Full Name (First and Last):</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Comment:</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Submit Booking</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
}

export default TourDetail;