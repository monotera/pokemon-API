import { Request, Response } from "express";
const Type = require("../models/type");

exports.getTypes = async (req: Request, res: Response) => {
  const types = await Type.findAll();
  res.send(types);
};
