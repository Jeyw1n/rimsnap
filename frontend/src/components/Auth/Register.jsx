import React, { useState } from 'react';
import axios from 'axios'; // Подключаем axios для отправки запросов
import { useNavigate } from 'react-router';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // Состояние для ошибок
  const navigate = useNavigate(); // Хук для навигации

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
      setError('Пароли не совпадают!');
      return;
    }

    try {
      // Отправляем данные на бэкенд для регистрации
      const registerResponse = await axios.post('http://localhost:8000/api/accounts/register/', {
        username,
        email,
        password,
      });
      console.log('Register response:', registerResponse.data); // Log the response

      // Сохраняем токен в localStorage
      const { token } = registerResponse.data;
      localStorage.setItem('token', token);

      // Перенаправляем пользователя на главную страницу
      navigate('/');
    } catch (err) {
      // Обрабатываем ошибку
      const errorMessage = err.response ? JSON.stringify(err.response.data, null, 2) : err.message;
      setError(`Ошибка регистрации: ${errorMessage}`);
      console.error('Ошибка регистрации:', errorMessage); // Log the error
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
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <div className='input-block'>
        <label>Повтор пароля:</label><br />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Отображаем ошибку, если есть */}
      <br />
      <button className="submit-button" type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Register;