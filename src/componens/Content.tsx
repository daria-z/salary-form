import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import Form  from "react-bootstrap/Form";

import CheckboxInput from "./CheckboxInput";

import NumberInput from "./NumberInput";
import RadioInput from "./RadioInput";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type SalaryType = "perMonth" | "minimumWage" | "perDay" | "perHour";

interface Values {
  salaryType: SalaryType;
  personalIncomTax: boolean;
  payoutAmount: number;
}

const onSubmit = async (values: Values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

export const Content: React.FC = () => {
  return (
    <FinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
          <label>Сумма</label>
          <>
            <div>
              <Field<SalaryType>
                name="salaryType"
                component={RadioInput}
                type="radio"
                value="perMonth"
              />
              <label htmlFor="perMonth">Оклад за месяц</label>
            </div>
            <div>
              <Field<SalaryType>
                name="salaryType"
                component={RadioInput}
                type="radio"
                value="minimumWage"
              />
              <label htmlFor="minimumWage">
                Мрот <i>i</i>
              </label>
            </div>
            <div>
              <Field<SalaryType>
                name="salaryType"
                component={RadioInput}
                type="radio"
                value="perDay"
              />
              <label htmlFor="perDay">Оплата за день</label>
            </div>
            <div>
              <Field<SalaryType>
                name="salaryType"
                component={RadioInput}
                type="radio"
                value="perDay"
              />
              <label htmlFor="perHour">Оплата за час</label>
            </div>
          </>

          <div className="form-check form-switch">
            <label
              className="form-check-label"
              htmlFor="toggle-personalIncomTax"
            >
              Указать с НДФЛ
            </label>
            <Field<boolean> name="personalIncomTax" component={CheckboxInput} />
            <label htmlFor="toggle-personalIncomTax">Указать без НДФЛ</label>
          </div>
          <div>
            <label htmlFor="payoutAmount">Суммарный оклад</label>
            <Field<number>
              name="payoutAmount"
              component={NumberInput}
              placeholder="0"
              className="form-control"
            />
          </div>

          <pre>
            Тут должна быть модная плашка, в которую мы передадим данные
            paymentAmount и отформатируем в рубли:{" "}
            {JSON.stringify(values, undefined, 2)}
          </pre>
        </Form>
      )}
    />
  );
};
