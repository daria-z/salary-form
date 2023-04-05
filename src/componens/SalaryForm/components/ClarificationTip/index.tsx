import * as React from "react";

interface ClarificationTipProps {
  amount: number;
  withoutTax: boolean;
}

const formatSalaryAmount = (num: number) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(num);
};

export const ClarificationTip: React.FC<ClarificationTipProps> = ({
  amount,
  withoutTax,
}) => {
  let salaryAfterTaxes;
  let tax;
  let salaryWithTaxes;

  if (withoutTax) {
    salaryAfterTaxes = amount;
    salaryWithTaxes = (salaryAfterTaxes * 100) / (100 - 13);
    tax = salaryWithTaxes - salaryAfterTaxes;
  } else {
    salaryAfterTaxes = amount - (amount / 100) * 13;
    salaryWithTaxes = amount;
    tax = salaryWithTaxes - salaryAfterTaxes;
  }

  return (
    <div className="clarification-tip">
      <p>
        <b>{formatSalaryAmount(salaryAfterTaxes)}</b> сотрудник будет получать
        на руки
      </p>
      <p>
        <b>{formatSalaryAmount(tax)}</b> НДФЛ, 13% от оклада
      </p>
      <p>
        <b>{formatSalaryAmount(salaryWithTaxes)}</b> за сотрудника в месяц
      </p>
    </div>
  );
};
