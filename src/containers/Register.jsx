import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/components/Login.scss';

const Register = (props) => {

  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <div className='login-container'>
        <h2>Regístrate</h2>
        <form className='login-container-form' onSubmit={handleSubmit}>
          <input
            name='name'
            type='text'
            className='input'
            placeholder='Nombre'
            onChange={handleInput}
          />
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
          <button
            type='submit'
            className='button'
          >
            Registrarme
          </button>

        </form>

        <div className='login-container-social-media'>
          <div>
            <img src='https://raw.githubusercontent.com/platzi/curso-frontend-escuelajs/maquetacion-login-CSS-1/maquetacion-login-CSS-1/assets/google-icon.png' alt='' />
            Regístrate con Google
          </div>
          <div>
            <img src='https://raw.githubusercontent.com/platzi/curso-frontend-escuelajs/maquetacion-login-CSS-1/maquetacion-login-CSS-1/assets/twitter-icon.png' alt='' />
            Regístrate con Twitter
          </div>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
