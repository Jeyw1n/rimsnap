import './header.css';

const Header = () => {
  var navbar = (
    <div className="navbar">
      <ul className='nav-left'>
        <li><a href="#home" className='current'>Главная</a></li>
        <li><a href="#catalog">Каталог</a></li>
        <li><a href="#about">О нас</a></li>
      </ul>
      <ul className='nav-right'>
        <li><a href="#cart">Корзина</a></li>
        <li><a href="#profile">Профиль</a></li>
      </ul>
    </div>
  );

  return navbar;
}

export default Header;