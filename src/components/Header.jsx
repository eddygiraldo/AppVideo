import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='logo' src={logo} alt='Logo Platzi Video' />
      </Link>
      <nav className='menu'>
        <div className='menu-profile'>
          {
            hasUser ?
              (
                <img src={gravatar(user.email)} alt={user.email} />
              ) :
              (
                <img src={userIcon} alt='Icono' />
              )
          }
          <span>Profile</span>
        </div>
        <div className='menu-items'>
          <ul>
            {
              hasUser ?
                (
                  <li>
                    <Link to='/login'>
                      {user.name}
                    </Link>
                  </li>
                ) : null
            }
            {
              hasUser ?
                (
                  <li>
                    <a href='#logout' onClick={handleLogout}>
                      Cerrar sesión
                    </a>
                  </li>
                ) :
                (
                  <li>
                    <Link to='/login'>
                      Iniciar sesión
                    </Link>
                  </li>
                )
            }

            <li>
              <Link to='/register'>
                Registrate
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
