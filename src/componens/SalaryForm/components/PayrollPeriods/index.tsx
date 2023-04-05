import React from "react";
import { Field } from "react-final-form";
import { Popup } from "./Popup";

export type PayrollPeriodType =
  | "perMonth"
  | "minimumWage"
  | "perDay"
  | "perHour";

const PayrollPeriodsList: PayrollPeriodType[] = [
  "perMonth",
  "minimumWage",
  "perDay",
  "perHour",
];

const PayrollPeriodLabels = [
  "Оклад за месяц",
  "МРОТ",
  "Оплата за день",
  "Оплата за час",
];

interface PayrollPeriodsProps {
  inputName: string;
}

export const PayrollPeriods: React.FC<PayrollPeriodsProps> = ({
  inputName,
}) => {
  return (
    <div className="custom-radio-form">
      {PayrollPeriodsList.map((period, index) => (
        <div className="form-check custom-form-radio-field" key={period}>
          <Field
            name={inputName}
            component="input"
            type="radio"
            value={period}
            id={period}
            className="form-check-input"
          />
          <label htmlFor={period} className="form-check-label">
            {PayrollPeriodLabels[index]}
            {period === "minimumWage" && <Popup />}
          </label>
        </div>
      ))}
    </div>
  );
};
