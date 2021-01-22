const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const liveGamesSchema = new Schema(
    {
        updateTo: Date,
        games: Array,

    }
);
const games = mongoose.model('liveGames', liveGamesSchema);

const liveGames = {
    games,
  };
  module.exports = liveGames;
