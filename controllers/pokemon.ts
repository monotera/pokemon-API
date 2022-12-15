import { Request, Response } from "express";
const Pokemon = require("../models/pokemon");
const Type = require("../models/type");

exports.getPokemons = async (req: Request, res: Response) => {
  const pokemons = await Pokemon.findAll({ include: Type });
  res.send(pokemons);
};
