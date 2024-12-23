// src/components/common/Input/Input.js
import React from 'react';
import './Input.css';

const Input = ({ label, id, type = "text", onChange, value, ...rest }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Input;