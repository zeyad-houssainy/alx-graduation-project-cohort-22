// src/components/common/Button/Button.js
import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = "button", ...rest }) => {
  return (
    <button className="button" onClick={onClick} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;