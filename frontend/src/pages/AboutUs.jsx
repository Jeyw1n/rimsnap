import React from 'react';
import Header from '../components/Header';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Header /> {/* Заголовок */}
      <div className="about-us-content">
        <h1>О нас</h1>
        <p>Добро пожаловать в наш магазин! Мы стремимся предоставлять лучшие продукты для наших клиентов.</p>
        <p>Наш магазин был основан в 2021 году с миссией объединить качество и доступность.</p>
        <h2>Наше местоположение</h2>
        <div className="map-container">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=1600+Amphitheatre+Parkway,+Mountain+View,+CA"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
