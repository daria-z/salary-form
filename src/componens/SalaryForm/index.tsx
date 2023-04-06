import * as React from "react";
import { Form } from "react-final-form";
import { PayrollPeriods, PayrollPeriodType } from "./components/PayrollPeriods";
import { IncomTaxCheckbox } from "./components/IncomTaxCheckbox";
import { SalaryAmountField } from "./components/SalaryAmountField";
import { ClarificationTip } from "./components/ClarificationTip";

interface FormData {
  payrollPeriod: PayrollPeriodType;
  withoutTax: boolean;
  amount: string;
}

export const SalaryForm: React.FC = () => {
  const onSubmit = (values: FormData) => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={(onSubmit)}
      initialValues={{
        payrollPeriod: "perMonth",
        withoutTax: true,
        amount: "",
      }}
      render={({ handleSubmit, values }) => {
        const shouldShowClarification =
          values.payrollPeriod === "perMonth" &&
          parseInt(values.amount, 10) > 0;

        return (
          <form onSubmit={handleSubmit}>
            <label className="custom-form-title">Сумма</label>
            <div className="custom-form">
              <PayrollPeriods inputName="payrollPeriod" />
              <div className="form-inner-wrapper">
                <IncomTaxCheckbox inputName="withoutTax" />
                <SalaryAmountField inputName="amount" />
              </div>
            </div>
            {shouldShowClarification && (
              <ClarificationTip
                amount={parseInt(values.amount, 10)}
                withoutTax={values.withoutTax}
              />
            )}
          </form>
        );
      }}
    />
  );
};
