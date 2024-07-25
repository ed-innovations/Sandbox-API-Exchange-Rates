import { rates } from "./rates.js";

export function validateInputCurrencies(fromCurrency, toCurrency) {
  return (
    validateIfCurrencyExists(fromCurrency) &&
    validateIfCurrencyExists(toCurrency)
  );
}

function validateIfCurrencyExists(currency) {
  return Boolean(rates[currency]) || Boolean(rates?.USD[currency]);
}
