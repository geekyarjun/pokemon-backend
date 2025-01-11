const mongoose = require('mongoose');

const favouritePokemonSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const FavouritePokemon = mongoose.model('FavouritePokemon', favouritePokemonSchema);

module.exports = FavouritePokemon;
