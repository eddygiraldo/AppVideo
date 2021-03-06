import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <div className='login-container'>
        <h2>Inicia sesión</h2>
        <form className='login-container-form' onSubmit={handleSubmit}>
          <input
            name='email'
            type='text'
            className='input'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            type='password'
            className='input'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button type='submit' className='button'>Iniciar sesión</button>

          <div className='login-container-remember'>
            <label htmlFor='remember'>
              <input id='remember' type='checkbox' value='chexbox' />
              {'Recuérdame'}
            </label>
            <a href='/'>Olvidé mi constraseña</a>
          </div>
        </form>

        <div className='login-container-social-media'>
          <div>
            <img src='https://raw.githubusercontent.com/platzi/curso-frontend-escuelajs/maquetacion-login-CSS-1/maquetacion-login-CSS-1/assets/google-icon.png' alt='' />
            Inicia sesión con Google
          </div>
          <div>
            <img src='https://raw.githubusercontent.com/platzi/curso-frontend-escuelajs/maquetacion-login-CSS-1/maquetacion-login-CSS-1/assets/twitter-icon.png' alt='' />
            Inicia sesión con Twitter
          </div>
        </div>
        <p className='login-container-register'>
          No tienes ninguna cuenta
          <a href='/register'>
              Registrate
          </a>
        </p>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
