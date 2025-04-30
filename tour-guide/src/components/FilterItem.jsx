import React from "react";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';

function FilterItem({ title, onToggle, isChecked }) {
  return (
    <label className="filters__label">
      <input
        type="checkbox"
        onChange={(e) => {
          console.log(`FilterItem: Changing ${title}, new checked state: ${e.target.checked}`); // Отладка
          onToggle();
        }}
        checked={isChecked}
      />
      {title}
    </label>
  );
}

export default FilterItem;