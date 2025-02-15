import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    console.log('Register:', { username, email, password });
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
      <br />
      <button className="submit-button" type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Register;
