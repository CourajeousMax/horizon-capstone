import React from "react";
import "./FormInput.scss";
const FormInput = ({ label, name, type }) => {
  return (
    <div>
      <div className="input__box">
        <label className="input__label">{label}</label>
        <input type={type} name={name} placeholder={label} className="input__input" />
      </div>
    </div>
  );
};

export default FormInput;
