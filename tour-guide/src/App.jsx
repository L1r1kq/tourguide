import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./containers/Main"; // Главная страница с фильтрами и местами
import ActivitiesContainer from "./containers/ActivitiesContainer"; // Секция "Outside The City Specials"
import Footer from "./components/Footer";
import Wrapper from "./containers/Wrapper"; // Предположительно, для галереи
import TourDetail from "./containers/TourDetail"; // Страница деталей тура
import CityTourContainer from "./containers/CityTourContainer";

// Компонент Layout для обертки страниц
function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main> {/* Сюда будет рендериться компонент маршрута */}
      <Footer />
    </div>
  );
}

// Основное приложение с маршрутизацией
function App() {
  // !!! ВАЖНО: Здесь должен быть источник данных для TourDetail !!!
  // Например, загрузка всех туров или передача через Context/Props
  // Пока оставим как есть, но это нужно будет исправить для реального приложения
  const allToursData = [
     // ... ПОЛНЫЙ список всех туров/активностей с УНИКАЛЬНЫМИ ID ...
      {
        id: 0,
        image: "./img/cart_1_tim.png", // Пути лучше сделать абсолютными или импортировать
        title: "Alaska: Westminster to Greenwich River Thames",
        duration: "2 hours",
        reviews: 584,
        price: "$35.00",
        description: "Explore the scenic beauty...",
        type: "Water Activities",
        destination: "Biscayne Bay",
      },
      {
        id: 1,
        image: "../images/place2.png", // Пути лучше сделать абсолютными или импортировать
        title: "Everglades Adventure",
        duration: "Full day (7+ hours)",
        reviews: 320,
        price: "$75.00",
        description: "A full-day adventure...",
        type: "Nature",
        destination: "Everglades National Park",
      },
      // ... другие туры/активности с ID 2, 3, 4 и т.д.
  ];
 // То же самое касается данных для галереи в Wrapper
 const galleryImages = [ /* ... данные для галереи ... */ ];

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Маршрут для главной страницы */}
          <Route path="/" element={<Main />} />

          {/* Маршрут для "Outside Specials" (если это отдельная страница) */}
          {/* Если ActivitiesContainer является частью Main, этот Route не нужен */}
          <Route path="/activities" element={<ActivitiesContainer />} />

           {/* Маршрут для Галереи */}
           <Route path="/gallery" element={<CityTourContainer />} /> {/* Передаем данные! */}

          {/* Маршрут для страницы деталей тура */}
          {/* Передаем данные всех туров в TourDetail через props */}
          <Route path="/tour/:id" element={<TourDetail allTours={allToursData} />} />

          {/* Можно добавить маршрут 404 Not Found */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;