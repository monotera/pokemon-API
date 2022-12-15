const path = require("path");
const express = require("express");
const router = express.Router();
const roleController = require("../controllers/role");

router.get("", roleController.getRoles);

module.exports = router;
export {};
