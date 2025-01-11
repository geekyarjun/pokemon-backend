const httpStatus = require("http-status");
const { FavouritePokemon } = require("../models");
const ApiError = require("../utils/ApiError");
const transformPokemonDetails = require("../utils/transformPokemonDetails");
const BASE_URL = process.env.POKEMON_API_BASE_URL;
/**
 * Query for pokemon
 * @param {Object} options - Query options
 * @param {string} [options] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.offset] - Current page (default = 0)
 * @returns {Promise<QueryResult>}
 */
const queryPokemons = async (options) => {
  const { limit = 20, offset = 0 } = options;

  const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
  const data = await response.json();

  // Fetch additional details for each Pokemon
  const pokemonsWithDetails = await Promise.all(
    data?.results?.map(async (pokemon) => {
      const detailResponse = await fetch(pokemon.url);
      const details = await detailResponse.json();
      return transformPokemonDetails(details);
    })
  );

  // Fetch favourite Pokemon IDs from DB
  const favourites = await FavouritePokemon.find({});
  const favouriteIds = favourites.map((fav) => fav.id);

  // Add 'isFavourite' flag to the Pokemon list
  const pokemonsWithFavourites = pokemonsWithDetails.map((pokemon) => ({
    ...pokemon,
    isFavourite: favouriteIds.includes(pokemon.id),
  }));

  return {
    count: data.count,
    next: "",
    previous: "",
    result: pokemonsWithFavourites,
  };
};

/**
 * Query for favourite pokemons
 * @returns {Promise<QueryResult>}
 */
const queryFavouritePokemons = async () => {
  const favouritePokemons = await FavouritePokemon.find({});

  const data = await Promise.all(
    favouritePokemons.map(async ({ id }) => {
      const response = await fetch(`${BASE_URL}/${id}`);
      const details = await response.json();
      return { ...transformPokemonDetails(details), isFavourite: true };
    })
  );

  return {
    count: data.length,
    result: data,
  };
};

/**
 * Add pokemon to favourites
 * @param {string} [body] - Body for favourite pokemon
 * @param {number} [body.id] - Pokemond id to be added into favourites
 * @returns {Promise<QueryResult>}
 */
const addToFavourite = async (body) => {
  const alreadyExist = await FavouritePokemon.findOne(body);
  if (alreadyExist) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Pokemon is already in favourite"
    );
  }

  return FavouritePokemon.create(body);
};

/**
 * Add pokemon to favourites
 * @param {string} [body] - Body for favourite pokemon
 * @param {number} [body.id] - Pokemond id to be added into favourites
 * @returns {Promise<QueryResult>}
 */
const removeFromFavourite = async (body) => {
  console.log("boyd in remove From favourite:", body);
  return FavouritePokemon.findOneAndDelete(body);
  // Favourite.findOneAndDelete({ pokemonId });
};

module.exports = {
  queryPokemons,
  addToFavourite,
  removeFromFavourite,
  queryFavouritePokemons,
};
