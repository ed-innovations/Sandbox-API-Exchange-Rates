import { validateParams } from "./modules/validateParams.js";
import { getExchangeRate } from "./modules/getExchangeRate.js";

const getConvertedAmount = function getConvertedAmount(req, res) {
  const { rateType, fromCurrency, toCurrency, amount } = req.params;

  try {
    validateParams(req.params);

    const exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    const convertedAmount = amount * exchangeRate;

    res.json({
      amount: {
        amount: convertedAmount,
        currency: toCurrency,
      },
      appliedRate: {
        rate: exchangeRate,
        isIndirect: true,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default getConvertedAmount;
