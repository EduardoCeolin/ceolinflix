import React from "react";

// import { Container } from './styles';

function FormField({ label, name, type, value, onChange }) {
  return (
    <div>
      <label>
        {label}
        {type === "textarea" ? (
          <textarea type={type} value={value} name={name} onChange={onChange} />
        ) : (
          <input type={type} value={value} name={name} onChange={onChange} />
        )}
      </label>
    </div>
  );
}

export default FormField;
