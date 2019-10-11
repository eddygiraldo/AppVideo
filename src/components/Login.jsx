import React from 'react';
import '../assets/styles/components/Login.scss';

const Login = () => (

  <section className='login'>
    <div className='login-container'>
      <h2>Inicia sesión</h2>
      <form className='login-container-form'>
        <input type='text' className='input' placeholder='Correo' />
        <input type='password' className='input' placeholder='Contraseña' />
        <button type='button' className='button'>Iniciar sesión</button>

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
        <a href='/'>
          Registrate
        </a>
      </p>
    </div>
  </section>

);

export default Login;
