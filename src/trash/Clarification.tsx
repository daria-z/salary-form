import { transformToNumber, formatMoneyRUB } from "./utils";

export const Clarification: React.FC<{
  withoutIncomTax: boolean;
  salaryAmount: string;
}> = ({ withoutIncomTax, salaryAmount }) => {

  const salaryAmountNums = transformToNumber(salaryAmount);

  let result: {
    salaryAfterTaxes: number;
    tax: number;
    salaryWithTaxes: number;
  } = {
    salaryAfterTaxes: 0,
    tax: 0,
    salaryWithTaxes: 0,
  };

  if (withoutIncomTax) {
    result.salaryAfterTaxes = salaryAmountNums;
    result.salaryWithTaxes = (result.salaryAfterTaxes * 100) / (100 - 13);
    result.tax = result.salaryWithTaxes - result.salaryAfterTaxes;
  } else {
    result.salaryAfterTaxes = salaryAmountNums - (salaryAmountNums / 100) * 13;
    result.salaryWithTaxes = salaryAmountNums;
    result.tax = result.salaryWithTaxes - result.salaryAfterTaxes;
  }


  return (
    <div className="clarification">
      <p>
        <b>{formatMoneyRUB(result.salaryAfterTaxes)}</b> сотрудник будет
        получать на руки
      </p>
      <p>
        <b>{formatMoneyRUB(result.tax)}</b> НДФЛ, 13% от оклада
      </p>
      <p>
        <b>{formatMoneyRUB(result.salaryWithTaxes)}</b> за сотрудника в месяц
      </p>
    </div>
  );
};
