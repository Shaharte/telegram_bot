// const { Telegraf } = require('telegraf')
const axios = require("axios");
const { games } = require('./schema');
// const pexelKey = process.env.PEXEL_KEY;
const token = '1557847459:AAGP08OPiRxV2OrCQ0FZhx4CbtOA2Btf7QA';
const testtoken = '1556993489:AAHrW-PHjchV5A9oTbPUuJiN54PZwF800h0';
var unirest = require("unirest");
const _ = require('lodash');
process.env.NTBA_FIX_319 = 1
const moment = require('moment');
const nodeSchedule = require('node-schedule');
const puppeteer = require('puppeteer');
require('events').EventEmitter.defaultMaxListeners = 15;


const TelegramBot = require('node-telegram-bot-api');
const { isError } = require("lodash");

const cerdentials = {
    "x-rapidapi-key": "c872dafbecmsh00cd2ec060c0ae4p14f0b8jsn8cb8fc13ef49",
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "useQueryString": true
}
const teamsIds = [
    {
        name: 'Maccabi Haifa',
        id: '4195',
        key: 'haifa'
    },
    {
        name: 'Ashdod',
        id: '4507',
        key: 'ashdod'

    },
    {
        name: 'Hapoel Haifa',
        id: '2253',
        key: 'hapoelhaifa'

    },
    {
        name: 'Hapoel Beer Sheva',
        id: '563',
        key: 'beersheva'

    },
    {
        name: 'Maccabi Petah-Tikva',
        id: '4495',
        key: 'petahtikva'
    },
    {
        name: 'Ironi Kiryat-Shmona',
        id: '4510',
        key: 'kiryatshmona'
    },
    {
        name: 'Hapoel Kfar-Saba',
        id: '4497',
        key: 'kfarsaba'
    },
    {
        name: 'Maccabi-Tel-Aviv',
        id: '604',
        key: 'telaviv'
    },
    {
        name: 'Hapoel Hadera',
        id: '4500',
        key: 'hadera'
    },
    {
        name: 'Hapoel Tel Aviv',
        id: '4501',
        key: 'hagoel'
    },
    {
        name: 'Beitar Jerusalem',
        id: '657',
        key: 'beitar'
    },
    {
        name: 'Maccabi Netanya',
        id: '657',
        key: 'netanya'
    },
    {
        name: 'Bnei Yehuda',
        id: '4508',
        key: 'bneiyehuda'
    },
    {
        name: 'Bnei Sakhnin',
        id: '4481',
        key: 'sakhnin'
    },

]
const leagueIds = [
    {
        name: 'Ligat haAl',
        id: '2708',
        country: 'Israel'
    },
    {
        name: 'Liga Alef',
        id: '2969',
        country: 'Israel'
    },
    {
        name: 'liga_leumit',
        id: '2770',
        country: 'Israel'

    },
    {
        name: 'State Cup',
        id: '2982',
        country: 'Israel'

    },
    {
        name: 'Toto Cup Ligat Al',
        id: '2676',
        country: 'Israel'

    },
    {
        name: 'Premier League',
        id: '2790',
        country: 'England'

    },
    {
        name: 'Championship',
        id: '2794',
        country: 'England'

    },
    {
        name: 'FA Cup',
        id: '2791',
        country: 'England'

    },
    {
        name: 'League Cup',
        id: '2781',
        country: 'England'

    },
    {
        name: 'Primera Division',
        id: '2833',
        country: 'Spain'
    },
    {
        name: 'Copa del Rey',
        id: '3046',
        country: 'Spain'
    },
    {
        name: 'Bundesliga',
        id: '2692',
        country: 'Germany'
    },
    {
        name: 'DFB Pokal',
        id: '2677',
        country: 'Germany'
    },
    {
        name: 'Serie A',
        id: '2857',
        country: 'Italy'
    },
    {
        name: 'Coppa Italia',
        id: '2941',
        country: 'Italy'
    },
    {
        name: 'Ligue 1',
        id: '2664',
        country: 'France'
    },
    {
        name: 'Eredivisie',
        id: '2673',
        country: 'Netherlands'
    },
    {
        name: 'Premier League',
        id: '2762',
        country: 'Ukraine'
    },
    {
        name: 'Jupiler Pro League',
        id: '2660',
        country: 'Belgium'
    },
    {
        name: 'UEFA Europa League',
        id: '2777',
        country: 'International'
    },
    {
        name: 'UEFA Champions League',
        id: '2771',
        country: 'International'
    },
    {
        name: 'UEFA Nations League',
        id: '1422',
        country: 'International'
    },

]
const topGoalsScorrer = [
    {
        name: 'Nikita Rukavytsya',
        goals: '13',
        team: 'Maccabi Haifa'
    },
    {
        name: 'Jonathan Cohen',
        goals: '8',
        team: 'Maccabi Tel Aviv'
    },
    {
        name: 'Yonas Malede',
        goals: '7',
        team: 'Maccabi Netanya'

    },
    {
        name: 'Josue Soares',
        goals: '6',
        team: 'Hapoel Beer Sheva',
    },
    {
        name: 'Anthony Varan',
        goals: '6',
        team: 'Hapoel Beer Sheva'
    },
    {
        name: 'Eliran Atar',
        goals: '6',
        team: 'Beitar Jerusalem'
    },
    {
        name: 'Lucio',
        goals: '5',
        team: 'Ironi Kiryat Shmona'
    },
    {
        name: 'Kizito Luwagga',
        goals: '5',
        team: 'Hapoel Kfar Saba'
    },
    {
        name: 'Hanan Maman',
        goals: '5',
        team: 'Hapoel Haifa'
    },
    {
        name: 'Tjarronn Chery',
        goals: '5',
        team: 'Maccabi Haifa'
    },
    {
        name: 'Dolev Haziza',
        goals: '5',
        team: 'Maccabi Haifa',
    },
    {
        name: 'Odah Onoriode Marshal',
        goals: '5',
        team: 'Hapoel Hadera',
    },


]
const topAssists = [
    {
        name: 'Dan Biton',
        assists: '6',
        team: 'Maccabi Tel Aviv'
    },
    {
        name: 'Matija Ljujić',
        assists: '5',
        team: 'Bnei Yehuda'
    },
    {
        name: 'Gavriel Gilad Kanichowsky',
        assists: '5',
        team: 'Maccabi Netanya'
    },
    {
        name: 'Yonatan Cohen',
        assists: '5',
        team: 'Maccabi Tel Aviv',
    },
    {
        name: 'Hen Ezra',
        assists: '4',
        team: 'Maccabi Netanya'
    },
    {
        name: 'Kevaughn Frater',
        assists: '4',
        team: 'Maccabi Netanya'
    },
    {
        name: 'Sintiyahu Salalik',
        assists: '4',
        team: 'Hapoel Beer Sheva'
    },
    {
        name: 'Tjarronn Chery',
        assists: '4',
        team: 'Maccabi Haifa'
    },
    {
        name: 'Gustavo Marmentini',
        assists: '4',
        team: 'Hapoel Hadera'
    },


]
const topAttempts = [
    {
        name: 'Nikita Rukavytsya',
        goals: '49',
        team: 'Maccabi Haifa'
    },
    {
        name: 'Tjarronn Chery',
        goals: '46',
        team: 'Maccabi Haifa'
    },
    {
        name: 'Jonathan Cohen',
        goals: '45',
        team: 'Maccabi Tel Aviv'
    },
    {
        name: 'Omri Altman',
        goals: '39',
        team: 'Hapoel Tel Aviv'

    },
    {
        name: 'Osama Khalaila',
        goals: '36',
        team: 'Bnei Sakhnin'

    },
    {
        name: 'Josue Soares',
        goals: '34',
        team: 'Hapoel Beer Sheva',
    },
    {
        name: 'Hanan Maman',
        goals: '33',
        team: 'Hapoel Haifa'
    },
    {
        name: 'Gustavo Marmentini',
        goals: '33',
        team: 'Hapoel Hadera'
    },
    {
        name: 'Eugene Ansah',
        goals: '32',
        team: 'Ironi Kiryat Shmona'
    },
    {
        name: 'Shlomy Azulay',
        goals: '32',
        team: 'Ashdod'
    },
    {
        name: 'Dolev Haziza',
        goals: '32',
        team: 'Maccabi  Haifa'
    },



]
const topOwnGoals = [
    {
        name: 'Idan Nachmias',
        goals: '1',
        team: 'Ironi Kiryat Shmona'
    },
    {
        name: 'Shay Lee Izan',
        goals: '1',
        team: 'Hapoel Tel Aviv'
    },
    {
        name: 'Aviv Solomon',
        goals: '1',
        team: 'Hapoel Kfar Saba'

    },
    {
        name: 'Loai Taha',
        goals: '1',
        team: 'Hapoel Beer Sheva',
    },
    {
        name: 'Ofri Arad',
        goals: '1',
        team: 'Maccabi Haifa'
    },
    {
        name: 'Obeida Khattab',
        goals: '1',
        team: 'Hapoel Hadera'
    },


]
const topRedCards = [
    {
        name: 'Shay Mazor',
        cards: '2',
        team: 'Bnei Yehuda',
        position: 'Mid-fielder'
    },
    {
        name: 'Ata Jabir',
        cards: '2',
        team: 'Bnei Sakhnin',
        position: 'Mid-fielder'
    },
    {
        name: 'Diya Lababidi',
        cards: '2',
        team: 'Hapoel Hadera',
        position: 'Defender'
    },
    {
        name: '19 Players',
        cards: '1',
        team: '',
        position: ''
    },



]
const topDribbles = [
    {
        name: 'Elton Acolatse',
        dribbles: '89',
        team: 'Hapoel Beer Sheva',
        position: 'Mid-fielder'
    },
    {
        name: 'Dolev Haziza',
        dribbles: '87',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder'
    },
    {
        name: 'Roy Gordana',
        dribbles: '83',
        team: 'Ashdod',
        position: 'Mid-fielder'
    },
    {
        name: 'Josue Soares',
        dribbles: '82',
        team: 'Hapoel Beer Sheva',
        position: 'Mid-fielder'
    },
    {
        name: 'Kizito Luwagga',
        dribbles: '74',
        team: 'Hapoel Kfar Saba',
        position: 'Forward'
    },
    {
        name: 'Inon Eliyahu',
        dribbles: '70',
        team: 'Maccabi Petach Tikva',
        position: 'Defender'
    },
    {
        name: 'Eugene Ansah',
        dribbles: '69',
        team: 'Ironi Kiryat Shmona',
        position: 'Forward'
    },
    {
        name: 'Shay Elias',
        dribbles: '67',
        team: 'Hapoel Tel Aviv',
        position: 'Mid-fielder'
    },
    {
        name: 'Louis Bongongui',
        dribbles: '65',
        team: 'Hapoel Hadera',
        position: 'Mid-fielder'
    },
    {
        name: 'Lior Einbrom',
        dribbles: '65',
        team: 'Maccabi Petach Tikva',
        position: 'Mid-fielder'
    }
]
const topSuccessDribbles = [
    {
        name: 'Roy Gordana',
        dribbles: '65',
        team: 'Ashdod',
        position: 'Mid-fielder'
    },
    {
        name: 'Elton Acolatse',
        dribbles: '54',
        team: 'Hapoel Beer Sheva',
        position: 'Mid-fielder'
    },
    {
        name: 'Josue Soares',
        dribbles: '54',
        team: 'Hapoel Beer Sheva',
        position: 'Mid-fielder'
    },
    {
        name: 'Shay Elias',
        dribbles: '47',
        team: 'Hapoel Tel Aviv',
        position: 'Mid-fielder'
    },
    {
        name: 'Dolev Haziza',
        dribbles: '42',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder'
    },
    {
        name: 'Inon Eliyahu',
        dribbles: '41',
        team: 'Maccabi Petach Tikva',
        position: 'Defender'
    },
    {
        name: 'Mohammad Kanaan',
        dribbles: '40',
        team: 'Ashdod ',
        position: 'Mid-fielder'
    },
    {
        name: 'Ali Muhammad',
        dribbles: '40',
        team: 'Beitar Jerusalem',
        position: 'Mid-fielder'
    },
    {
        name: 'Kizito Luwagga',
        dribbles: '39',
        team: 'Hapoel Kfar Saba',
        position: 'Forward'
    },
    {
        name: 'Louis Bongongui',
        dribbles: '39',
        team: 'Hapoel Hadera',
        position: 'Mid-fielder'
    },
]
const topYellowCards = [
    {
        name: 'Ben Reichert',
        cards: '6',
        team: 'Hapoel Kfar Saba',
        position: 'Mid-fielder'
    },
    {
        name: 'Aviv Solomon',
        cards: '6',
        team: 'Hapoel Kfar Saba',
        position: 'Defender'
    },
    {
        name: 'Aviel Zargari',
        cards: '6',
        team: 'Beitar Jerusalem',
        position: 'Mid-fielder'
    },
    {
        name: 'Yoav Hofmeister',
        cards: '5',
        team: 'Ironi Kiryat Shmona',
        position: 'Mid-fielder'
    },
    {
        name: 'Dan Mori',
        cards: '5',
        team: 'Bnei Yehuda',
        position: 'Defender'
    },
    {
        name: 'Omer Danino',
        cards: '5',
        team: 'Hapoel Kfar Saba',
        position: 'Defender'
    },
    {
        name: 'Aviv Avraham',
        cards: '5',
        team: 'Maccabi Netanya ',
        position: 'Mid-fielder'
    },
    {
        name: 'Neta Lavi',
        cards: '5',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder'
    },
    {
        name: 'Mohammad Abu Fani',
        cards: '5',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder'
    },
    {
        name: 'Ofri Arad',
        cards: '5',
        team: 'Maccabi Haifa',
        position: 'Defender'
    },
    {
        name: 'Jonathan Cissé',
        cards: '5',
        team: 'Hapoel Hadera',
        position: 'Defender'
    },
    {
        name: 'Dor Peretz',
        cards: '5',
        team: 'Maccabi Tel Aviv',
        position: 'Mid-fielder'
    },
    {
        name: 'Elvis Sakyi',
        cards: '5',
        team: 'Maccabi Petach Tikva',
        position: 'Mid-fielder'
    },
    {
        name: 'Amit Meir',
        cards: '5',
        team: 'Maccabi Petach Tikva',
        position: 'Mid-fielder'
    },
    {
        name: '18 Players',
        cards: '4',
        team: '',
        position: ''
    },


]
const accuratePasses = [
    {
        name: 'Luis Hernández',
        passes: '1191',
        team: 'Maccabi Tel Aviv',
        position: 'Defender'
    },
    {
        name: 'Eitan Tibi',
        passes: '869',
        team: 'Maccabi Tel Aviv',
        position: 'Defender'
    },
    {
        name: 'Ali Muhammad',
        passes: '859',
        team: 'Beitar Jerusalem',
        position: 'Mid-fielder'
    },
    {
        name: 'Enric Saborit',
        passes: '828',
        team: 'Maccabi Tel Aviv',
        position: 'Defender'
    },
    {
        name: 'Orel Dgani',
        passes: '800',
        team: 'Beitar Jerusalem',
        position: 'Defender'
    },
    {
        name: 'Jose Rodriguez',
        passes: '754',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder'
    },
    {
        name: 'Sherran Yeini',
        passes: '751',
        team: 'Maccabi Tel Aviv',
        position: 'Defender'
    },
    {
        name: 'Bogdan Planic',
        passes: '743',
        team: 'Maccabi Haifa',
        position: 'Defender'
    },
    {
        name: 'Josue Soares',
        passes: '739',
        team: 'Hapoel Beer Sheva',
        position: 'Mid-fielder'
    },
    {
        name: 'Roy Gordana',
        passes: '688',
        team: 'Ashdod',
        position: 'Mid-fielder'
    },


]
const accurateKeyPasses = [
    {
        name: 'Dolev Haziza',
        passes: '17',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder'
    },
    {
        name: 'Dan Biton',
        passes: '15',
        team: 'Maccabi Tel Aviv',
        position: 'Mid-fielder'
    },
    {
        name: 'Tjarronn Chery',
        passes: '14',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder'
    },
    {
        name: 'Matija Ljujić',
        passes: '12',
        team: 'Bnei Yehuda',
        position: 'Mid-fielder'
    },
    {
        name: 'Josue Soares',
        passes: '11',
        team: 'Hapoel Beer Sheva',
        position: 'Mid-fielder'
    },
    {
        name: 'Toruay Sihau',
        passes: '10',
        team: 'Ironi Kiryat Shmona',
        position: 'Mid-fielder'
    },
    {
        name: 'Shlomy Azulay',
        passes: '9',
        team: 'Ashdod ',
        position: 'Mid-fielder'
    },
    {
        name: 'Hen Ezra',
        passes: '9',
        team: 'Maccabi Netanya',
        position: 'Defender'
    },
    {
        name: 'Yonatan Cohen',
        passes: '9',
        team: 'Maccabi Tel Aviv',
        position: 'Mid-fielder'
    },



]
const penaltyMisses = [
    {
        name: 'Matija Ljujić',
        misses: '3',
        team: 'Bnei Yehuda',
        position: 'Mid-fielder'
    },
    {
        name: 'Nikita Rukavytsya',
        misses: '2',
        team: 'Maccabi Haifa',
        position: 'Forward '
    },
    {
        name: 'Lúcio',
        misses: '1',
        team: 'Ironi Kiryat Shmona',
        position: 'Forward'
    },
    {
        name: 'Eliran Atar',
        misses: '1',
        team: 'Beitar Jerusalem',
        position: 'Forward'
    },
    {
        name: 'Mohammad Abu Fani ',
        misses: '1',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder'
    },
    {
        name: 'Shoval Gozlan',
        misses: '1',
        team: 'Hapoel Hadera',
        position: 'Forward'
    },
    {
        name: 'Nick Blackman',
        misses: '1',
        team: 'Maccabi Tel Aviv',
        position: 'Mid-fielder'
    },
    {
        name: 'Yonatan Cohen',
        misses: '1',
        team: 'Maccabi Tel Aviv',
        position: 'Mid-fielder'
    },
    {
        name: 'Inon Eliyahu',
        misses: '1',
        team: 'Maccabi Petach Tikva',
        position: 'Defender'
    },
    {
        name: 'Osama Khalaila',
        misses: '1',
        team: 'Bnei Sakhnin',
        position: 'Forward'
    },


]
const topLostBall = [
    {
        name: 'Josue Soares',
        lost: '191',
        team: 'Hapoel Beer Sheva',
        position: 'Mid-fielder'
    },
    {
        name: 'Lúcio',
        lost: '181',
        team: 'Ironi Kiryat Shmona',
        position: 'Forward'
    },
    {
        name: 'Dolev Haziza',
        lost: '157',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder '
    },

    {
        name: 'Odah Onoriode Marshal',
        lost: '143',
        team: 'Hapoel Hadera',
        position: 'Forward'
    },
    {
        name: 'Eugene Ansah',
        lost: '139',
        team: 'Ironi Kiryat Shmona',
        position: 'Forward'
    },
    {
        name: 'Omri Altman',
        lost: '137',
        team: 'Hapoel Tel Aviv',
        position: 'Forward'
    },
    {
        name: 'Kizito Luwagga',
        lost: '134',
        team: 'Hapoel Kfar Saba',
        position: 'Forward'
    },
    {
        name: 'Tjarronn Chery',
        lost: '129',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder'
    },
    {
        name: 'Gustavo Marmentini',
        lost: '129',
        team: 'Hapoel Hadera ',
        position: 'Mid-fielder'
    },
    {
        name: 'Hanan Maman',
        lost: '129',
        team: 'Hapoel Haifa',
        position: 'Mid-fielder'
    },


]
const topOffsides = [
    {
        name: 'Ness Zamir',
        offsides: '14',
        team: 'Hapoel Haifa',
        position: 'Forward'
    },
    {
        name: 'Liel Abada',
        offsides: '11',
        team: 'Maccabi Petach Tikva',
        position: 'Mid-fielder '
    },
    {
        name: 'Odah Onoriode Marshal',
        offsides: '10',
        team: 'Hapoel Hadera',
        position: 'Forward'
    },
    {
        name: 'Lúcio',
        offsides: '9',
        team: 'Ironi Kiryat Shmona',
        position: 'Forward'
    },
    {
        name: 'Eugene Ansah',
        offsides: '9',
        team: 'Ironi Kiryat Shmona',
        position: 'Forward'
    },
    {
        name: 'Eliran Atar',
        offsides: '9',
        team: 'Beitar Jerusalem',
        position: 'Forward'
    },
    {
        name: 'Kizito Luwagga',
        offsides: '8',
        team: 'Hapoel Kfar Saba',
        position: 'Forward'
    },
    {
        name: 'Tjarronn Chery',
        offsides: '8',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder'
    },
    {
        name: 'Thai Baribo',
        offsides: '8',
        team: 'Maccabi Petach Tikva',
        position: 'Forward'
    },
    {
        name: 'Aleksandar Pesic',
        offsides: '8',
        team: 'Hapoel Tel Aviv',
        position: 'Forward'
    },


]
const topTackles = [
    {
        name: 'Ori Dahan',
        tackles: '62',
        team: 'Ironi Kiryat Shmona',
        position: 'Defender'
    },
    {
        name: 'Aviv Solomon',
        tackles: '48',
        team: 'Hapoel Kfar Saba ',
        position: 'Defender'
    },
    {
        name: 'Mariano Bareiro',
        tackles: '48',
        team: 'Hapoel Beer Sheva',
        position: 'Mid-fielder'
    },
    {
        name: 'Amit Cohen',
        tackles: '46',
        team: 'Bnei Yehuda',
        position: 'Defender'
    },
    {
        name: 'Ali Muhammad',
        tackles: '45',
        team: 'Beitar Jerusalem',
        position: 'Mid-fielder'
    },
    {
        name: 'Aviv Avraham',
        tackles: '41',
        team: 'Maccabi Netanya',
        position: 'Mid-fielder'
    },
    {
        name: 'Danny Gruper',
        tackles: '39',
        team: 'Hapoel Tel Aviv',
        position: 'Mid-fielder'
    },
    {
        name: 'Neta Lavi',
        tackles: '39',
        team: 'Maccabi Haifa',
        position: 'Mid-fielder'
    },



]
const highlights = {
    '15': [
        {
            id: 'Hapoel Haifa vs Ironi Kiryat Shmona',
            url: 'https://www.youtube.com/watch?v=D54bnzL2xdI',
            score: '0-2'
        },
        {
            id: 'Hapoel Beer Sheva vs Maccabi Haifa',
            url: 'https://www.youtube.com/watch?v=-e0OEKfCaaE&t=7s',
            score: '1-1'
        },
        {
            id: 'Hapoel Hadera vs Beitar Jerusalem',
            url: 'https://www.youtube.com/watch?v=QCqEFs6LZO4',
            score: '0-4'
        },
        {
            id: 'Bnei Yehuda vs Maccabi Tel Aviv',
            url: 'https://www.youtube.com/watch?v=etI18Z1s2FQ',
            score: '0-0'
        },
        {
            id: 'Bnei Sakhnin vs Maccabi Netanya',
            url: 'https://www.youtube.com/watch?v=ibI8y74qzO8',
            score: '0-1'
        },
        {
            id: 'Ashdod vs Hapoel Tel Aviv',
            url: 'https://www.youtube.com/watch?v=FPF-K9kmnBA',
            score: '2-1'
        },
        {
            id: 'Hapoel Kfar Saba vs Maccabi Petah Tikva',
            url: 'https://www.youtube.com/watch?v=MY-zI_pG6vM',
            score: '2-0'
        },

    ],
    '14': [
        {
            id: 'Maccabi Petah Tikva vs Maccabi Tel Aviv',
            url: 'https://www.youtube.com/watch?v=lNIVyeJ46Gg',
            score: '0-1'
        },
        {
            id: 'Bnei Yehuda vs Bnei Sakhnin',
            url: 'https://www.youtube.com/watch?v=h8IHeQaaDHY',
            score: '1-1'
        },
        {
            id: 'Beitar Jerusalem vs Hapoel Haifa',
            url: 'https://www.youtube.com/watch?v=tcKvRHEL_eA',
            score: '3-3'
        },
        {
            id: 'Maccabi Netanya vs Hapoel Beer Sheva',
            url: 'https://www.youtube.com/watch?v=8aEP_YlQeEE',
            score: '0-1'
        },
        {
            id: 'Maccabi Haifa vs Hapoel Hadera',
            url: 'https://www.youtube.com/watch?v=dHWFcGXIkls',
            score: '1-0'
        },
        {
            id: 'Hapoel Tel Aviv vs Hapoel Kfar Saba',
            url: 'https://www.youtube.com/watch?v=pqT30vX_kCk',
            score: '1-1'
        },

    ],
    '13': [
        {
            id: 'Hapoel Haifa vs Hapoel Hadera',
            url: 'https://www.youtube.com/watch?v=tSS1VcMVOXY',
            score: '0-0'
        },
        {
            id: 'Ironi Kiryat Shmona vs Hapoel Kfar Saba',
            url: 'https://www.youtube.com/watch?v=YJA_AqxSGBs',
            score: '1-0'
        },
        {
            id: 'Maccabi Netanya vs Maccabi Haifa',
            url: 'https://www.youtube.com/watch?v=3BCGQo4g83U',
            score: '0-2'
        },
        {
            id: 'Bnei Yehuda vs Hapoel Beer Sheva',
            url: 'https://www.youtube.com/watch?v=d2rweAQP-aE',
            score: '0-2'
        },
        {
            id: 'Beitar Jerusalem vs Ashdod',
            url: 'https://www.youtube.com/watch?v=t2xss9remD8',
            score: '1-2'
        },
        {
            id: 'Hapoel Tel Aviv vs Maccabi Tel Aviv',
            url: 'https://www.youtube.com/watch?v=01QGg5dcsCg',
            score: '0-4'
        },

    ],
    '12': [
        {
            id: 'Hapoel Kfar Saba vs Beitar Jerusalem',
            url: 'https://www.youtube.com/watch?v=k32dJLnagng',
            score: '1-1'
        },
        {
            id: 'Bnei Sakhnin vs Hapoel Tel Aviv',
            url: 'https://www.youtube.com/watch?v=_iME8Jom55c',
            score: '0-1'
        },
        {
            id: 'Maccabi Tel Aviv vs Ironi Kiryat Shmona',
            url: 'https://www.youtube.com/watch?v=hpe4FjIPiak',
            score: '0-2'
        },
        {
            id: 'Hapoel Beer Sheva vs Maccabi Petah Tikva',
            url: 'https://www.youtube.com/watch?v=uxnFWXUSAZk',
            score: '1-2'
        },
        {
            id: 'Maccabi Haifa vs Bnei Yehuda',
            url: 'https://www.youtube.com/watch?v=TBDFb8r9Qe0',
            score: '3-0'
        },
        {
            id: 'Hapoel Hadera vs Maccabi Netanya',
            url: 'https://www.youtube.com/watch?v=AQwrhff1O9A',
            score: '2-1'
        },
        {
            id: 'Ashdod vs Hapoel Haifa',
            url: 'https://www.youtube.com/watch?v=stCNijtviAs',
            score: '0-1'
        },


    ],
    '11': [
        {
            id: 'Hapoel Hadera vs Ashdod',
            url: 'https://www.youtube.com/watch?v=tnDqHfkton8',
            score: '1-1'
        },
        {
            id: 'Maccabi Petah Tikva vs Maccabi Haifa',
            url: 'https://www.youtube.com/watch?v=kgTEyiEfoS8',
            score: '1-2'
        },
        {
            id: 'Hapoel Haifa vs Hapoel Kfar Saba',
            url: 'https://www.youtube.com/watch?v=3r8iImTOPuQ',
            score: '2-1'
        },
        {
            id: 'Hapoel Tel Aviv vs Hapoel Beer Sheva',
            url: 'https://www.youtube.com/watch?v=IBvfUC_GACM',
            score: '0-2'
        },
        {
            id: 'Beitar Jerusalem vs Maccabi Tel Aviv',
            url: 'https://www.youtube.com/watch?v=DnRZNSQ_iC0',
            score: '0-0'
        },
        {
            id: 'Bnei Yehuda vs Maccabi Netanya',
            url: 'https://www.youtube.com/watch?v=AQwrhff1O9A',
            score: '1-1'
        },
        {
            id: 'Ironi Kiryat Shmona vs Bnei Sakhnin',
            url: 'https://www.youtube.com/watch?v=glB2GfxdVOI',
            score: '0-1'
        },


    ],

}
const ligyonersTeamIds = [
    {
        name: 'Shakhtar Donetsk',
        teamId: '550',
        country: 'Ukraine',
        playerId: '697',
        playerName: 'Manor Solomon',
        id: 'Manor_Solomon',
    },
    {
        name: 'Valladolid',
        teamId: '720',
        country: 'Spain',
        playerId: '70339',
        playerName: 'Shon Weissman',
        id: 'Shon_Weissman',
    },
    {
        name: 'PSV Eindhoven',
        teamId: '197',
        country: 'Netherlands',
        playerId: '12943',
        playerName: 'Eran Zahavi',
        id: 'Eran_Zahavi',


    },
    {
        name: 'Antwerp',
        teamId: '740',
        country: 'Belgium',
        playerId: '8461',
        playerName: 'Lior Refaelov',
        id: 'Lior_Refaelov',


    },



]
const nextMatch = [
    {
        game: 'Hapoel Haifa Vs Maccabi Petah Tikva',
        home: 'Hapoel Haifa',
        draw: 'Draw',
        away: 'Maccabi Petah Tikva',
        time: 'Tuesday 26.01.21, 19:45',
    },
    {
        game: 'Beitar Jerusalem Vs Hapoel Tel Aviv',
        home: 'Beitar Jerusalem',
        draw: 'Draw',
        away: 'Hapoel Tel Aviv',
        time: 'Tuesday 26.01.21, 20:00',
    },
    {
        game: 'MS Ashdod Vs Bnei Yehuda',
        home: 'MS Ashdod',
        draw: 'Draw',
        away: 'Bnei Yehuda',
        time: 'Wednesday 27.01.21, 19:00',
    },
    {
        game: 'Hapoel Kfar Saba Vs Maccabi Netanya',
        home: 'Hapoel Kfar Saba',
        draw: 'Draw',
        away: 'Maccabi Netanya',
        time: 'Wednesday 27.01.21, 20:00',
    },
    {
        game: 'Maccabi Tel Aviv Vs Maccabi Haifa',
        home: 'Maccabi Tel Aviv',
        draw: 'Draw',
        away: 'Maccabi Haifa',
        time: 'Wednesday 27.01.21, 20:45',
    },
    {
        game: 'Hapoel Hadera Vs Ironi Kiryat Shmona',
        home: 'Hapoel Hadera',
        draw: 'Draw',
        away: 'Ironi Kiryat Shmona',
        time: 'Thursday 28.01.21, 19:00',
    },
    {
        game: 'Bnei Sakhnin Vs Hapoel Beer Sheva',
        home: 'Bnei Sakhnin',
        draw: 'Draw',
        away: 'Hapoel Beer Sheva',
        time: 'Thursday 28.01.21, 20:15',
    },




]
module.exports.telegram = async function () {

    const botTest = new TelegramBot(token, { polling: true });
    nodeSchedule.scheduleJob('30 12 * * 2', () => {
        console.log('start sending poll')
        nextMatch.forEach(match => {
            console.log('match', match)

            const { game, home, draw, away, time } = match
            const question = `${game}, ${time}`
            const options = [home, draw, away]
            const is_anonymous = false
            botTest.sendPoll('-471015035', question, options)
        })

    });

    const updateTo = moment().utc().format('YYYY[-]MM[-]DD');


    const scraper = async () => {
        console.log('starting to run scrapper')
        const gamesScrapper = await games.find({ updateTo })
        const oldGames = gamesScrapper.length ? gamesScrapper[0].games : []
        puppeteer
            .launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
            .then(async browser => {

                //opening a new page and navigating to Fleshscore
                const page = await browser.newPage();
                await page.goto('https://www.flashscore.com/');
                await page.waitForSelector('body');

                //manipulating the page's content
                let grabMatches = await page.evaluate(() => {
                    let allLiveMatches = document.body.querySelectorAll('.event__header,.event__match--oneLine');

                    let allteams = document.body.querySelectorAll('.event__header');
                    //storing the post items in an array then selecting for retrieving content
                    scrapeItems = [];
                    allLiveMatches.forEach(item => {
                        let awayTeam = '';
                        let homeTeam = '';
                        let country = '';
                        let name = '';
                        let id = '';
                        let score = '';
                        let min = '';
                        let time = '';
                        // let min = item.querySelector('.event__stage--block').innerText;
                        try {
                            awayTeam = item.querySelector('.event__participant--away').innerText;
                            homeTeam = item.querySelector('.event__participant--home').innerText;
                            id = item.id ? item.id.substring(4, item.id.length) : '';
                            score = item.querySelector('.event__scores').innerText;
                            min;
                            time;
                            try {
                                time = item.querySelector('.event__time').innerText;
                                time = time.replace('\nFRO', '')
                                min = ''

                            } catch (errr) {
                                min = item.querySelector('.event__stage--block').innerText;
                                time = ''
                            }
                            score = score.replaceAll('\n', '')
                        } catch (err) {
                            country = item.querySelector('.event__title--type').innerText;
                            name = item.querySelector('.event__title--name').innerText;

                        }



                        scrapeItems.push({
                            score,
                            time,
                            min,
                            id,
                            homeTeam,
                            awayTeam,
                            name,
                            country,
                            lastScorrer: []

                        });





                    });
                    const allGames = []
                    let j = -1
                    for (let i = 0; i < scrapeItems.length; i++) {

                        const { name, country, score, time, min, homeTeam, awayTeam } = scrapeItems[i]
                        if (country !== '') {
                            j++
                            allGames.push({
                                name,
                                country,
                                games: []
                            })

                        } else {
                            allGames[j].games.push(scrapeItems[i])
                        }


                    };


                    const finalData = allGames.filter(game => {
                        return ((game.country === 'ISRAEL' && game.name === "Ligat ha'Al"))
                    })

                    return finalData;
                });
                //outputting the scraped data
                for (const match of grabMatches) {
                    const { games } = match
                    for (const game of games) {
                        const { id } = game
                        const ans = await scraper2(id)
                        game.lastScorrer = ans || []

                    }
                }

                const data = {
                    updateTo,
                    games: grabMatches,
                }

                await games.findOneAndUpdate({ updateTo }, data, { upsert: true, new: true });
                sendNotification(grabMatches, oldGames)
                //closing the browser
                await browser.close();
            })
            //handling any errors
            .catch(function (err) {
                console.error(err);
            });


    }

    //initiating Puppeteer
    nodeSchedule.scheduleJob('* 17-21 * * *', () => {
        try {
            scraper()

        } catch (err) { }

    });

    const sendNotification = (newGames, oldGames) => {
        let str = ``
        newGames.forEach(league => {
            const { name, country, games = [] } = league

            const findOld = oldGames.find(old => { return old.name === name && old.country === country })
            if (findOld) {

                games.forEach(game => {
                    const { score, time, min, homeTeam, awayTeam, lastScorrer = [] } = game
                    let scorer = '';
                    let assist = '';
                    let sub = '';
                    const oldGame = findOld.games.find(old => { return old.homeTeam === homeTeam && old.awayTeam === awayTeam })
                    if (oldGame) {
                        if (oldGame.score !== score || (oldGame.min !== min && min !== '' || min === 'Finished')) {

                            const homeScore = score.substring(0, 1) === '-' ? score.substring(0, 1) : Number(score.substring(0, 1))
                            const awayScore = score.substring(score.length - 1, score.length) === '-' ? score.substring(score.length - 1, score.length) : Number(score.substring(score.length - 1, score.length))
                            const oldHomeScore = oldGame.score.substring(0, 1) === '-' ? oldGame.score.substring(0, 1) : Number(oldGame.score.substring(0, 1))
                            const oldAwayScore = oldGame.score.substring(oldGame.score.length - 1, oldGame.score.length) === '-' ? oldGame.score.substring(oldGame.score.length - 1, oldGame.score.length) : Number(oldGame.score.substring(oldGame.score.length - 1, oldGame.score.length))
                            if (lastScorrer.length) {
                                scorer = lastScorrer[0].scorer
                                assist = lastScorrer[0].assist
                                sub = lastScorrer[0].sub
                            }
                            str += `${country} - ${name}: \n`

                            if (min === 'Finished' && oldGame.min !== min) {
                                str += `${min}: ${homeTeam} ${score} ${awayTeam}\n`
                                botTest.sendMessage('-471015035', str)

                            } else if (oldGame.score === '-') {
                                str += `Match Started! ${min}: ${homeTeam} ${score} ${awayTeam}\n`
                                botTest.sendMessage('-471015035', str)

                            } else if (oldGame.score !== score) {
                                if (homeScore > oldHomeScore || awayScore > oldAwayScore) {
                                    if (homeScore > oldHomeScore) {

                                        str += `GOALLL! ${min}: ${homeTeam} [${homeScore}] - ${awayScore} ${awayTeam}\n`
                                    } else {
                                        str += `GOALLL! ${min}: ${homeTeam} ${homeScore} - [${awayScore}] ${awayTeam}\n`

                                    }
                                    if (scorer !== '') {
                                        str += `Scorer:${sub} ${scorer} ${assist}\n`
                                    }
                                } else if (oldHomeScore > homeScore || oldAwayScore > awayScore) {
                                    if (oldHomeScore > homeScore) {

                                        str += `Goal Cancelled!! ${min}: ${homeTeam} [${homeScore}] - ${awayScore} ${awayTeam}\n`
                                    } else {
                                        str += `Goal Cancelled!! ${min}: ${homeTeam} ${homeScore} - [${awayScore}] ${awayTeam}\n`

                                    }

                                }
                                botTest.sendMessage('-471015035', str)
                                // console.log(str)

                            }
                            str = ``
                        }
                    }

                })

            }


        })

    }

    const scraper2 = async (id) => {
        console.log('starting to run scrapper2')

        const matches = puppeteer
            .launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
            .then(async browser => {

                //opening a new page and navigating to Fleshscore
                const page = await browser.newPage();
                await page.goto(`https://www.flashscore.com/match/${id}/#match-summary`);
                await page.waitForSelector('body');

                //manipulating the page's content
                let grabMatches = await page.evaluate(() => {
                    let scorrers = []

                    let allLiveMatches = document.body.querySelectorAll('.detailMS__incidentRow')

                    //storing the post items in an array then selecting for retrieving content
                    scrapeItems = [];

                    allLiveMatches.forEach(async item => {
                        // let min = item.querySelector('.event__stage--block').innerText;
                        try {
                            let incedent = item.querySelector('.soccer-ball').innerText
                            if (incedent) {
                                const obj = {
                                    scorer: item.querySelector('.participant-name') ? item.querySelector('.participant-name').innerText : '',
                                    assist: item.querySelector('.assist') ? item.querySelector('.assist').innerText : '',
                                    sub: item.querySelector('.subincident-name') ? item.querySelector('.subincident-name').innerText : '',
                                    min: item.querySelector('.time-box') ? item.querySelector('.time-box').innerText : '',

                                }

                                scorrers[0] = obj;
                            }

                        } catch (err) {


                        }


                    });




                    return scorrers;
                });
                //outputting the scraped data

                //closing the browser

                await browser.close();
                return grabMatches
            })
            //handling any errors
            .catch(function (err) {
                console.error(err);
            });
        return matches


    }

    // getting next fixtsure - ligat HaAl
    botTest.onText(/\/next/, (msg, match) => {
        const chatId = msg.chat.id;
        console.log('chatId:', chatId)
        const { text } = msg
        if (text === '/next') {
            let str = 'Next Fixtures Are:\n\n'
            nextMatch.forEach(match => {
                const { game, home, draw, away, time } = match
                str += `${game}, ${time}\n\n`

            })
            botTest.sendMessage(chatId, str)
        }
    });


    botTest.onText(/\/ligyoners/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/ligyoners') {
            let str = 'Your Options Are:\n\n/Lior_Refaelov\n/Eran_Zahavi\n/Manor_Solomon\n/Shon_Weissman\n'
            botTest.sendMessage(chatId, str);


        }



    });
    botTest.onText(/\/Lior_Refaelov/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        var unirest = require("unirest");
        if (text === '/Lior_Refaelov') {

            const req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/8461/2020-2021");
            const req2 = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2660");
            req.headers(cerdentials);
            req2.headers(cerdentials);
            let str = ''

            req2.end(function (res2) {
                req.end(function (res) {

                    const { firstname, lastname, position, age } = res.body.api.players[0]
                    str += `${firstname} ${lastname} ${age}, ${position}:\n\n`
                    res.body.api.players.forEach(player => {
                        const { league, goals, cards, games } = player
                        const { total, assists } = goals
                        const { yellow, red } = cards
                        const { appearences, lineups } = games
                        if (appearences > 0) {

                            //${goalsFor}-${goalsAgainst}
                            str += `league: ${league}\nappearences: ${appearences}, lineups: ${lineups}\ngoals: ${total}\nassists: ${assists}\nyellow cards: ${yellow}\nred cards: ${red}\n\n`
                        }
                    })
                    const team = res2.body.api.standings[0].find(o => { return o.teamName === 'Antwerp' })

                    const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                    const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                    str += `Team: ${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n\n`
                    str += `highlights:\n https://www.youtube.com/watch?v=7rSwwUaZDNw`

                    botTest.sendMessage(chatId, str);
                });




            });


        }



    });
    botTest.onText(/\/Eran_Zahavi/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        var unirest = require("unirest");
        if (text === '/Eran_Zahavi') {


            var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/12943/2020-2021");
            var req2 = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2673");

            req.headers(cerdentials);

            req2.headers(cerdentials);

            let str = ''
            req2.end(function (res2) {
                req.end(function (res) {

                    const { firstname, lastname, position, age } = res.body.api.players[0]
                    str += `${firstname} ${lastname} ${age}, ${position}:\n\n`
                    res.body.api.players.forEach(player => {
                        const { league, goals, cards, games } = player
                        const { total, assists } = goals
                        const { yellow, red } = cards
                        const { appearences, lineups } = games

                        //${goalsFor}-${goalsAgainst}
                        str += `league: ${league}\nappearences: ${appearences}, lineups: ${lineups}\ngoals: ${total}\nassists: ${assists}\nyellow cards: ${yellow}\nred cards: ${red}\n\n`

                    })
                    const team = res2.body.api.standings[0].find(o => { return o.teamName === 'PSV Eindhoven' })

                    const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                    const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                    str += `Team: ${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n\n`
                    str += `highlights:\nhttps://www.youtube.com/watch?v=u_xKaGxU_H0\n\n https://www.youtube.com/watch?v=TCfscHHx0Pk&t=7s\n\nhttps://www.youtube.com/watch?v=gNCxwgfLQkc\n\n`

                    botTest.sendMessage(chatId, str);
                });




            });


        }



    });
    botTest.onText(/\/Shon_Weissman/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        var unirest = require("unirest");
        if (text === '/Shon_Weissman') {


            var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/70339/2020-2021");
            var req2 = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2833");

            req.headers(cerdentials);

            req2.headers(cerdentials);

            let str = ''

            req2.end(function (res2) {
                req.end(function (res) {

                    const { firstname, lastname, position, age } = res.body.api.players[0]
                    str += `${firstname} ${lastname} ${age}, ${position}:\n\n`
                    res.body.api.players.forEach(player => {
                        const { league, goals, cards, games } = player
                        const { total, assists } = goals
                        const { yellow, red } = cards
                        const { appearences, lineups } = games
                        if (appearences > 0) {

                            str += `league: ${league}\nappearences: ${appearences}, lineups: ${lineups}\ngoals: ${total}\nassists: ${assists}\nyellow cards: ${yellow}\nred cards: ${red}\n\n`
                        }
                        //${goalsFor}-${goalsAgainst}

                    })
                    const team = res2.body.api.standings[0].find(o => { return o.teamName === 'Valladolid' })

                    const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                    const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                    str += `Team: ${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n\n`
                    str += `highlights:\n https://www.youtube.com/watch?v=6DMm7vwRE-M&t=54s\n\nhttps://www.youtube.com/watch?v=0wKN_pzfQhU\n\n`

                    botTest.sendMessage(chatId, str);
                });




            });

        }



    });
    botTest.onText(/\/Manor_Solomon/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        var unirest = require("unirest");
        if (text === '/Manor_Solomon') {


            var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/697/2020-2021");
            var req2 = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2762");

            req.headers(cerdentials);

            req2.headers(cerdentials);

            let str = ''
            req2.end(function (res2) {
                req.end(function (res) {

                    const { firstname, lastname, position, age } = res.body.api.players[0]
                    str += `${firstname} ${lastname} ${age}, ${position}:\n\n`
                    res.body.api.players.forEach(player => {
                        const { league, goals, cards, games } = player
                        const { total, assists } = goals
                        const { yellow, red } = cards
                        const { appearences, lineups } = games
                        if (appearences > 0) {

                            str += `league: ${league}\nappearences: ${appearences}, lineups: ${lineups}\ngoals: ${total}\nassists: ${assists}\nyellow cards: ${yellow}\nred cards: ${red}\n\n`
                        }
                        //${goalsFor}-${goalsAgainst}

                    })
                    const team = res2.body.api.standings[0].find(o => { return o.teamName === 'Shakhtar Donetsk' })

                    const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                    const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                    str += `Team: ${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n\n`


                    str += `highlights:\n https://www.youtube.com/watch?v=pGl-6DLZTds\n\n`

                    botTest.sendMessage(chatId, str);
                });




            });


        }



    });
    botTest.onText(/\/mahzorim/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/mahzorim') {
            let str = 'Your Options Are:\n\n/mahzor1\n/mahzor2\n/mahzor3\n/mahzor4\n/mahzor5\n/mahzor6\n/mahzor7\n/mahzor8\n/mahzor9\n/mahzor10\n/mahzor11\n/mahzor12\n/mahzor13\n/mahzor14\n/mahzor15\n/mahzor16\n/mahzor17\n/mahzor18\n/mahzor19\n/mahzor20\n '
            botTest.sendMessage(chatId, str);


        }



    });
    botTest.onText(/\/help/, (msg, match) => {
        const chatId = msg.chat.id;
        console.log(chatId)
        const { text } = msg
        if (text === '/help') {


            let str = 'Your Options Are:\n\n/live \n/table \n/stats \n/last \n/teams \n/mahzorim \n/ligyoners'


            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/teams/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/teams') {


            let str = 'Your Options Are:\n\n/haifa \n/telaviv \n/ashdod \n/beitar'


            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/table/, (msg, match) => {


        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2708");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/table') {
            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = `P:   Team                 Played  Points\n`
                res.body.api.standings[0].forEach(team => {
                    let { teamName, rank, points, all, goalsDiff } = team
                    const { matchsPlayed, goalsFor, goalsAgainst } = all
  
                    for (let i = teamName.length; i < 21; i++) {
                        teamName += ' '
                    }


                    //${goalsFor}-${goalsAgainst}
                    str += `${rank}:  ${teamName}  ${matchsPlayed}    ${points} \n`

                })
                botTest.sendMessage(chatId, str);
            });
        }


    });
    botTest.onText(/\/live/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/live");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/live') {
            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = 'Live Results:\n\n'
                leagueIds.forEach(league => {
                    const { id, country, name } = league
                    const leagueArr = res.body.api.fixtures.filter(o => { return o.league.name === name && o.league.country === country })
                    if (leagueArr.length) {
                        str += `${country} - ${name}: \n`

                    }
                    leagueArr.forEach(game => {
                        const { goalsAwayTeam, goalsHomeTeam, homeTeam, awayTeam, elapsed, score, league } = game
                        const { name, country } = league
                        const { halftime } = score
                        const { team_name: home } = homeTeam
                        const { team_name: away } = awayTeam
                        str += `${elapsed}:  ${home}  ${goalsHomeTeam} - ${goalsAwayTeam}  ${away}  (${halftime ? halftime : ''}) \n\n`

                    })

                })
                if (str === 'Live Results:\n\n') {
                    str = 'Live Results: No Results So Far...'

                }


                botTest.sendMessage(chatId, str);
            });
        }


    });
    botTest.onText(/\/(.+)-(.+)/, (msg, match) => {

        const chatId = msg.chat.id;

        const teamA = match[1].toLowerCase()
        const teamB = match[2].toLowerCase()
        const firstTeam = teamsIds.find(o => { return o.key === teamA })
        const seconesTeam = teamsIds.find(o => { return o.key === teamB })
        const teamAId = firstTeam ? firstTeam.id : ''
        const teamAname = firstTeam ? firstTeam.name : ''
        const teamBId = seconesTeam ? seconesTeam.id : ''
        const teamBname = seconesTeam ? seconesTeam.name : ''
        // console.log('firstTeam', firstTeam)
        // console.log('seconesTeam', seconesTeam)
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/h2h/" + teamAId + "/" + teamBId);
        req.headers({
            "x-rapidapi-key": "c872dafbecmsh00cd2ec060c0ae4p14f0b8jsn8cb8fc13ef49",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "useQueryString": true
        });


        req.end(function (res) {
            if (res.error) throw new Error(res.error);
            const { results } = res.body.api
            if (results > 0) {

                let str = `Last ${results} Games, ${teamAname} Vs ${teamBname}: \n`
                // const games = res.body.api.fixtures.filter(o => { return Number(o.round.substring(o.round.length - 2, o.round.length)) === Number(mahzor) });
                console.log('  res.body.api', res.body.api)
                res.body.api.fixtures.forEach(game => {

                    const { homeTeam, awayTeam, score, event_date } = game
                    const date = moment(event_date).format('YYYY-MM-DD')
                    const { team_name: home } = homeTeam
                    const { team_name: away } = awayTeam
                    const { fulltime = 'No Result Yet' } = score
                    const finalScore = fulltime === null ? 'No Result Yet' : fulltime
                    str += `${date} : ${home} vs ${away}: ${finalScore}\n`

                })
                botTest.sendMessage(chatId, str);
            }

        });



    });
    botTest.onText(/\/mahzor(.+)/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2708");
        const mahzor = match[1];
        const chatId = msg.chat.id;
        req.headers(cerdentials);

        req.end(function (res) {
            if (res.error) throw new Error(res.error);
            let str = `Mahzor ${mahzor}: \n`
            const games = res.body.api.fixtures.filter(o => { return Number(o.round.substring(o.round.length - 2, o.round.length)) === Number(mahzor) });
            games.forEach(game => {
                const { homeTeam, awayTeam, score } = game
                const { team_name: home } = homeTeam
                const { team_name: away } = awayTeam
                const { fulltime = 'No Result Yet' } = score
                const finalScore = fulltime === null ? 'No Result Yet' : fulltime
                const id = `${home} vs ${away}`
                const takzir = highlights[mahzor] ? highlights[mahzor].find(o => { return o.id === id }) : false

                str += `${home} vs ${away}: ${finalScore}\n`
                if (takzir) {
                    str += `Highlights: ${takzir.url}\n\n`

                }else{
                    str += `\n`
  
                }
            })
            // console.log(str)
            if (mahzor !=='im'){

                botTest.sendMessage(chatId, str);
            }
        });



    });
    botTest.onText(/\/last/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2708");
        const mahzor = match[1];
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/last') {
            req.headers(cerdentials);


            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let ans = true
                let mahzor = 0
                let str = ''
                while (ans) {
                    mahzor++

                    const games = res.body.api.fixtures.filter(o => { return Number(o.round.substring(o.round.length - 2, o.round.length)) === Number(mahzor) });
                    isAllNull = games.find(game => {
                        return game.score.fulltime !== null
                    })
                    if (isAllNull === undefined) {
                        ans = false
                    } else {
                        str = `Mahzor ${mahzor}: \n`

                        games.forEach(game => {
                            const { homeTeam, awayTeam, score } = game
                            const { team_name: home } = homeTeam
                            const { team_name: away } = awayTeam
                            const { fulltime } = score

                            const finalScore = fulltime === null ? 'No Result Yet' : fulltime
                            str += `${home} vs ${away}: ${finalScore}\n\n`

                        })
                    }
                }
                botTest.sendMessage(chatId, str);

            });
        }


    });
    botTest.onText(/\/beitar/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2708");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/beitar') {
            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = ''
                // console.log(' res.body.api', res.body)
                const beitar = res.body.api.standings[0].find(o => { return o.teamName === 'Beitar Jerusalem' })
                const { teamName, rank, points, all, goalsDiff, forme, logo } = beitar

                const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                str += `${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n ${logo}
                `


                botTest.sendMessage(chatId, str);
            });

        }

    });
    botTest.onText(/\/ashdod/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2708");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/ashdod') {
            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = ''
                // console.log(' res.body.api', res.body)
                const team = res.body.api.standings[0].find(o => { return o.teamName === 'Ashdod' })

                const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                str += `${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n ${logo}
                `


                botTest.sendMessage(chatId, str);
            });
        }


    });
    botTest.onText(/\/haifa/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2708");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/haifa') {

            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = ''
                // console.log(' res.body.api', res.body)
                const team = res.body.api.standings[0].find(o => { return o.teamName === 'Maccabi Haifa' })

                const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                str += `${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n ${logo}
                    `


                botTest.sendMessage(chatId, str);
            });
        }



    });
    botTest.onText(/\/telaviv/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2708");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/telaviv') {
            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = ''
                // console.log(' res.body.api', res.body)
                const team = res.body.api.standings[0].find(o => { return o.teamName === 'Maccabi Tel Aviv' })

                const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                str += `${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n ${logo}
                `


                botTest.sendMessage(chatId, str);
            });

        }

    });
    botTest.onText(/\/goals/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/goals') {


            let str = 'Top Goal Scorers Are:\n\n'
            topGoalsScorrer.forEach(goal => {
                const { name, goals, team } = goal
                str += `${name}, ${team}: ${goals}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/assists/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/assists') {


            let str = 'Top Assists Are:\n\n'
            topAssists.forEach(goal => {
                const { name, assists, team } = goal
                str += `${name}, ${team}: ${assists}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/passes/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/passes') {


            let str = 'Top Accurate Passes Are:\n\n'
            accuratePasses.forEach(goal => {
                const { name, passes, position, team } = goal
                str += `${name}, ${team}: ${passes}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/keypasses/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/keypasses') {


            let str = 'Top Accurate Key Passes Are:\n\n'
            accurateKeyPasses.forEach(goal => {
                const { name, passes, team } = goal
                str += `${name}, ${team}: ${passes}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/penaltymiss/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/penaltymiss') {


            let str = 'Top Penalty Misses Are:\n\n'
            penaltyMisses.forEach(goal => {
                const { name, misses, position, team } = goal
                str += `${name}, ${team}: ${misses}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/owngoals/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/owngoals') {


            let str = 'Top Own Goals Are:\n\n'
            topOwnGoals.forEach(goal => {
                const { name, goals, team } = goal
                str += `${name}, ${team}: ${goals}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/red/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/red') {


            let str = 'Top Red Cards Are:\n\n'
            topRedCards.forEach(goal => {
                const { name, cards, team } = goal
                str += `${name}, ${team}: ${cards}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/dribbles/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/dribbles') {


            let str = 'Top Dribbles Are:\n\n'
            topDribbles.forEach(goal => {
                const { name, dribbles, team } = goal
                str += `${name}, ${team} ${dribbles}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/successfulDribbles/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/successfulDribbles') {


            let str = 'Top Successful Dribbles Are:\n\n'
            topSuccessDribbles.forEach(goal => {
                const { name, dribbles, team } = goal
                str += `${name}, ${team}: ${dribbles}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/tackles/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/tackles') {


            let str = 'Top Successful Tackles Are:\n\n'
            topTackles.forEach(goal => {
                const { name, tackles, team } = goal
                str += `${name} ,${team}: ${tackles}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/lostball/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/lostball') {


            let str = 'Top Lost Ball Are:\n\n'
            topLostBall.forEach(goal => {
                const { name, lost, team } = goal
                str += `${name}, ${team}: ${lost}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/offsides/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/offsides') {

            let str = 'Top Offsides Are:\n\n'
            topOffsides.forEach(goal => {
                const { name, offsides, team, position } = goal
                str += `${name} ,${team}: ${offsides}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/attempts/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/attempts') {

            let str = 'Top Attempt on Goal Are:\n\n'
            topAttempts.forEach(goal => {
                const { name, goals, team } = goal
                str += `${name}, ${team}: ${goals}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/yellow/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/yellow') {


            let str = 'Top Yellow Cards Are:\n\n'
            topYellowCards.forEach(goal => {
                const { name, cards, team } = goal
                str += `${name}, ${team}: ${cards}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/stats/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/stats') {
            let str = 'Your Options Are:\n\n/goals - Top Goal Scorer \n/assists - Top Assists \n/attempts - Top Attempt on Goal \n/passes - Top Accurate Passes \n/owngoals - Top Own Goals \n/red - Top Red Cards \n/yellow - Top Yellow Cards \n/dribbles - Top Dribbles \n/successfulDribbles - Top Successful Dribbles \n/keypasses - Top Accurate Key Passes \n/penaltymiss - Top Penalty Misses \n/offsides - Top Offsides \n/tackles - Top Successful Tackels \n/lostball - Top Lost Ball'
            botTest.sendMessage(chatId, str);


        }

    });
    // botTest.onText(/\//, (msg, match) => {
    //     const chatId = msg.chat.id;
    //     const { text } = msg
    //     const mahzor = text.substring(1, 3)
    //     const highlight = highlights[mahzor].find(game => {
    //         return game.id === text
    //     })

    //     if (highlight) {
    //         const { url } = highlight
    //         botTest.sendMessage(chatId, url)

    //     }


    // });

};

module.exports.telegramTest = async function () {

    const botTest = new TelegramBot(testtoken, { polling: true });
    // nodeSchedule.scheduleJob('30 12 * * 6', () => {
    //     console.log('start sending poll')
    //     nextMatch.forEach(match => {
    //         console.log('match', match)

    //         const { game, home, draw, away, time } = match
    //         const question = `${game}, ${time}`
    //         const options = [home, draw, away]
    //         const is_anonymous = false
    //         botTest.sendPoll('-471015035', question, options)
    //     })

    // });

    const updateTo = moment().utc().format('YYYY[-]MM[-]DD');
    const scraper = async () => {
        console.log('starting to run scrapper')
        const gamesScrapper = await games.find({ updateTo })
        const oldGames = gamesScrapper.length ? gamesScrapper[0].games : []
        puppeteer
            .launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
            .then(async browser => {

                //opening a new page and navigating to Fleshscore
                const page = await browser.newPage();
                await page.goto('https://www.flashscore.com/');
                await page.waitForSelector('body');

                //manipulating the page's content
                let grabMatches = await page.evaluate(() => {
                    let allLiveMatches = document.body.querySelectorAll('.event__header,.event__match--oneLine');

                    let allteams = document.body.querySelectorAll('.event__header');
                    //storing the post items in an array then selecting for retrieving content
                    scrapeItems = [];
                    allLiveMatches.forEach(item => {
                        let awayTeam = '';
                        let homeTeam = '';
                        let country = '';
                        let name = '';
                        let id = '';
                        let score = '';
                        let min = '';
                        let time = '';
                        // let min = item.querySelector('.event__stage--block').innerText;
                        try {
                            awayTeam = item.querySelector('.event__participant--away').innerText;
                            homeTeam = item.querySelector('.event__participant--home').innerText;
                            id = item.id ? item.id.substring(4, item.id.length) : '';
                            score = item.querySelector('.event__scores').innerText;
                            min;
                            time;
                            try {
                                time = item.querySelector('.event__time').innerText;
                                time = time.replace('\nFRO', '')
                                min = ''

                            } catch (errr) {
                                min = item.querySelector('.event__stage--block').innerText;
                                time = ''
                            }
                            score = score.replaceAll('\n', '')
                        } catch (err) {
                            country = item.querySelector('.event__title--type').innerText;
                            name = item.querySelector('.event__title--name').innerText;

                        }



                        scrapeItems.push({
                            score,
                            time,
                            min,
                            id,
                            homeTeam,
                            awayTeam,
                            name,
                            country,
                            lastScorrer: []

                        });





                    });
                    const allGames = []
                    let j = -1
                    for (let i = 0; i < scrapeItems.length; i++) {

                        const { name, country, score, time, min, homeTeam, awayTeam } = scrapeItems[i]
                        if (country !== '') {
                            j++
                            allGames.push({
                                name,
                                country,
                                games: []
                            })

                        } else {
                            allGames[j].games.push(scrapeItems[i])
                        }


                    };


                    const finalData = allGames.filter(game => {
                        return ((game.country === 'IRAN' && game.name === "Division 1"))
                    })

                    return finalData;
                });
                //outputting the scraped data
                for (const match of grabMatches) {
                    const { games } = match
                    for (const game of games) {

                        const { id } = game
                        const ans = await scraper2(id)
                        game.lastScorrer = ans || []


                    }
                }

                const data = {
                    updateTo,
                    games: grabMatches,
                }

                await games.findOneAndUpdate({ updateTo }, data, { upsert: true, new: true });
                sendNotification(grabMatches, oldGames)
                //closing the browser
                await browser.close();
            })
            //handling any errors
            .catch(function (err) {
                console.error(err);
            });


    }
    const scraper2 = async (id) => {
        console.log('starting to run scrapper2')

        const matches = puppeteer
            .launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
            .then(async browser => {

                //opening a new page and navigating to Fleshscore
                const page = await browser.newPage();
                await page.goto(`https://www.flashscore.com/match/${id}/#match-summary`);
                await page.waitForSelector('body');

                //manipulating the page's content
                let grabMatches = await page.evaluate(() => {
                    let scorrers = []

                    let allLiveMatches = document.body.querySelectorAll('.detailMS__incidentRow')

                    //storing the post items in an array then selecting for retrieving content
                    scrapeItems = [];

                    allLiveMatches.forEach(async item => {
                        try {
                            let goal = item.querySelector('.soccer-ball') ? true : false;
                            let red = item.querySelector('.r-card') ? true : false;
                            let yl = item.querySelector('.yr-card') ? true : false;
                            if (goal) {
                                let scorer = item.querySelector('.participant-name') ? item.querySelector('.participant-name').innerText : ''
                                if (scorer !== '') {
                                    const obj = {
                                        scorer: item.querySelector('.participant-name') ? item.querySelector('.participant-name').innerText : '',
                                        assist: item.querySelector('.assist') ? item.querySelector('.assist').innerText : '',
                                        sub: item.querySelector('.subincident-name') ? item.querySelector('.subincident-name').innerText : '',
                                        min: item.querySelector('.time-box') ? item.querySelector('.time-box').innerText : '',
                                        team: item.className,

                                    }
                                }

                                scorrers[0] = obj;
                            } else if (red || yl) {
                                scorrers[0] = {
                                    scorer: item.querySelector('.participant-name') ? item.querySelector('.participant-name').innerText : '',
                                    red: true,
                                    min: item.querySelector('.time-box') ? item.querySelector('.time-box').innerText : '',
                                    team: item.className,


                                }
                            }



                        }
                        catch (err) {
                            console.log('err', err)

                        }


                    });

                    scorrers = scorrers.length ? scorrers : [{
                        scorer: '',
                        assist: '',
                        sub: '',
                        min: '',
                        bla: ""
                    }]


                    return scorrers;
                });
                //outputting the scraped data

                //closing the browser
                await browser.close();
                return grabMatches
            })
            //handling any errors
            .catch(function (err) {
                console.error(err);
            });
        return matches


    }
    //initiating Puppeteer
    // const ans = await scraper2('tKmMduCT')
    // console.log('ans',ans)
    nodeSchedule.scheduleJob('* * * * *', () => {
        try {
            scraper()

        } catch (err) { }

    });



    const sendNotification = (newGames, oldGames) => {
        let str = ``
        newGames.forEach(league => {
            const { name, country, games = [] } = league

            const findOld = oldGames.find(old => { return old.name === name && old.country === country })
            if (findOld) {

                games.forEach(game => {
                    const { score, time, min, homeTeam, awayTeam, lastScorrer = [] } = game
                    let scorer = '';
                    let assist = '';
                    let sub = '';
                    let scorerMin = '';
                    let team = '';
                    if (lastScorrer.length) {
                        scorer = lastScorrer[0].scorer
                        assist = lastScorrer[0].assist
                        sub = lastScorrer[0].sub
                        scorerMin = lastScorrer[0].min
                        team = lastScorrer[0].team ? (lastScorrer[0].team.includes('home') ? 'home' : 'away') : ''
                    }
                    const oldGame = findOld.games.find(old => { return old.homeTeam === homeTeam && old.awayTeam === awayTeam })
                    console.log('game', game)

                    console.log('oldGame', oldGame)

                    if (oldGame) {
                        if (oldGame.score !== score || (oldGame.min !== min && min !== '' || min === 'Finished') || (oldGame.lastScorrer[0].scorer !== scorer && scorer !== '' || oldGame.lastScorrer[0].min !== scorerMin && scorer !== '')) {

                            const homeScore = score.substring(0, 1) === '-' ? score.substring(0, 1) : Number(score.substring(0, 1))
                            const awayScore = score.substring(score.length - 1, score.length) === '-' ? score.substring(score.length - 1, score.length) : Number(score.substring(score.length - 1, score.length))
                            const oldHomeScore = oldGame.score.substring(0, 1) === '-' ? oldGame.score.substring(0, 1) : Number(oldGame.score.substring(0, 1))
                            const oldAwayScore = oldGame.score.substring(oldGame.score.length - 1, oldGame.score.length) === '-' ? oldGame.score.substring(oldGame.score.length - 1, oldGame.score.length) : Number(oldGame.score.substring(oldGame.score.length - 1, oldGame.score.length))

                            str += `${country} - ${name}: \n`

                            if (min === 'Finished' && oldGame.min !== min) {
                                str += `${min}: ${homeTeam} ${score} ${awayTeam}\n`
                                botTest.sendMessage('404011627', str)

                            } else if (oldGame.score === '-') {
                                str += `Match Started! ${min}: ${homeTeam} ${score} ${awayTeam}\n`
                                botTest.sendMessage('404011627', str)

                            } else if (oldGame.score !== score) {
                                if (homeScore > oldHomeScore || awayScore > oldAwayScore) {
                                    if (homeScore > oldHomeScore) {

                                        str += `GOALLL! ${min}: ${homeTeam} [${homeScore}] - ${awayScore} ${awayTeam}\n`
                                    } else {
                                        str += `GOALLL! ${min}: ${homeTeam} ${homeScore} - [${awayScore}] ${awayTeam}\n`

                                    }
                                    if (scorer !== '') {
                                        str += `Scorer:${sub} ${scorer} ${assist}\n`
                                    }
                                } else if (oldHomeScore > homeScore || oldAwayScore > awayScore) {
                                    if (oldHomeScore > homeScore) {

                                        str += `Goal Cancelled!! ${min}: ${homeTeam} [${homeScore}] - ${awayScore} ${awayTeam}\n`
                                    } else {
                                        str += `Goal Cancelled!! ${min}: ${homeTeam} ${homeScore} - [${awayScore}] ${awayTeam}\n`

                                    }

                                }
                                botTest.sendMessage('404011627', str)

                            } else if (oldGame.lastScorrer.length === 0 && scorer !== '' || oldGame.lastScorrer.length !== 0 && oldGame.lastScorrer[0].min !== scorerMin && scorer !== '') {
                                const scoreTeam = team === 'home' ? homeTeam : (team === 'away' ? awayTeam : '')
                                str += `Update Scorer ${scoreTeam} - ${scorerMin}: ${sub} ${scorer} ${assist}\n`
                                botTest.sendMessage('404011627', str)

                            }
                            console.log(str)
                            str = ``
                        }
                    }

                })

            }


        })

    }







    // getting next fixtsure - ligat HaAl

    botTest.onText(/\/next/, (msg, match) => {
        const chatId = msg.chat.id;
        console.log('chatId:', chatId)
        const { text } = msg
        if (text === '/next') {
            let str = 'Next Fixtures Are:\n\n'
            nextMatch.forEach(match => {
                const { game, home, draw, away, time } = match
                str += `${game}, ${time}\n\n`

            })
            botTest.sendMessage(chatId, str)
        }
    });

    botTest.onText(/\/ligyoners/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/ligyoners') {
            let str = 'Your Options Are:\n\n/Lior_Refaelov\n/Eran_Zahavi\n/Manor_Solomon\n/Shon_Weissman\n'
            botTest.sendMessage(chatId, str);


        }



    });
    botTest.onText(/\/Lior_Refaelov/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        var unirest = require("unirest");
        if (text === '/Lior_Refaelov') {

            const req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/8461/2020-2021");
            const req2 = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2660");
            req.headers(cerdentials);
            req2.headers(cerdentials);
            let str = ''

            req2.end(function (res2) {
                req.end(function (res) {

                    const { firstname, lastname, position, age } = res.body.api.players[0]
                    str += `${firstname} ${lastname} ${age}, ${position}:\n\n`
                    res.body.api.players.forEach(player => {
                        const { league, goals, cards, games } = player
                        const { total, assists } = goals
                        const { yellow, red } = cards
                        const { appearences, lineups } = games
                        if (appearences > 0) {

                            //${goalsFor}-${goalsAgainst}
                            str += `league: ${league}\nappearences: ${appearences}, lineups: ${lineups}\ngoals: ${total}\nassists: ${assists}\nyellow cards: ${yellow}\nred cards: ${red}\n\n`
                        }
                    })
                    const team = res2.body.api.standings[0].find(o => { return o.teamName === 'Antwerp' })

                    const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                    const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                    str += `Team: ${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n\n`
                    str += `highlights:\n https://www.youtube.com/watch?v=7rSwwUaZDNw`

                    botTest.sendMessage(chatId, str);
                });




            });


        }



    });
    botTest.onText(/\/Eran_Zahavi/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        var unirest = require("unirest");
        if (text === '/Eran_Zahavi') {


            var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/12943/2020-2021");
            var req2 = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2673");

            req.headers(cerdentials);

            req2.headers(cerdentials);

            let str = ''
            req2.end(function (res2) {
                req.end(function (res) {

                    const { firstname, lastname, position, age } = res.body.api.players[0]
                    str += `${firstname} ${lastname} ${age}, ${position}:\n\n`
                    res.body.api.players.forEach(player => {
                        const { league, goals, cards, games } = player
                        const { total, assists } = goals
                        const { yellow, red } = cards
                        const { appearences, lineups } = games

                        //${goalsFor}-${goalsAgainst}
                        str += `league: ${league}\nappearences: ${appearences}, lineups: ${lineups}\ngoals: ${total}\nassists: ${assists}\nyellow cards: ${yellow}\nred cards: ${red}\n\n`

                    })
                    const team = res2.body.api.standings[0].find(o => { return o.teamName === 'PSV Eindhoven' })

                    const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                    const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                    str += `Team: ${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n\n`
                    str += `highlights:\nhttps://www.youtube.com/watch?v=u_xKaGxU_H0\n\n https://www.youtube.com/watch?v=TCfscHHx0Pk&t=7s\n\nhttps://www.youtube.com/watch?v=gNCxwgfLQkc\n\n`

                    botTest.sendMessage(chatId, str);
                });




            });


        }



    });
    botTest.onText(/\/Shon_Weissman/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        var unirest = require("unirest");
        if (text === '/Shon_Weissman') {


            var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/70339/2020-2021");
            var req2 = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2833");

            req.headers(cerdentials);

            req2.headers(cerdentials);

            let str = ''

            req2.end(function (res2) {
                req.end(function (res) {

                    const { firstname, lastname, position, age } = res.body.api.players[0]
                    str += `${firstname} ${lastname} ${age}, ${position}:\n\n`
                    res.body.api.players.forEach(player => {
                        const { league, goals, cards, games } = player
                        const { total, assists } = goals
                        const { yellow, red } = cards
                        const { appearences, lineups } = games
                        if (appearences > 0) {

                            str += `league: ${league}\nappearences: ${appearences}, lineups: ${lineups}\ngoals: ${total}\nassists: ${assists}\nyellow cards: ${yellow}\nred cards: ${red}\n\n`
                        }
                        //${goalsFor}-${goalsAgainst}

                    })
                    const team = res2.body.api.standings[0].find(o => { return o.teamName === 'Valladolid' })

                    const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                    const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                    str += `Team: ${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n\n`
                    str += `highlights:\n https://www.youtube.com/watch?v=6DMm7vwRE-M&t=54s\n\nhttps://www.youtube.com/watch?v=0wKN_pzfQhU\n\n`

                    botTest.sendMessage(chatId, str);
                });




            });

        }



    });
    botTest.onText(/\/Manor_Solomon/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        var unirest = require("unirest");
        if (text === '/Manor_Solomon') {


            var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/697/2020-2021");
            var req2 = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2762");

            req.headers(cerdentials);

            req2.headers(cerdentials);

            let str = ''
            req2.end(function (res2) {
                req.end(function (res) {

                    const { firstname, lastname, position, age } = res.body.api.players[0]
                    str += `${firstname} ${lastname} ${age}, ${position}:\n\n`
                    res.body.api.players.forEach(player => {
                        const { league, goals, cards, games } = player
                        const { total, assists } = goals
                        const { yellow, red } = cards
                        const { appearences, lineups } = games
                        if (appearences > 0) {

                            str += `league: ${league}\nappearences: ${appearences}, lineups: ${lineups}\ngoals: ${total}\nassists: ${assists}\nyellow cards: ${yellow}\nred cards: ${red}\n\n`
                        }
                        //${goalsFor}-${goalsAgainst}

                    })
                    const team = res2.body.api.standings[0].find(o => { return o.teamName === 'Shakhtar Donetsk' })

                    const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                    const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                    str += `Team: ${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n\n`


                    str += `highlights:\n https://www.youtube.com/watch?v=pGl-6DLZTds\n\n`

                    botTest.sendMessage(chatId, str);
                });




            });


        }



    });
    botTest.onText(/\/mahzorim/, (msg, match) => {


        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/mahzorim') {
            let str = 'Your Options Are:\n\n/mahzor1\n/mahzor2\n/mahzor3\n/mahzor4\n/mahzor5\n/mahzor6\n/mahzor7\n/mahzor8\n/mahzor9\n/mahzor10\n/mahzor11\n/mahzor12\n/mahzor13\n/mahzor14\n/mahzor15\n/mahzor16\n/next\n'
            botTest.sendMessage(chatId, str);


        }



    });
    botTest.onText(/\/help/, (msg, match) => {
        const chatId = msg.chat.id;
        console.log(chatId)
        const { text } = msg
        if (text === '/help') {


            let str = 'Your Options Are:\n\n/live \n/table \n/stats \n/last \n/teams \n/mahzorim \n/ligyoners'


            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/teams/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/teams') {


            let str = 'Your Options Are:\n\n/haifa \n/telaviv \n/ashdod \n/beitar'


            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/table/, (msg, match) => {


        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2708");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/table') {
            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = `P:   Team                 Played  Points\n`
                res.body.api.standings[0].forEach(team => {
                    let { teamName, rank, points, all, goalsDiff } = team
                    const { matchsPlayed, goalsFor, goalsAgainst } = all
  
                    for (let i = teamName.length; i < 21; i++) {
                        teamName += ' '
                    }


                    //${goalsFor}-${goalsAgainst}
                    str += `${rank}:  ${teamName}  ${matchsPlayed}    ${points} \n`

                })
                botTest.sendMessage(chatId, str);
            });
        }


    });
    botTest.onText(/\/live/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/live");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/live') {
            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = 'Live Results:\n\n'
                leagueIds.forEach(league => {
                    const { id, country, name } = league
                    const leagueArr = res.body.api.fixtures.filter(o => { return o.league.name === name && o.league.country === country })
                    if (leagueArr.length) {
                        str += `${country} - ${name}: \n`

                    }
                    leagueArr.forEach(game => {
                        console.log('game', game)
                        const { goalsAwayTeam, goalsHomeTeam, homeTeam, awayTeam, elapsed, score, league } = game
                        const { name, country } = league
                        const { halftime } = score
                        const { team_name: home } = homeTeam
                        const { team_name: away } = awayTeam
                        str += `${elapsed}:  ${home}  ${goalsHomeTeam} - ${goalsAwayTeam}  ${away}  (${halftime ? halftime : ''}) \n\n`

                    })

                })
                if (str === 'Live Results:\n\n') {
                    str = 'Live Results: No Results So Far...'

                }


                botTest.sendMessage(chatId, str);
            });
        }


    });
    botTest.onText(/\/(.+)-(.+)/, (msg, match) => {

        const chatId = msg.chat.id;

        const teamA = match[1].toLowerCase()
        const teamB = match[2].toLowerCase()
        const firstTeam = teamsIds.find(o => { return o.key === teamA })
        const seconesTeam = teamsIds.find(o => { return o.key === teamB })
        const teamAId = firstTeam ? firstTeam.id : ''
        const teamAname = firstTeam ? firstTeam.name : ''
        const teamBId = seconesTeam ? seconesTeam.id : ''
        const teamBname = seconesTeam ? seconesTeam.name : ''
        // console.log('firstTeam', firstTeam)
        // console.log('seconesTeam', seconesTeam)
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/h2h/" + teamAId + "/" + teamBId);
        req.headers({
            "x-rapidapi-key": "c872dafbecmsh00cd2ec060c0ae4p14f0b8jsn8cb8fc13ef49",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "useQueryString": true
        });


        req.end(function (res) {
            if (res.error) throw new Error(res.error);
            const { results } = res.body.api
            if (results > 0) {

                let str = `Last ${results} Games, ${teamAname} Vs ${teamBname}: \n`
                // const games = res.body.api.fixtures.filter(o => { return Number(o.round.substring(o.round.length - 2, o.round.length)) === Number(mahzor) });
                console.log('  res.body.api', res.body.api)
                res.body.api.fixtures.forEach(game => {

                    const { homeTeam, awayTeam, score, event_date } = game
                    const date = moment(event_date).format('YYYY-MM-DD')
                    const { team_name: home } = homeTeam
                    const { team_name: away } = awayTeam
                    const { fulltime = 'No Result Yet' } = score
                    const finalScore = fulltime === null ? 'No Result Yet' : fulltime
                    str += `${date} : ${home} vs ${away}: ${finalScore}\n`

                })
                botTest.sendMessage(chatId, str);
            }

        });



    });
    botTest.onText(/\/mahzor(.+)/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2708");
        const mahzor = match[1];
        const chatId = msg.chat.id;
        req.headers(cerdentials);

        req.end(function (res) {
            if (res.error) throw new Error(res.error);
            let str = `Mahzor ${mahzor}: \n`
            const games = res.body.api.fixtures.filter(o => { return Number(o.round.substring(o.round.length - 2, o.round.length)) === Number(mahzor) });
            games.forEach(game => {
                const { homeTeam, awayTeam, score } = game
                const { team_name: home } = homeTeam
                const { team_name: away } = awayTeam
                const { fulltime = 'No Result Yet' } = score
                const finalScore = fulltime === null ? 'No Result Yet' : fulltime
                const id = `${home} vs ${away}`
                const takzir = highlights[mahzor] ? highlights[mahzor].find(o => { return o.id === id }) : false

                str += `${home} vs ${away}: ${finalScore}\n`
                if (takzir) {
                    str += `Highlights: ${takzir.url}\n\n`

                }else{
                    str += `\n`
  
                }
            })
            // console.log(str)
            if (mahzor !=='im'){

                botTest.sendMessage(chatId, str);
            }
        });



    });
    botTest.onText(/\/last/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2708");
        const mahzor = match[1];
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/last') {
            req.headers(cerdentials);


            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let ans = true
                let mahzor = 0
                let str = ''
                while (ans) {
                    mahzor++

                    const games = res.body.api.fixtures.filter(o => { return Number(o.round.substring(o.round.length - 2, o.round.length)) === Number(mahzor) });
                    isAllNull = games.find(game => {
                        return game.score.fulltime !== null
                    })
                    if (isAllNull === undefined) {
                        ans = false
                    } else {
                        str = `Mahzor ${mahzor}: \n`

                        games.forEach(game => {
                            const { homeTeam, awayTeam, score } = game
                            const { team_name: home } = homeTeam
                            const { team_name: away } = awayTeam
                            const { fulltime } = score

                            const finalScore = fulltime === null ? 'No Result Yet' : fulltime
                            str += `${home} vs ${away}: ${finalScore}\n\n`

                        })
                    }
                }
                botTest.sendMessage(chatId, str);

            });
        }


    });
    botTest.onText(/\/beitar/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2708");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/beitar') {
            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = ''
                // console.log(' res.body.api', res.body)
                const beitar = res.body.api.standings[0].find(o => { return o.teamName === 'Beitar Jerusalem' })
                const { teamName, rank, points, all, goalsDiff, forme, logo } = beitar

                const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                str += `${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n ${logo}
                `


                botTest.sendMessage(chatId, str);
            });

        }

    });
    botTest.onText(/\/ashdod/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2708");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/ashdod') {
            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = ''
                // console.log(' res.body.api', res.body)
                const team = res.body.api.standings[0].find(o => { return o.teamName === 'Ashdod' })

                const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                str += `${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n ${logo}
                `


                botTest.sendMessage(chatId, str);
            });
        }


    });
    botTest.onText(/\/haifa/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2708");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/haifa') {

            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = ''
                // console.log(' res.body.api', res.body)
                const team = res.body.api.standings[0].find(o => { return o.teamName === 'Maccabi Haifa' })

                const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                str += `${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n ${logo}
                    `


                botTest.sendMessage(chatId, str);
            });
        }



    });
    botTest.onText(/\/telaviv/, (msg, match) => {
        var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2708");
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/telaviv') {
            req.headers(cerdentials);

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let str = ''
                // console.log(' res.body.api', res.body)
                const team = res.body.api.standings[0].find(o => { return o.teamName === 'Maccabi Tel Aviv' })

                const { teamName, rank, points, all, goalsDiff, forme, logo } = team

                const { matchsPlayed, goalsFor, goalsAgainst, win, draw, lose } = all

                str += `${teamName}:  Rank: ${rank}  Points: ${points} \nForm: ${forme} \nWins: ${win} \nDraws: ${draw} \nLoses: ${lose} \nGoals for: ${goalsFor}\nGoals against : ${goalsAgainst} \nGoals diff: ${goalsDiff}\n ${logo}
                `


                botTest.sendMessage(chatId, str);
            });

        }

    });
    botTest.onText(/\/goals/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/goals') {


            let str = 'Top Goal Scorers Are:\n\n'
            topGoalsScorrer.forEach(goal => {
                const { name, goals, team } = goal
                str += `${name}, ${team}: ${goals}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/assists/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/assists') {


            let str = 'Top Assists Are:\n\n'
            topAssists.forEach(goal => {
                const { name, assists, team } = goal
                str += `${name}, ${team}: ${assists}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/passes/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/passes') {


            let str = 'Top Accurate Passes Are:\n\n'
            accuratePasses.forEach(goal => {
                const { name, passes, position, team } = goal
                str += `${name}, ${team}: ${passes}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/keypasses/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/keypasses') {


            let str = 'Top Accurate Key Passes Are:\n\n'
            accurateKeyPasses.forEach(goal => {
                const { name, passes, team } = goal
                str += `${name}, ${team}: ${passes}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/penaltymiss/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/penaltymiss') {


            let str = 'Top Penalty Misses Are:\n\n'
            penaltyMisses.forEach(goal => {
                const { name, misses, position, team } = goal
                str += `${name}, ${team}: ${misses}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/owngoals/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/owngoals') {


            let str = 'Top Own Goals Are:\n\n'
            topOwnGoals.forEach(goal => {
                const { name, goals, team } = goal
                str += `${name}, ${team}: ${goals}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/red/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/red') {


            let str = 'Top Red Cards Are:\n\n'
            topRedCards.forEach(goal => {
                const { name, cards, team } = goal
                str += `${name}, ${team}: ${cards}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/dribbles/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/dribbles') {


            let str = 'Top Dribbles Are:\n\n'
            topDribbles.forEach(goal => {
                const { name, dribbles, team } = goal
                str += `${name}, ${team} ${dribbles}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/successfulDribbles/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/successfulDribbles') {


            let str = 'Top Successful Dribbles Are:\n\n'
            topSuccessDribbles.forEach(goal => {
                const { name, dribbles, team } = goal
                str += `${name}, ${team}: ${dribbles}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/tackles/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/tackles') {


            let str = 'Top Successful Tackles Are:\n\n'
            topTackles.forEach(goal => {
                const { name, tackles, team } = goal
                str += `${name} ,${team}: ${tackles}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/lostball/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/lostball') {


            let str = 'Top Lost Ball Are:\n\n'
            topLostBall.forEach(goal => {
                const { name, lost, team } = goal
                str += `${name}, ${team}: ${lost}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/offsides/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/offsides') {

            let str = 'Top Offsides Are:\n\n'
            topOffsides.forEach(goal => {
                const { name, offsides, team, position } = goal
                str += `${name} ,${team}: ${offsides}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/attempts/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/attempts') {

            let str = 'Top Attempt on Goal Are:\n\n'
            topAttempts.forEach(goal => {
                const { name, goals, team } = goal
                str += `${name}, ${team}: ${goals}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/yellow/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/yellow') {


            let str = 'Top Yellow Cards Are:\n\n'
            topYellowCards.forEach(goal => {
                const { name, cards, team } = goal
                str += `${name}, ${team}: ${cards}\n`
            })




            botTest.sendMessage(chatId, str);


        }

    });
    botTest.onText(/\/stats/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/stats') {
            let str = 'Your Options Are:\n\n/goals - Top Goal Scorer \n/assists - Top Assists \n/attempts - Top Attempt on Goal \n/passes - Top Accurate Passes \n/owngoals - Top Own Goals \n/red - Top Red Cards \n/yellow - Top Yellow Cards \n/dribbles - Top Dribbles \n/successfulDribbles - Top Successful Dribbles \n/keypasses - Top Accurate Key Passes \n/penaltymiss - Top Penalty Misses \n/offsides - Top Offsides \n/tackles - Top Successful Tackels \n/lostball - Top Lost Ball'
            botTest.sendMessage(chatId, str);


        }

    });
    // botTest.onText(/\//, (msg, match) => {
    //     const chatId = msg.chat.id;
    //     const { text } = msg
    //     const mahzor = text.substring(1, 3)
    //     const highlight = highlights[mahzor].find(game => {
    //         return game.id === text
    //     })

    //     if (highlight) {
    //         const { url } = highlight
    //         botTest.sendMessage(chatId, url)

    //     }


    // });

}


