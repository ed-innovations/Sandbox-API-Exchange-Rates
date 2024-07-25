import { validateInputCurrencies } from "./validateInputCurrencies.js";

export const validateParams = (params) => {
  checkParameterExistence(params);
  checkCurrencyValidity(params.fromCurrency, params.toCurrency);
};

const checkParameterExistence = (params) => {
  const { rateType, fromCurrency, toCurrency, amount } = params;
  if (!rateType || !fromCurrency || !toCurrency || !amount) {
    throw new Error("Missing parameters");
  }
};

const checkCurrencyValidity = (fromCurrency, toCurrency) => {
  if (fromCurrency === toCurrency) {
    throw new Error("Cannot convert the same currency");
  }

  if (!validateInputCurrencies(fromCurrency, toCurrency)) {
    throw new Error(
      `Pair of currencies (${
        fromCurrency + " " + toCurrency
      }) specified not found in the database`
    );
  }
};
