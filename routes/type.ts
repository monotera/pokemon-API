const path = require("path");
const express = require("express");
const router = express.Router();
const typeController = require("../controllers/type");

router.get("", typeController.getTest);

module.exports = router;
export {};
