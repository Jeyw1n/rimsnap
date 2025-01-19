import React from 'react';
import './title.css'
import carAnimation from "./car_animation.webp";

const Title = () => {
  return (
    <div className="title-block">
      <h1>RIMSNAP</h1>
      <img src={carAnimation} alt="Animated car" />
    </div>
  );
}

export default Title;