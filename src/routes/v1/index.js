const express = require("express");
const pokemonRoute = require("./pokemon.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/pokemons",
    route: pokemonRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
