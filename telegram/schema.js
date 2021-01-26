const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;
const liveGamesSchema = new Schema(
    {
        updateTo: Date,
        games: Array,

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


const liveGames = {
    games,
    wednesdeySubjects,
  };
  module.exports = liveGames;
