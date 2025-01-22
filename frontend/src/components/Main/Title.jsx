import React, { useEffect, useState } from "react";
import './title.css'
import "./animation.css";
import carAnimation from "./car_animation.webp";

const Title = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setVisible(true); // Устанавливаем видимость в true после загрузки страницы
    };

    window.addEventListener('load', handleLoad); // Добавляем обработчик события load

    return () => {
      window.removeEventListener('load', handleLoad); // Удаляем обработчик при размонтировании
    };
  }, []);

  return (
    <div className="title-block">
      <h1>RIMSNAP</h1>
      <img 
        src={carAnimation} 
        alt="Animated car" 
        className={`fade-in-left ${visible ? 'visible' : ''}`} 
      />
    </div>
  );
}

export default Title;