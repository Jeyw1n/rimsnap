import React, { useEffect, useState } from "react";
import "./menu_blocks.css";
import "./animation.css";
import rimsPicture from "./rims_picture.png";

const MenuBlocks = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Устанавливаем видимость в true через 700 мс после монтирования компонента
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании
  }, []);

  return (
    <div className={`menu-blocks ${visible ? "fade-in visible" : "fade-in"} mid-block`}>
      <div
        className="menu-block-with-img"
        style={{
          backgroundImage: `linear-gradient(-45deg, rgba(0, 0, 0, 0.34) 0%, rgb(16, 16, 16) 60%), url(${rimsPicture})`
        }}
      >
        <h3>Широкий выбор дисков</h3>
        <p>Мы предлагаем широкий ассортимент автомобильных дисков для всех типов автомобилей. Найдите идеальные диски для вашего автомобиля и подчеркните его стиль.</p>
      </div>
      <div className="pulsating-gradient">
        <h3>Примерьте диски с помощью AI</h3>
        <p>Загрузите фото вашего автомобиля и выберите диски, чтобы увидеть, как они будут выглядеть на вашем авто!</p>
      </div>
    </div>
  );
};

export default MenuBlocks;
