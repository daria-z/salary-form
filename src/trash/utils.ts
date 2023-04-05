export const formatMoney = (amount: number) => {
  if (!amount) return '0';
  return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 }).format(amount);
}

export const transformToNumber = (string: string) => {
  return Number(string.replace(/[^\d]/g, ""));
}


export const formMoneyFormatter = (value: string) => {
  if (!value) return "0";
  return formatMoney(transformToNumber(value));
}

export function formatMoneyRUB(amount: number) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(amount);
}

