import React from "react";
import Place from "../components/Place";

function Places({ places }) {
  // Отладка: проверяем, что передается в places
  console.log("Places received:", places);

  return (
    <ul className="places">
      {places.map((place, index) => (
        <Place
          key={place.id || index} // Используем place.id, если есть, иначе index
          id={place.id !== undefined ? place.id : index}
          image={place.image}
          type={place.type}
          title={place.title}
          duration={place.duration}
          reviews={place.reviews}
          cost={place.cost}
        />
      ))}
    </ul>
  );
}

export default Places;