import { rates } from "./rates.js";

export const getExchangeRate = (fromCurrency, toCurrency) => {
  if (rates[fromCurrency] && rates[fromCurrency][toCurrency]) {
    return rates[fromCurrency][toCurrency];
  }

  if (rates[toCurrency] && rates[toCurrency][fromCurrency]) {
    return 1 / rates[toCurrency][fromCurrency];
  }
};
