import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const path = require("path");
const { Client } = require("pg");
const sequelize = require("./util/database");

const pokemonRoutes = require("./routes/pokemon");
const roleRoutes = require("./routes/role");
const typeRoutes = require("./routes/type");
const userRoutes = require("./routes/user");

const User = require("./models/user");
const Role = require("./models/role");
const Pokemon = require("./models/pokemon");
const Type = require("./models/type");

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use("/pokemons", pokemonRoutes);
app.use("/roles", roleRoutes);
app.use("/types", typeRoutes);
app.use("/users", userRoutes);

User.belongsToMany(Role, { through: "user_roles", timestamps: false });
User.belongsToMany(Pokemon, { through: "user_pokemons", timestamps: false });
Pokemon.belongsToMany(Type, { through: "pokemon_types", timestamps: false });
Type.belongsToMany(Pokemon, { through: "pokemon_types", timestamps: false });

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
