import React from 'react';
import { Link, useNavigate } from 'react-router';
import './header.css';

const Header = ({ currentPage }) => {
  const navigate = useNavigate();
  
  // Проверка авторизации через наличие токена
  const isAuthenticated = !!localStorage.getItem('access_token');

  // Очистка данных и перенаправление при выходе
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/auth'; // Перенаправляем на страницу входа
  };

  return (
    <>
    <div style={{marginTop: 72}}></div>
    <div className={"navbar mid-block"}>
      <ul className='nav-left'>
        {/* Основные ссылки */}
        <li><Link to="/" className={currentPage === 'home' ? 'current' : ''}>Главная</Link></li>
        <li><Link to="/catalog" className={currentPage === 'catalog' ? 'current' : ''}>Каталог</Link></li>
        <li><Link to="/about" className={currentPage === 'about' ? 'current' : ''}>О нас</Link></li>
      </ul>

      <ul className='nav-right'>
        {/* Ссылки пользователя */}
        {isAuthenticated && (
          <li><Link to="/cart" className={currentPage === 'cart' ? 'current' : ''}>Корзина</Link></li>
        )}
        
        {isAuthenticated ? (
          <>
            <li><Link to="/profile" className={currentPage === 'profile' ? 'current' : ''}>Профиль</Link></li>
            <li><Link onClick={handleLogout}>Выйти</Link></li>
          </>
        ) : (
          <li><Link to="/auth" className={currentPage === 'auth' ? 'current' : ''}>Войти</Link></li>
        )}
      </ul>
    </div>
    </>
  );
};

export default Header;