import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin); // Переключаем между входом и регистрацией
  };

  const title = isLogin ? 'Вход' : 'Регистрация'; // Определяем заголовок в зависимости от состояния

  return (
    <div>
      <h1>{title}</h1> {/* Заголовок с эффектом появления */}
      <div>
        <button onClick={toggleForm}>
          {isLogin ? 'Перейти к регистрации' : 'Перейти к входу'}
        </button>
      </div>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default Auth;
