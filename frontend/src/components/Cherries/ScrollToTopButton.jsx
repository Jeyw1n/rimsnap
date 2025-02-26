import React, { useState, useEffect } from "react";
import "./scroll-to-top-button.css"; // Стили для кнопки

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Функция для прокрутки страницы вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Плавная прокрутка
    });
  };

  // Отслеживаем прокрутку страницы
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Если кнопка не видна, не рендерим её
  if (!isVisible) {
    return null;
  }

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      ↑
    </button>
  );
};

export default ScrollToTopButton;