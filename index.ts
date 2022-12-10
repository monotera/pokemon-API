import express, { Express, Request, Response } from "express";
const { Client } = require("pg");
const { Sequelize, DataTypes } = require("sequelize");
import dotenv from "dotenv";
dotenv.config();

//Database config.
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
client.connect(function (err: Error) {
  if (err) throw err;
  console.log("Connected!");
});
const test_db_connection = async () => {
  try {
    const sequelize = new Sequelize(process.env.DB_URL);
    const Pokemon = sequelize.define("pokemon", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_male: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });
    console.log(Pokemon === sequelize.models.pokemon);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

test_db_connection();

//Express server config
const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
