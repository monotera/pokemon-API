import express, { Request, Response } from "express";
const User = require("../models/user");
const Role = require("../models/role");

//TODO: Try catch
exports.getTest = async (req: Request, res: Response) => {
  /*const users = await User.findAll();
  console.log(users.every((user: []) => user instanceof User)); // true
  res.send(users);*/
  const te = await User.findOne({
    where: {
      name: "Nelson",
    },
    include: Role,
  });
  console.log("Name", te.name);
  res.send(te);
};
