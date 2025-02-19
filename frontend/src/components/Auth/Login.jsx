import React, { useState } from 'react';
import axios from 'axios'; // Подключаем axios для отправки запросов
import { useNavigate } from 'react-router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Состояние для ошибок
  const navigate = useNavigate(); // Хук для навигации

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправляем данные на бэкенд
      const response = await axios.post('http://localhost:8000/api/token/', {
        username: username,
        password: password,
      });

      // Если авторизация успешна, сохраняем токен и перенаправляем пользователя
      const { access, refresh } = response.data;
      localStorage.setItem('access_token', access); // Сохраняем access токен
      localStorage.setItem('refresh_token', refresh); // Сохраняем refresh токен

      // Перенаправляем пользователя на главную страницу
      navigate('/');
    } catch (err) {
      // Обрабатываем ошибку
      setError('Неверное имя пользователя или пароль');
      console.error('Ошибка авторизации:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-block'>
        <label>Имя пользователя:</label><br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className='input-block'>
        <label>Пароль:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Отображаем ошибку, если есть */}
      <br />
      <button className="submit-button" type="submit">Войти</button>
    </form>
  );
};

export default Login;