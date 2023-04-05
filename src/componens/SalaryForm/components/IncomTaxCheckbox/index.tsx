import React from "react";
import { Field } from "react-final-form";

interface IncomTaxCheckboxProps {
  inputName: string;
}

export const IncomTaxCheckbox: React.FC<IncomTaxCheckboxProps> = ({inputName}) => {
  return (
    <div className="form-check form-switch custom-form-switch">
      <Field
        name={inputName}
        id={inputName}
        component="input"
        type="checkbox"
        role="switch"
        className="form-check-input"
      />

      <label className="form-check-label label-1" htmlFor={inputName}>
        Указать с НДФЛ
      </label>

      <label className="form-check-label label-2" htmlFor={inputName}>
        Без НДФЛ
      </label>
    </div>
  );
};
