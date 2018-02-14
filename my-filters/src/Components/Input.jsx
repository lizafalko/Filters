import React from 'react';
import './Form.css';

function Input({ type, name, placeholder }) {
  return (
    <input
      className="signup-form__input"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

export default Input;
