import React, { useState, useEffect } from "react";
import "../styles/index.css";
import "../styles/reset1.css";
import "../styles/variables.css";
import Places from "./Places";

function PlacesContainer({ filters }) {
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [allPlaces, setAllPlaces] = useState([]);

  // В PlacesContainer.js
useEffect(() => {
  const fetchTours = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/tours/all");
      const data = await response.json();
      setAllPlaces(data);
      setFilteredPlaces(data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  fetchTours();
}, []);

// Фильтрация
useEffect(() => {
  const applyFilters = async () => {
    try {
      const queryParams = new URLSearchParams();
      if (filters.theme && filters.theme.length > 0) {
        filters.theme.forEach((theme) => queryParams.append("theme", theme));
      }
      if (filters.duration && filters.duration.length > 0) {
        filters.duration.forEach((duration) =>
          queryParams.append("duration", duration)
        );
      }
      if (filters.destination && filters.destination.length > 0) {
        filters.destination.forEach((destination) =>
          queryParams.append("destination", destination)
        );
      }

      const response = await fetch(
        `http://localhost:5110/api/tours/filter?${queryParams.toString()}`
      );
      const data = await response.json();
      setFilteredPlaces(data);
    } catch (error) {
      console.error("Error filtering tours:", error);
      setFilteredPlaces(allPlaces);
    }
  };

  applyFilters();
}, [filters.theme, filters.duration, filters.destination]);

  return (
    <div className="places__container">
      <Places places={filteredPlaces} />
      <button className="places__button">Load More</button>
    </div>
  );
}

export default PlacesContainer;