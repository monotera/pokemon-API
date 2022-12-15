import { Request, Response } from "express";
const Role = require("../models/role");

exports.getRoles = async (req: Request, res: Response) => {
  const roles = await Role.findAll();
  res.send(roles);
};
