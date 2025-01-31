import './header.css';

const Header = ({ currentPage }) => {
  return (
    <div className={"navbar mid-block"}>
      <ul className='nav-left'>
        <li><a href="/" className={currentPage === 'home' ? 'current' : ''}>Главная</a></li>
        <li><a href="catalog" className={currentPage === 'catalog' ? 'current' : ''}>Каталог</a></li>
        <li><a href="about" className={currentPage === 'about' ? 'current' : ''}>О нас</a></li>
      </ul>
      <ul className='nav-right'>
        <li><a href="auth" className={currentPage === 'cart' ? 'current' : ''}>Корзина</a></li>
        <li><a href="profile" className={currentPage === 'profile' ? 'current' : ''}>Профиль</a></li>
      </ul>
    </div>
  );
}

export default Header;
