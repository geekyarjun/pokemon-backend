const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");
const { pokemonService } = require("../services");

const getPokemons = catchAsync(async (req, res) => {
  const options = pick(req.query, ["limit", "offset"]);
  const result = await pokemonService.queryPokemons(options);
  res.send(result);
});

const getFavouritePokemons = catchAsync(async (req, res) => {
  const result = await pokemonService.queryFavouritePokemons();
  res.send(result);
});

const addPokemonToFavourite = catchAsync(async (req, res) => {
  const body = pick(req.params, ["pokemonId"]);
  const result = await pokemonService.addToFavourite({ id: +body.pokemonId });
  res.send(result);
});

const removePokemonFromFavourite = catchAsync(async (req, res) => {
  const body = pick(req.params, ["pokemonId"]);
  console.log("body", body);
  const result = await pokemonService.removeFromFavourite({
    id: +body.pokemonId,
  });
  res.send(result);
});

module.exports = {
  getPokemons,
  getFavouritePokemons,
  addPokemonToFavourite,
  removePokemonFromFavourite,
};
