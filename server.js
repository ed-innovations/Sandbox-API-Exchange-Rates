import express from "express";
import { setupServer } from "./startup/routes.js";
const app = express();

setupServer(app);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
