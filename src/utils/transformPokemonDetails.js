/**
 * It transform detailed Pokemons object into small object with required only properties
 * @param {object} details {Pokemon}
 * @returns {Object} A simplified Pokemon object.
 * @returns {number} return.id - The Pokemon's unique identifier.
 * @returns {string} return.name - The Pokemon's name.
 * @returns {number} return.weight - The Pokemon's weight.
 * @returns {number} return.height - The Pokemon's height.
 * @returns {Object} return.sprites - The Pokemon's sprites in simplified form.
 * @returns {string} return.sprites.front_default - Front-facing sprite URL.
 * @returns {string} return.sprites.back_default - Back-facing sprite URL.
 * @returns {string} return.cries - The latest cry audio URL.
 * @returns {Array} return.abilities - The Pokemon's abilities.
 * @returns {Array} return.stats - The Pokemon's stats.
 * @returns {Array<string>} return.types - The Pokemon's types as an array of type names.
 */
const transformPokemonDetails = (details) => ({
  id: details.id,
  name: details.name,
  weight: details.weight,
  height: details.height,
  sprites: {
    front_default: details.sprites.front_default,
    back_default: details.sprites.back_default,
  },
  cries: details.cries.latest,
  abilities: details.abilities,
  stats: details.stats,
  types: details.types.map((type) => type.type.name),
});

module.exports = transformPokemonDetails;
