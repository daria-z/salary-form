import React from "react";
import { Field } from "react-final-form";

interface SalaryAmountFieldProps {
  inputName: string;
}

export const SalaryAmountField: React.FC<SalaryAmountFieldProps> = ({
  inputName,
}) => {
  return (
    <div className="salary-amount-wrapper">
      <Field
        name={inputName}
        component="input"
        type="text"
        placeholder="0"
        format={formatAmount}
        parse={parseAmount}
        onKeyPress={handleNumericInput}
        className="form-input-text"
      />
      <label htmlFor={inputName} className="form-input-label">₽</label>
    </div>
  );
};

const formatAmount = (value: string) => {
  if (!value) return "";
  const onlyNumbers = value.replace(/\D/g, "");
  const number = parseInt(onlyNumbers, 10);
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "decimal",
    minimumFractionDigits: 0,
  });
  return formatter.format(number);
};

const parseAmount = (value: string) => (value ? value.replace(/\s/g, "") : "");

const handleNumericInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Home",
    "End",
    "Tab",
  ];

  if (e.ctrlKey || e.metaKey || allowedKeys.includes(e.key)) {
    return;
  }

  if (/\D/.test(e.key)) {
    e.preventDefault();
  }
};
