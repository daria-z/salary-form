export const Clarification: React.FC<{
  withIncomeTax: boolean;
  salaryAmount: number;
}> = ({ withIncomeTax, salaryAmount }) => {
  const incomTax = (salaryAmount / 100) * 13;

  let result: {
    salaryAfterTaxes: number;
    tax: number;
    salaryWithTaxes: number;
  } = {
    salaryAfterTaxes: 0,
    tax: 0,
    salaryWithTaxes: 0,
  };

  if (withIncomeTax) {
    result.salaryAfterTaxes = salaryAmount - incomTax;
    result.tax = incomTax;
    result.salaryWithTaxes = salaryAmount;
  } else {
    result.salaryAfterTaxes = salaryAmount;
    result.tax = incomTax;
    result.salaryWithTaxes = salaryAmount + incomTax;
  }

  function moneyFormatter(number: number) {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0, })
      .format(number)
      .replace(".", " ");
  }

  return (
    <div>
      <p>
        <b>{moneyFormatter(result.salaryAfterTaxes)}</b> сотрудник будет получать
        на руки
      </p>
      <p>
        <b>{moneyFormatter(result.tax)}</b> НДФЛ, 13% от оклада
      </p>
      <p>
        <b>{moneyFormatter(result.salaryWithTaxes)}</b> за сотрудника в месяц
      </p>
    </div>
  );
};
