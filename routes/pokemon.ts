const path = require("path");
const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemon");

router.get("", pokemonController.getPokemons);

module.exports = router;
export {};
