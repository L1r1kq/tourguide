import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // Import from react-router-dom
import "../styles/index.css";
import "../styles/reset1.css";
import "../styles/variables.css";
import Availability from "../components/Availability";
import Filter from "../components/Filter";

function FiltersContainer({ onFilterChange }) {
  const [searchParams, setSearchParams] = useSearchParams(); // Hook to manage URL query params
  const [selectedFilters, setSelectedFilters] = useState({
    theme: [],
    duration: [],
    destination: [],
  });

  const filters1 = [
    { title: "Water Activities" },
    { title: "Nature" },
    { title: "Cultural" },
    { title: "Adventure" },
    { title: "Historical" },
    { title: "Food & Drink" },
  ];
  const filters2 = [
    { title: "2 hours" },
    { title: "Half day" },
    { title: "Full day" },
    { title: "Multi-day" },
    { title: "Evening" },
  ];
  const filters3 = [
    { title: "Mexico" },
    { title: "Haiti" },
    { title: "Russia" },
  ];

  // Initialize filters from URL on component mount
  useEffect(() => {
    const theme = searchParams.get("theme")?.split(",") || [];
    const duration = searchParams.get("duration")?.split(",") || [];
    const destination = searchParams.get("destination")?.split(",") || [];

    setSelectedFilters({
      theme: theme.filter(Boolean), // Remove empty strings
      duration: duration.filter(Boolean),
      destination: destination.filter(Boolean),
    });
  }, [searchParams]);

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => {
      const updated = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];

      const newFilters = { ...prev, [category]: updated };

      // Update URL search params
      const params = {};
      if (newFilters.theme.length > 0) params.theme = newFilters.theme.join(",");
      if (newFilters.duration.length > 0) params.duration = newFilters.duration.join(",");
      if (newFilters.destination.length > 0) params.destination = newFilters.destination.join(",");
      setSearchParams(params);

      // Notify parent component of filter change
      onFilterChange(newFilters);

      return newFilters;
    });
  };

  return (
    <div className="filters-container">
      <Availability />
      <Filter
        name="Theme"
        items={filters1}
        onChange={(value) => handleFilterChange("theme", value)}
        selectedItems={selectedFilters.theme}
      />
      <Filter
        name="Duration"
        items={filters2}
        onChange={(value) => handleFilterChange("duration", value)}
        selectedItems={selectedFilters.duration}
      />
      <Filter
        name="Destination"
        items={filters3}
        onChange={(value) => handleFilterChange("destination", value)}
        selectedItems={selectedFilters.destination}
      />
    </div>
  );
}

export default FiltersContainer;