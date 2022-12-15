import express, { Request, Response } from "express";
const Type = require("../models/type");

exports.getTest = async (req: Request, res: Response) => {
  const types = await Type.findAll();
  console.log(types.every((type: []) => type instanceof Type)); // true
  res.send(types);
};
