import { Form as FinalForm, Field } from "react-final-form";
import Form from "react-bootstrap/Form";
import { formMoneyFormatter, transformToNumber } from "./utils";
import CheckboxInput from "./CheckboxInput";

import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import PopoverComponent from "./PopoverComponent";
import { Clarification } from "./Clarification";
import NumericInput from "./NumericInput";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type SalaryType = "perMonth" | "minimumWage" | "perDay" | "perHour";

interface Values {
  salaryType: SalaryType;
  withoutIncomTax: boolean;
  payoutAmount: string;
}

const onSubmit = async (values: Values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

export const Content: React.FC = () => {
  return (
    <FinalForm
      onSubmit={onSubmit}
      // initialValues={{ "salaryType": "perMonth" }}
      render={({ handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
          <label className="form-main-label">Сумма</label>
          <div className="form-inputs-container">
            <div className="form-grid">
              <Field<SalaryType>
                name="salaryType"
                type="radio"
                component={RadioInput}
                value="perMonth"
                label="Оклад за месяц"
                defaultValue="perMonth"
              />
              <Field<SalaryType>
                name="salaryType"
                type="radio"
                component={RadioInput}
                value="minimumWage"
                label="МРОТ"
                children={<PopoverComponent />}
              />

              <Field<SalaryType>
                name="salaryType"
                type="radio"
                component={RadioInput}
                value="perDay"
                label="Оплата за день"
              />
              <Field<SalaryType>
                name="salaryType"
                type="radio"
                component={RadioInput}
                value="perHour"
                label="Оплата за час"
              />
            </div>

            <Field<boolean>
              name="withoutIncomTax"
              component={CheckboxInput}
              defaultValue={true}
            />

            <Field<String>
              name="payoutAmount"
              component={TextInput}
              type="text"
              placeholder="0"
              label="P"
              defaultValue={"0"}
              format={() => formMoneyFormatter(values.payoutAmount)}
            />
          </div>
          {values.salaryType === "perMonth" &&
            transformToNumber(values.payoutAmount) > 0 && (
              <Clarification
                withoutIncomTax={values.withoutIncomTax}
                salaryAmount={values.payoutAmount}
              />
            )}

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
