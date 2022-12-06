import express, { Express, Request, Response } from 'express';
const { Client } = require('pg')
import dotenv from 'dotenv';
dotenv.config();

//Database config.
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})
client.connect(function(err:Error) {
  if (err) throw err;
  console.log("Connected!");
});


//Express server config
const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
