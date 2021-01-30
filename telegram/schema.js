const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;
const liveGamesSchema = new Schema(
    {
        updateTo: Date,
        games: Array,

    }
);
const statsSchema = new Schema(
    {
        updateTo: Date,
        stats: Array,

    }
);
const subjectsSchema = new Schema(
    {
        updateTo: Date,
        subjects: ['1','2','3'],

    }
);
const games = mongoose.model('liveGames', liveGamesSchema);
const wednesdeySubjects = mongoose.model('subjects', subjectsSchema);
const statistics = mongoose.model('stats', statsSchema);


const liveGames = {
    games,
    wednesdeySubjects,
    statistics
  };
  module.exports = liveGames;
