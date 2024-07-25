import express from "express";
import getConvertedAmount from "../routes/convertAmount/index.js";
import bodyParser from "body-parser";

export const setupServer = function (app) {
  app.use(express.json());
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    console.log(`${req.method} request to: "${req.url}"`);
    next();
  });
  app.get(
    "/exchange-rates/:rateType/from-:fromCurrency/to-:toCurrency/convert-amount/:amount",
    getConvertedAmount
  );
};
