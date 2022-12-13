import express, { Request, Response } from "express";
const Pokemon = require("../models/pokemon");

exports.getHome = async (req: Request, res: Response) => {
  const pokemons = await Pokemon.findAll();
  console.log(pokemons.every((pokemon: []) => pokemon instanceof Pokemon)); // true
  console.log("All users:", JSON.stringify(pokemons, null, 2));
  res.send(pokemons);
};
