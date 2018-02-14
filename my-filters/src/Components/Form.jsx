import React from 'react';
import './Form.css';

function Form() {
  return (
    <form className="signup-form mds-theme--dark">
      <input className="signup-form__input" type="text" name="firstname" placeholder="Имя" />
      <input className="signup-form__input" type="text" name="lastname" placeholder="Фамилия" />
      <input className="signup-form__input" type="email" name="email" placeholder="Email" />
      <input className="signup-form__input" type="password" name="password" placeholder="Пароль" />
      <button className="signup-form__button">Зарегистрироваться</button>
    </form>
  );
}

export default Form;
