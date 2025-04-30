import React, { useState } from "react";
import "../styles/reset1.css";
import "../styles/index.css";
import "../styles/variables.css";
import PlacesContainer from "./PlacesContainer";
import FiltersContainer from "./FiltersContainer";

function Container() {
  const [filters, setFilters] = useState({
    theme: [],
    duration: [],
    destination: [],
  });

  return (
    <div className="container">
      <FiltersContainer onFilterChange={setFilters} />
      <PlacesContainer filters={filters} />
    </div>
  );
}

export default Container;