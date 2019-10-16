import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='logo' src={logo} alt='Logo Platzi Video' />
    </Link>
    <nav className='menu'>
      <div className='menu-profile'>
        <img src={userIcon} alt='Icono' />
        <span>Profile</span>
      </div>
      <div className='menu-items'>
        <ul>
          <li>
            <a href='/login'>Login</a>
          </li>
          <li>
            <a href='/'>Registrate</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
