import React from 'react';
import { Link } from 'react-router'; // Используем Link вместо <a> для SPA
import './header.css';

const Header = ({ currentPage }) => {
  // Проверяем, авторизован ли пользователь
  const isAuthenticated = !!localStorage.getItem('access_token');

  return (
    <div className={"navbar mid-block"}>
      <ul className='nav-left'>
        <li>
          <Link to="/" className={currentPage === 'home' ? 'current' : ''}>Главная</Link>
        </li>
        <li>
          <Link to="/catalog" className={currentPage === 'catalog' ? 'current' : ''}>Каталог</Link>
        </li>
        <li>
          <Link to="/about" className={currentPage === 'about' ? 'current' : ''}>О нас</Link>
        </li>
      </ul>
      <ul className='nav-right'>
        <li>
          <Link to="/cart" className={currentPage === 'cart' ? 'current' : ''}>Корзина</Link>
        </li>
        <li>
          {isAuthenticated ? (
            <Link to="/profile" className={currentPage === 'profile' ? 'current' : ''}>Профиль</Link>
          ) : (
            <Link to="/auth" className={currentPage === 'auth' ? 'current' : ''}>Войти</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;