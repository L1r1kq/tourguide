import React from "react";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';
import FilterItem from "./FilterItem";

function Filter({ name, items, onChange, selectedItems }) {
  return (
    <div className="filters">
      <div className="filters__top">
        <h3 className="filters__title">{name}</h3>
      </div>
      <div className="filters__bottom">
        {items.map((item) => {
          const isChecked = selectedItems.includes(item.title);
          console.log(`Filter ${name}: Checking if ${item.title} is in selectedItems:`, isChecked); // Отладка

          return (
            <FilterItem
              key={item.title}
              title={item.title}
              onToggle={() => {
                console.log(`Filter ${name}: Toggling ${item.title}`); // Отладка
                onChange(item.title);
              }}
              isChecked={isChecked}
            />
          );
        })}
        {items.length >= 7 && (
          <a href="#" className="filters__link" onClick={(e) => e.preventDefault()}>
            Show More Destinations
          </a>
        )}
      </div>
    </div>
  );
}

export default Filter;