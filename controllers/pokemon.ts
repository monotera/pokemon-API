import express, { Request, Response } from "express";
const Pokemon = require("../models/pokemon");

exports.getTest = async (req: Request, res: Response) => {
  const pokemons = await Pokemon.findAll();
  console.log(pokemons.every((pokemon: []) => pokemon instanceof Pokemon)); // true
  res.send(pokemons);
};
