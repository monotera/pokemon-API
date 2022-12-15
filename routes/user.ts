const path = require("path");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("", userController.getUsers);
router.get("/:email", userController.getUserByEmail);

module.exports = router;
export {};
