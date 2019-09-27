import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <img className='logo' src={logo} alt='Logo Platzi Video' />
    <nav className='menu'>
      <div className='menu-profile'>
        <img src={userIcon} alt='Icono' />
        <span>Profile</span>
      </div>
      <div className='menu-items'>
        <ul>
          <li>
            <a href='/'>Cuentas</a>
          </li>
          <li>
            <a href='/'>Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
