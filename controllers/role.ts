import express, { Request, Response } from "express";
const Role = require("../models/role");

exports.getTest = async (req: Request, res: Response) => {
  const roles = await Role.findAll();
  console.log(roles.every((role: []) => role instanceof Role)); // true
  res.send(roles);
};
