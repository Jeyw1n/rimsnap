import React from 'react';
import Header from '../../components/header/Header';
import './styles/AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <Header currentPage={"about"}/> {/* Заголовок */}
      <div className="about-us-content mid-block">
        <h1>О нас</h1>
        <p>Добро пожаловать в наш магазин! Мы стремимся предоставлять лучшие продукты для наших клиентов.</p>
        <p>Наш магазин был основан в 2025 году с миссией объединить качество и доступность.</p>
        <h2>Наше местоположение</h2>
        <div className="map-container">
          <iframe width="780" height="430" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&t=m&z=13&ie=UTF8&iwloc=B&output=embed"></iframe>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
