import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/auth">Authentication</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">About Us</Link>
    </nav>
  );
}

export default Navigation;