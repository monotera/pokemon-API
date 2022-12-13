import express, { Express, Request, Response } from "express";
const path = require("path");
const { Client } = require("pg");
import dotenv from "dotenv";
const sequelize = require("./util/database");

dotenv.config();
//Express server config
const app: Express = express();
const port = process.env.PORT;

const homeRoutes = require("./routes/home");
app.use(homeRoutes);

sequelize
  .sync()
  .then(
    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    })
  )
  .catch((err: any) => console.log(err));
