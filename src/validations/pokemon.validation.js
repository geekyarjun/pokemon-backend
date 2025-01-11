const Joi = require("joi");

const getPokemons = {
  query: Joi.object().keys({
    limit: Joi.number().integer(),
    offset: Joi.number().integer(),
  }),
};

const addPokemonToFavourite = {
  body: Joi.object().keys({
    id: Joi.number().integer(),
  }),
};

module.exports = {
  getPokemons,
  addPokemonToFavourite,
};
