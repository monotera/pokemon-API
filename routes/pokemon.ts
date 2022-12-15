const path = require("path");
const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemon");

router.get("", pokemonController.getTest);

module.exports = router;
export {};
