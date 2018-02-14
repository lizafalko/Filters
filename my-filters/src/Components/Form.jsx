import React from 'react';
import './Form.css';
import Input from './Input';

function Form({ onSubmit }) {
  return (
    <form className="signup-form mds-theme--dark" onSubmit={onSubmit}>
      <Input type="text" name="firstname" placeholder="Имя" />
      <Input className="signup-form__input" type="text" name="lastname" placeholder="Фамилия" />
      <Input className="signup-form__input" type="email" name="email" placeholder="Email" />
      <Input className="signup-form__input" type="password" name="password" placeholder="Пароль" />
      <button type="submit" className="signup-form__button">Зарегистрироваться</button>
    </form>
  );
}

export default Form;
