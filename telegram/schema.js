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
        stats: Array,
    }
);
const newsSchema = new Schema(
    {
        title: String,
        href: String,
        site: String
    }
);
const videoSchema = new Schema(
    {
        title: String,
        href: String,
    }
);
const subjectsSchema = new Schema(
    {
        updateTo: Date,
        subjects: ['1', '2', '3'],

    }
);
const games = mongoose.model('liveGames', liveGamesSchema);
const wednesdeySubjects = mongoose.model('subjects', subjectsSchema);
const statistics = mongoose.model('stats', statsSchema);
const highlightNews = mongoose.model('news', newsSchema);
const highlightVideo = mongoose.model('video', videoSchema);


const liveGames = {
    games,
    wednesdeySubjects,
    statistics,
    highlightNews,
    highlightVideo
};
module.exports = liveGames;
