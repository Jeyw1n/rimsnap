import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./styles/menu-blocks.css";
import "./styles/animation.css";
import rimsPicture from "./images/rims_picture.png";

const MenuBlocks = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleBlockClick = () => {
    window.location.href = "/catalog"; // Переход на страницу каталога
  };

  return (
    <div className={`menu-blocks ${visible ? "fade-in visible" : "fade-in"} mid-block`}>
      <div
        className="menu-block-with-img"
        style={{
          backgroundImage: `linear-gradient(-45deg, rgba(0, 0, 0, 0.34) 0%, rgb(16, 16, 16) 60%), url(${rimsPicture})`
        }}
        onClick={handleBlockClick} // Обработчик клика
      >
        <h3>Широкий выбор дисков</h3>
        <p>Мы предлагаем широкий ассортимент автомобильных дисков для всех типов автомобилей. Найдите идеальные диски для вашего автомобиля и подчеркните его стиль.</p>
      </div>
      <div className="pulsating-gradient" onClick={handleBlockClick}> {/* Обработчик клика */}
        <h3>Бесплатная установка!</h3>
        <p>При покупке комплекта дисков — бесплатная установка! Не упустите шанс сделать свой автомобиль уникальным!</p>
      </div>
    </div>
  );
};


export default MenuBlocks;
