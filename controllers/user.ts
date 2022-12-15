import { Request, Response } from "express";
const User = require("../models/user");
const Role = require("../models/role");
const Pokemon = require("../models/pokemon");

//TODO: Try catch
exports.getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll({ include: [Pokemon, Role] });
  res.send(users);
};

exports.getUserByEmail = async (req: Request, res: Response) => {
  const user = await User.findOne({
    where: {
      email: req.params.email,
    },
    include: [Pokemon, Role],
  });
  res.send(user);
};
