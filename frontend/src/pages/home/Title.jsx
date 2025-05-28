import React, { useEffect, useState } from "react";
import './styles/title.css'
import "./styles/animation.css";
import carAnimation from "./images/car_animation.webp";

const Title = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Устанавливаем видимость в true через 700 мс после монтирования компонента
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании
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