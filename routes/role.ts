const path = require("path");
const express = require("express");
const router = express.Router();
const roleController = require("../controllers/role");

router.get("", roleController.getTest);

module.exports = router;
export {};
