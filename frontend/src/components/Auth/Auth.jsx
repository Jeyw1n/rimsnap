import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import './auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin); // Переключаем между входом и регистрацией
  };

  const title = isLogin ? 'Вход' : 'Регистрация'; // Определяем заголовок в зависимости от состояния

  return (
    <div className='mid-block'>
      <h1>{title}</h1>
      {isLogin ? <Login /> : <Register />}
      <br />
      <span onClick={toggleForm} className='toggle-form'>
        {isLogin ? 'Перейти к регистрации' : 'Перейти к входу'}
      </span>
    </div>
  );
};

export default Auth;
