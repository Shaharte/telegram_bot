// const { Telegraf } = require('telegraf')
const axios = require("axios");
const { games, wednesdeySubjects, statistics } = require('./schema');
// const pexelKey = process.env.PEXEL_KEY;
const token = '1557847459:AAGP08OPiRxV2OrCQ0FZhx4CbtOA2Btf7QA';
const testtoken = '1556993489:AAHrW-PHjchV5A9oTbPUuJiN54PZwF800h0';
const elazToken = '1523524884:AAFz46CJAiyreUFc58_Gc_3PuPtMbkDlE5g';
const stockToken = '1602258658:AAG51Ls1qMf6zp8CY3HGzRmQhmAWkv8-4sU';
var unirest = require("unirest");
const _ = require('lodash');
process.env.NTBA_FIX_319 = 1
const moment = require('moment');
const nodeSchedule = require('node-schedule');
const puppeteer = require('puppeteer');
require('events').EventEmitter.defaultMaxListeners = 15;

const subjectArr = ['1', '2', '3']
const sentensesAdd = ['הוספתי לך את הנושא יא מלך עולם', 'פששש נושא מפחיד', 'חזקקקק, יאללה רשמתי']
const sentensesRemove = ['בוזזזזזזזזזז', 'מה אתה קשוררררר, טוב נו', 'לאאאא נו למה.. יאללה בסדר']


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
    '16': [
        {
            id: 'Maccabi Netanya vs Maccabi Tel Aviv',
            url: 'https://www.youtube.com/watch?v=SJY4M6b324I',
            score: '1-3'
        },
        {
            id: 'Maccabi Haifa vs Bnei Sakhnin',
            url: 'https://www.youtube.com/watch?v=Uzh22eXkarE',
            score: '3-0'
        },
        {
            id: 'Ironi Kiryat Shmona vs Beitar Jerusalem',
            url: 'https://www.youtube.com/watch?v=0odq_ZX7ZQA',
            score: '0-2'
        },
        {
            id: 'Maccabi Petah Tikva vs Ashdod',
            url: 'https://www.youtube.com/watch?v=5HWNrmt9fO4',
            score: '2-1'
        },
        {
            id: 'Hapoel Tel Aviv vs Hapoel Haifa',
            url: 'https://www.youtube.com/watch?v=KGs47jTpYnQ',
            score: '2-2'
        },
        {
            id: 'Bnei Yehuda vs Hapoel Kfar Saba',
            url: 'https://www.youtube.com/watch?v=-2ej8a1rCZU',
            score: '1-3'
        },

    ],
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
    // nodeSchedule.scheduleJob('00 12 * * 2', () => {
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

    //initiating Puppeteer
    // nodeSchedule.scheduleJob('* 16-21 * * *', () => {
    //     try {
    //         scraper()

    //     } catch (err) { }

    // });


    const updateTo = moment().utc().format('YYYY[-]MM[-]DD');
    const scraper = async () => {
        console.log('starting to run scrapper')
        const gamesScrapper = await games.find({ updateTo })
        const oldGames = gamesScrapper.length ? gamesScrapper[0].games : []
        const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

        try {
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
                        lastScorrer: {}

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


            // for (const match of grabMatches) {
            //     const { games } = match
            //     for (const game of games) {

            //         const { id } = game
            //         const ans = await scraper2(id)
            //         game.lastScorrer = ans







            //     }
            // }

            const data = {
                updateTo,
                games: grabMatches,
            }

            await games.findOneAndUpdate({ updateTo }, data, { upsert: true, new: true });
            sendNotification(grabMatches, oldGames)
            //closing the browser

        } catch (err) {

        }
        finally {
            console.log('closing browser - scrapper')
            await browser.close();

        }

        //handling any errors



    }
    const scraperStat = async () => {
        console.log('starting to run statitics scrapper')
        // const stats = []
        const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

        const page = await browser.newPage();
        try {

            //opening a new page and navigating to Fleshscore
            await page.goto('https://www.football.co.il/stats/');
            await page.waitForSelector('body');

            //manipulating the page's content
            let allStatss = await page.evaluate(() => {
                document.querySelector(".stats-see-more-btn").click();
                document.querySelector(".stats-see-more-btn").click();
                document.querySelector(".stats-see-more-btn").click();
                document.querySelector(".stats-see-more-btn").click();
                let ststtt = document.body.querySelector('.stats-page');
                let allStats = ststtt.querySelectorAll('.stats-category-item');
                let stats = []

                //storing the post items in an array then selecting for retrieving content
                allStats.forEach(item => {
                    let arr = []
                    try {
                        let title = item.querySelector('.stats-category-item-title').innerText;
                        let allPlayers = item.querySelectorAll('.player-list-item')
                        allPlayers.forEach(player => {
                            let count = item.querySelector('.player-list-player-count').innerText;
                            let name = item.querySelector('.player-list-player-name').innerText;
                            let position = item.querySelector('.player-list-player-role').innerText;

                            arr.push({
                                name,
                                count,
                                position
                            })

                        })
                        stats.push({
                            [title]: arr
                        })
                    } catch (err) {



                    }


                });


                return stats;
            });
            console.log(allStatss)
            const data = {
                updateTo,
                stats: allStatss
            }
            await statistics.findOneAndUpdate({ updateTo }, data, { upsert: true, new: true })

            //outputting the scraped data
        } catch (err) {

        }
        finally {
            console.log('browser close stats')

            //closing the browser
            await browser.close();
        }



    }

    nodeSchedule.scheduleJob('* 16-19 * * *', () => {
        try {
            scraper()

        } catch (err) { }

    });

    nodeSchedule.scheduleJob('00 8-10 * * *', () => {
        try {
            scraperStat()

        } catch (err) { }

    });

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
                    let scorrers = {
                        scorer: '',
                        assist: '',
                        sub: '',
                        min: '',
                        bla: ""
                    };

                    let allLiveMatches = document.body.querySelectorAll('.detailMS__incidentRow')

                    //storing the post items in an array then selecting for retrieving content
                    scrapeItems = [];

                    allLiveMatches.forEach(async item => {
                        try {
                            let goal = item.querySelector('.soccer-ball') ? true : false;
                            // let red = item.querySelector('.r-card') ? true : false;
                            if (goal) {
                                // let yl = item.querySelector('.yr-card') ? true : false;
                                // if (goal) {
                                let scorer = item.querySelector('.participant-name').innerText || ''
                                if (scorer !== '') {
                                    scorrers = {
                                        goal,
                                        scorer,
                                        assist: item.querySelector('.assist') ? item.querySelector('.assist').innerText : '',
                                        sub: item.querySelector('.subincident-name') ? item.querySelector('.subincident-name').innerText : '',
                                        min: item.querySelector('.time-box') ? item.querySelector('.time-box').innerText : '',
                                        team: item.className,

                                    }
                                }

                            }
                            // else if (red || yl) {
                            //     scorrers = {
                            //         scorer: item.querySelector('.participant-name') ? item.querySelector('.participant-name').innerText : '',
                            //         red: true,
                            //         min: item.querySelector('.time-box') ? item.querySelector('.time-box').innerText : '',
                            //         team: item.className,

                            //     }
                            // }



                        }
                        catch (err) {
                            console.log('err', err)

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

    const sendNotification = (newGames, oldGames) => {
        let str = ``
        newGames.forEach(league => {
            const { name, country, games = [] } = league

            const findOld = oldGames.find(old => { return old.name === name && old.country === country })
            if (findOld) {

                games.forEach(game => {
                    const { score, time, min, homeTeam, awayTeam, lastScorrer } = game
                    let scorer = '';
                    let assist = '';
                    let sub = '';
                    let scorerMin = '';
                    let team = '';
                    if (lastScorrer.scorer) {
                        scorer = lastScorrer.scorer
                        assist = lastScorrer.assist
                        sub = lastScorrer.sub
                        scorerMin = lastScorrer.min
                        team = lastScorrer.team ? (lastScorrer.team.includes('home') ? 'home' : 'away') : ''
                    }
                    const oldGame = findOld.games.find(old => { return old.homeTeam === homeTeam && old.awayTeam === awayTeam })


                    if (oldGame) {
                        // console.log('oldGame',oldGame)
                        // console.log('game',game)
                        if (oldGame.score !== score || (oldGame.min !== min && min !== '' || min === 'Finished')) {
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

                            }
                            //  else if (oldGame.lastScorrer.scorer === '' && scorer !== '' || oldGame.lastScorrer.scorer && oldGame.lastScorrer.min !== scorerMin && scorer !== '') {
                            //     const scoreTeam = team === 'home' ? homeTeam : (team === 'away' ? awayTeam : '')
                            //     str += `Update Scorer - ${scoreTeam}: ${sub} ${scorer} ${assist}\n`
                            //     botTest.sendMessage('404011627', str)

                            // }
                            console.log(str)
                            str = ``
                        }
                    }

                })

            }


        })

    }



    // getting next fixtsure - ligat HaAl
    botTest.onText(/\/next/, async (msg, match) => {
        const chatId = msg.chat.id;
        console.log('chatId:', chatId)
        const { text } = msg
        if (text === '/next') {
            let str = 'המחזור הבא:\n\n'

            const browser = await puppeteer
                .launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })


            //opening a new page and navigating to Fleshscore
            const page = await browser.newPage();

            await page.goto(`https://www.football.co.il/`);
            await page.waitForSelector('body');

            try {
                //manipulating the page's content

                let allStats = await page.evaluate(() => {
                    let rounds = document.body.querySelectorAll('.roundName');
                    let mahzor = ''
                    rounds.forEach(roundd => {
                        if (window.getComputedStyle(roundd).visibility !== "hidden")

                            mahzor = roundd.innerText

                    })
                    let arr = mahzor.split(' ');
                    const round = arr[1] || '18'
                    // Do something..
                    let games = document.body.querySelectorAll(`.game-round-header-${round}`);
                    const higjlights = []

                    games.forEach(game => {
                        let date = game.querySelector('.matchDate').innerText;
                        let teams = game.querySelector('.teamNames').innerText;

                        higjlights.push({ teams, date })

                    })



                    // });


                    return higjlights;
                });
                // console.log(allStats)
                // await browser.close();
                if (allStats.length) {
                    allStats.forEach(stat => {
                        const { teams = '', date = '' } = stat
                        str += `תאריך: ${date}\n`
                        str += `${teams}\n\n`

                    })
                    botTest.sendMessage(chatId, str)

                    //outputting the scraped data
                }
                //closing the browser
            }
            catch (err) {
                console.log(err)



            }
            finally {
                console.log('closing browser - next fixure')
                await browser.close();

            }


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

                } else {
                    str += `\n`

                }
            })
            // console.log(str)
            if (mahzor !== 'im') {

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
    //stats
    botTest.onText(/\/goals/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        console.log('match',match)
        console.log('text',text)
        if (match[0] === '/goals') {
            const search = 'שערים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מלך שערים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/minutes/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (match[0] === '/minutes') {
            const search = 'דקות משחק'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'דקות משחק:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/assists/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (match[0] === '/assists') {
            const search = 'בישולים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מלך בישולים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/attempt_on_goal/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (match[0] === '/attempt_on_goal') {
            const search = 'איומים לשער'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים לשער:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/key_pass/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (match[0] === '/key_pass') {
            const search = 'מסירות מפתח - ניסיונות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'ניסיונות מסירות מפתח:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/accurate_key_passes/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (match[0] === '/accurate_key_passes') {
            const search = 'מסירות מפתח מדוייקות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מסירות מפתח מדוייקות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/on_target/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (match[0] === '/on_target') {
            const search = 'איומים למסגרת'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים למסגרת:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/attempts_inside_the_box/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/attempts_inside_the_box') {
            const search = 'איומים מתוך הרחבה'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים מתוך הרחבה:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/attempts_outside_the_box/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/attempts_outside_the_box') {
            const search = 'איומים מחוץ לרחבה'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים מחוץ הרחבה:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/attempts_off_target/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/attempts_off_target') {
            const search = 'איומים מחוץ למסגרת'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים מחוץ למסגרת:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/cross/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/cross') {
            const search = 'כדורי רוחב'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'כדורי רוחב:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/passes/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/passes') {
            const search = 'מסירות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מסירות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/accurate_passes/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/accurate_passes') {
            const search = 'מסירות מדויקות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מסירות מדויקות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/air_challange/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        console.log(text)
        if (text === '/air_challange') {
            const search = 'מאבקי אוויר'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מאבקי אוויר:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`

                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/won_air_challange/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/won_air_challange') {
            const search = 'מאבקי אוויר מוצלחים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מאבקי אוויר מוצלחים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/ground_challenges/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/ground_challenges') {
            const search = 'מאבקי קרקע'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מאבקי קרקע:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/won_ground_challenges/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/won_ground_challenges') {
            const search = 'מאבקי קרקע מוצלחים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מאבקי קרקע מוצלחים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/dribbles/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/dribbles') {
            const search = 'דריבלים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'דריבלים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/successful_dribbles/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/successful_dribbles') {
            const search = 'דריבלים מוצלחים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'דריבלים מוצלחים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/tackles/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/tackles') {
            const search = 'תיקולים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'תיקולים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/successful_tackles/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/successful_tackles') {
            const search = 'תיקולים מוצלחים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'תיקולים מוצלחים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/ball_recoveries/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/ball_recoveries') {
            const search = 'חילוצי כדור'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'חילוצי כדור:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/ball_recoveries_in_opponents_half/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/ball_recoveries_in_opponents_half') {
            const search = 'חילוצי כדור בחצי היריבה'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'חילוצי כדור בחצי היריבה:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/ball_recoveries_in_own_half/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/ball_recoveries_in_own_half') {
            const search = 'חילוצי כדור בחצי הגנתי'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'חילוצי כדור בחצי הגנתי:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/blocked_attempts_on_goal/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/blocked_attempts_on_goal') {
            const search = 'איומים שנבלמו'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים שנבלמו:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/lost_ball/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/lost_ball') {
            const search = 'איבודי כדור'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איבודי כדור:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/lost_ball_own_half/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/lost_ball_own_half') {
            const search = 'איבודי כדור בחצי קבוצתו'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איבודי כדור בחצי קבוצתו:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/own_goal/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/own_goal') {
            const search = 'שערים עצמיים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'שערים עצמיים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/penalty_miss/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/penalty_miss') {
            const search = 'החמצות פנדל'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'החמצות פנדל:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/yellow_card/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/yellow_card') {
            const search = 'צהובים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'צהובים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/red_card/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/red_card') {
            const search = 'אדומים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'אדומים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/fouls/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/fouls') {
            const search = 'עבירות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'עבירות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/opponent_fouls/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/opponent_fouls') {
            const search = 'עבירות - יריבות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'עבירות - יריבות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/offside/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/offside') {
            const search = 'נבדלים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'נבדלים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/appearances/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/appearances') {
            const search = 'הופעות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'הופעות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/sub_out/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/sub_out') {
            const search = 'הוחלף'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'הוחלף:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/sub_in/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/sub_in') {
            const search = 'נכנס כמחליף'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'נכנס כמחליף:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/stats/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/stats') {
            let str = 'סטטיסטיקות מנהלת לכדורגל:\n\n/goals - מלך שערים\n/assists - בישולים\n/attempt_on_goal - איומים לשער\n/minutes - דקות משחק\n/key_pass - מסירות מפתח ניסיונות\n/accurate_key_passes - מסירות מפתח מדוייקות\n/passes - מסירות \n/accurate_passes - מסירות מדוייקות\n/on_target - איומים למסגרת\n/attempts_inside_the_box - איומים מתוך הרחבה\n/attempts_outside_the_box - איומים מחוץ לרחבה\n/attempts_off_target - איומים מחוץ למסגרת\n/cross - כדורי רוחב\n/accurate_passes - מסירות מדויקות\n/air_challange - מאבקי אוויר\n/won_air_challange - מאבקי אוויר מוצלחים\n/ground_challenges - מאבקי קרקע\n/won_ground_challenges - מאבקי קרקע מוצלחים\n/dribbles - דריבלים\n/successful_dribbles - דריבלים מוצלחים\n/tackles -תיקולים\n/successful_tackles - תיקולים מוצלחים\n'
            str+='/ball_recoveries - חילוצי כדור\n/ball_recoveries_in_opponents_half - חילוצי כדור בחצי היריבה\n/ball_recoveries_in_own_half חילוצי כדור בחצי הגנתי\n/blocked_attempts_on_goal - איומים שנבלמו\n/lost_ball - איבודי כדור\n/lost_ball_own_half - איבודי כדור בחצי קבוצתו\n/penalty_miss - החמצות פנדל\n/own_goal - שערים עצמיים\n/yellow_card - צהובים\n/red_card - אדומים\n/fouls - עבירות\n/opponent_fouls - עבירות יריבות\n/offside - נבדלים\n/appearances - הופעות\n/sub_out - הוחלף\n/sub_in - נכנס כמחליף\n'
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
    // nodeSchedule.scheduleJob('* * * * *', () => {
    //     try {
    //         scraper()

    //     } catch (err) { }

    // });

    const updateTo = moment().utc().format('YYYY[-]MM[-]DD');
    const scraper = async () => {
        console.log('starting to run scrapper')
        const gamesScrapper = await games.find({ updateTo })
        const oldGames = gamesScrapper.length ? gamesScrapper[0].games : []
        const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

        try {
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
                        lastScorrer: {}

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
                    return ((game.country === 'EGYPT' && game.name === "Premier League"))
                })


                return finalData;
            });
            //outputting the scraped data


            // for (const match of grabMatches) {
            //     const { games } = match
            //     for (const game of games) {

            //         const { id } = game
            //         const ans = await scraper2(id)
            //         game.lastScorrer = ans







            //     }
            // }

            const data = {
                updateTo,
                games: grabMatches,
            }

            await games.findOneAndUpdate({ updateTo }, data, { upsert: true, new: true });
            sendNotification(grabMatches, oldGames)
            //closing the browser

        } catch (err) {

        }
        finally {
            console.log('closing browser - scrapper')
            await browser.close();

        }

        //handling any errors



    }
    const scraperStat = async () => {
        console.log('starting to run statitics scrapper')
        // const stats = []
        const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

        const page = await browser.newPage();
        try {

            //opening a new page and navigating to Fleshscore
            await page.goto('https://www.football.co.il/stats/');
            await page.waitForSelector('body');

            //manipulating the page's content
            let allStatss = await page.evaluate(() => {
                document.querySelector(".stats-see-more-btn").click();
                document.querySelector(".stats-see-more-btn").click();
                document.querySelector(".stats-see-more-btn").click();
                document.querySelector(".stats-see-more-btn").click();
                let ststtt = document.body.querySelector('.stats-page');
                let allStats = ststtt.querySelectorAll('.stats-category-item');
                let stats = []

                //storing the post items in an array then selecting for retrieving content
                allStats.forEach(item => {
                    let arr = []
                    try {
                        let title = item.querySelector('.stats-category-item-title').innerText;
                        let allPlayers = item.querySelectorAll('.player-list-item')
                        allPlayers.forEach(player => {
                            let count = player.querySelector('.player-list-player-count').innerText;
                            let name = player.querySelector('.player-list-player-name').innerText;
                            let position = player.querySelector('.player-list-player-role').innerText;
                            let image = player.querySelector('.image').src;
                            let href = player.querySelector('a').href;

                            // let arr = position.split['|']
                            // position = arr.length ? arr[0] : position
                            arr.push({
                                name,
                                count,
                                position,
                                image,
                                href
                            })

                        })
                        stats.push({
                            [title]: arr
                        })
                    } catch (err) {

                        console.log(err)

                    }


                });


                return stats;
            });
            console.log(allStatss)
            const data = {
                updateTo,
                stats: allStatss
            }
            await statistics.findOneAndUpdate({}, data, { upsert: true, new: true })

            //outputting the scraped data
        } catch (err) {

        }
        finally {
            console.log('browser close stats')

            //closing the browser
            await browser.close();
        }



    }
    // scraperStat()
    //initiating Puppeteer
    // const ans = await scraper2('tKmMduCT')
    // console.log('ans',ans)
    // nodeSchedule.scheduleJob('* * * * *', () => {
    //     try {
    //         scraper()

    //     } catch (err) { }

    // });

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
                    let scorrers = {
                        scorer: '',
                        assist: '',
                        sub: '',
                        min: '',
                        bla: ""
                    };

                    let allLiveMatches = document.body.querySelectorAll('.detailMS__incidentRow')

                    //storing the post items in an array then selecting for retrieving content
                    scrapeItems = [];

                    allLiveMatches.forEach(async item => {
                        try {
                            let goal = item.querySelector('.soccer-ball') ? true : false;
                            // let red = item.querySelector('.r-card') ? true : false;
                            if (goal) {
                                // let yl = item.querySelector('.yr-card') ? true : false;
                                // if (goal) {
                                let scorer = item.querySelector('.participant-name').innerText || ''
                                if (scorer !== '') {
                                    scorrers = {
                                        goal,
                                        scorer,
                                        assist: item.querySelector('.assist') ? item.querySelector('.assist').innerText : '',
                                        sub: item.querySelector('.subincident-name') ? item.querySelector('.subincident-name').innerText : '',
                                        min: item.querySelector('.time-box') ? item.querySelector('.time-box').innerText : '',
                                        team: item.className,

                                    }
                                }

                            }
                            // else if (red || yl) {
                            //     scorrers = {
                            //         scorer: item.querySelector('.participant-name') ? item.querySelector('.participant-name').innerText : '',
                            //         red: true,
                            //         min: item.querySelector('.time-box') ? item.querySelector('.time-box').innerText : '',
                            //         team: item.className,

                            //     }
                            // }



                        }
                        catch (err) {
                            console.log('err', err)

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

    const sendNotification = (newGames, oldGames) => {
        let str = ``
        newGames.forEach(league => {
            const { name, country, games = [] } = league

            const findOld = oldGames.find(old => { return old.name === name && old.country === country })
            if (findOld) {

                games.forEach(game => {
                    const { score, time, min, homeTeam, awayTeam, lastScorrer } = game
                    let scorer = '';
                    let assist = '';
                    let sub = '';
                    let scorerMin = '';
                    let team = '';
                    if (lastScorrer.scorer) {
                        scorer = lastScorrer.scorer
                        assist = lastScorrer.assist
                        sub = lastScorrer.sub
                        scorerMin = lastScorrer.min
                        team = lastScorrer.team ? (lastScorrer.team.includes('home') ? 'home' : 'away') : ''
                    }
                    const oldGame = findOld.games.find(old => { return old.homeTeam === homeTeam && old.awayTeam === awayTeam })


                    if (oldGame) {
                        // console.log('oldGame',oldGame)
                        // console.log('game',game)
                        if (oldGame.score !== score || (oldGame.min !== min && min !== '' || min === 'Finished')) {
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

                            }
                            //  else if (oldGame.lastScorrer.scorer === '' && scorer !== '' || oldGame.lastScorrer.scorer && oldGame.lastScorrer.min !== scorerMin && scorer !== '') {
                            //     const scoreTeam = team === 'home' ? homeTeam : (team === 'away' ? awayTeam : '')
                            //     str += `Update Scorer - ${scoreTeam}: ${sub} ${scorer} ${assist}\n`
                            //     botTest.sendMessage('404011627', str)

                            // }
                            console.log(str)
                            str = ``
                        }
                    }

                })

            }


        })

    }







    // getting next fixtsure - ligat HaAl

    botTest.onText(/\/test/, (msg, match) => {
        const chatId = msg.chat.id;
        console.log('chatId:', chatId)
        const { text } = msg
        if (text === '/test') {
            let str = 'hey there'
            const opts = {
                reply_markup: {
                    keyboard: [
                        ['FAQ'],
                        ['Buy']
                    ]
                },
                parse_mode: 'HTML'
            };

            botTest.sendMessage(chatId, str, opts)
        }
    });
    // botTest.onText(/\/next/, (msg, match) => {
    //     const chatId = msg.chat.id;
    //     console.log('chatId:', chatId)
    //     const { text } = msg
    //     if (text === '/next') {
    //         let str = 'Next Fixtures Are:\n\n'
    //         nextMatch.forEach(match => {
    //             const { game, home, draw, away, time } = match
    //             str += `${game}, ${time}\n\n`

    //         })
    //         botTest.sendMessage(chatId, str)
    //     }
    // });
    botTest.onText(/\/next/, async (msg, match) => {
        const chatId = msg.chat.id;
        console.log('chatId:', chatId)
        const { text } = msg
        if (text === '/next') {
            let str = 'המחזור הבא:\n\n'

            const browser = await puppeteer
                .launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })


            //opening a new page and navigating to Fleshscore
            const page = await browser.newPage();

            await page.goto(`https://www.football.co.il/`);
            await page.waitForSelector('body');

            try {
                //manipulating the page's content

                let allStats = await page.evaluate(() => {
                    let rounds = document.body.querySelectorAll('.roundName');
                    let mahzor = ''
                    rounds.forEach(roundd => {
                        if (window.getComputedStyle(roundd).visibility !== "hidden")

                            mahzor = roundd.innerText

                    })
                    let arr = mahzor.split(' ');
                    const round = arr[1] || '18'
                    // Do something..
                    let games = document.body.querySelectorAll(`.game-round-header-${round}`);
                    const higjlights = []

                    games.forEach(game => {
                        let date = game.querySelector('.matchDate').innerText;
                        let teams = game.querySelector('.teamNames').innerText;

                        higjlights.push({ teams, date })

                    })



                    // });


                    return higjlights;
                });
                // console.log(allStats)
                // await browser.close();
                if (allStats.length) {
                    allStats.forEach(stat => {
                        const { teams = '', date = '' } = stat
                        str += `תאריך: ${date}\n`
                        str += `${teams}\n\n`

                    })
                    botTest.sendMessage(chatId, str)

                    //outputting the scraped data
                }
                //closing the browser
            }
            catch (err) {
                console.log(err)



            }
            finally {
                console.log('closing browser - next fixure')
                await browser.close();

            }


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
            const opts = {
                reply_markup: {
                    keyboard: [
                        ['/table'],
                        ['/live'],
                        ['/stats'],
                        ['/last'],
                        ['/teams'],
                        ['/mahzorim'],
                        ['/ligyoners'],
                    ]
                },
                parse_mode: 'HTML'
            };

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

                } else {
                    str += `\n`

                }
            })
            // console.log(str)
            if (mahzor !== 'im') {

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

    //stats
    botTest.onText(/\/שערים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/שערים') {
            const search = 'שערים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מלך שערים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                    str += `${name}: ${arr}, ${count} \n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/דקות_משחק/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/minPlayed') {
            const search = 'דקות משחק'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'דקות משחק:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/בישולים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/בישולים') {
            const search = 'בישולים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מלך בישולים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/איומים_לשער/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/איומים_לשער') {
            const search = 'איומים לשער'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים לשער:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/מסירות_מפתח_ניסיונות/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/מסירות_מפתח_ניסיונות') {
            const search = 'מסירות מפתח ניסיונות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'ניסיונות מסירות מפתח:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/מסירות_מפתח_מדוייקות/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/מסירות_מפתח_מדוייקות') {
            const search = 'מסירות מפתח מדוייקות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מסירות מפתח מדוייקות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/איומים_למסגרת/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/איומים_למסגרת') {
            const search = 'איומים למסגרת'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים למסגרת:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/איומים_מתוך_הרחבה/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/איומים_מתוך_הרחבה') {
            const search = 'איומים מתוך הרחבה'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים מתוך הרחבה:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/איומים_מחוץ_לרחבה/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/איומים_מחוץ_לרחבה') {
            const search = 'איומים מחוץ לרחבה'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים מחוץ הרחבה:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/איומים_מחוץ_למסגרת/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/איומים_מחוץ_למסגרת') {
            const search = 'איומים מחוץ למסגרת'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים מחוץ למסגרת:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/כדורי_רוחב/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/כדורי_רוחב') {
            const search = 'כדורי רוחב'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'כדורי רוחב:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/מסירות/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/מסירות') {
            const search = 'מסירות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מסירות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/מסירות_מדויקות/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/מסירות_מדויקות') {
            const search = 'מסירות מדויקות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מסירות מדויקות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/מאבקי_אוויר/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        console.log(text)
        if (text === '/מאבקי_אוויר') {
            const search = 'מאבקי אוויר'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מאבקי אוויר:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`

                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/מאבקי_אוויר_מוצלחים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/מאבקי_אוויר_מוצלחים') {
            const search = 'מאבקי אוויר מוצלחים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מאבקי אוויר מוצלחים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/מאבקי_קרקע/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/מאבקי_קרקע') {
            const search = 'מאבקי קרקע'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מאבקי קרקע:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/מאבקי_קרקע_מוצלחים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/מאבקי_קרקע_מוצלחים') {
            const search = 'מאבקי קרקע מוצלחים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'מאבקי קרקע מוצלחים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/דריבלים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/דריבלים') {
            const search = 'דריבלים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'דריבלים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/דריבלים_מוצלחים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/דריבלים_מוצלחים') {
            const search = 'דריבלים מוצלחים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'דריבלים מוצלחים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/תיקולים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/תיקולים') {
            const search = 'תיקולים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'תיקולים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/תיקולים_מוצלחים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/תיקולים_מוצלחים') {
            const search = 'תיקולים מוצלחים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'תיקולים מוצלחים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/חילוצי_כדור/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/חילוצי_כדור') {
            const search = 'חילוצי כדור'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'חילוצי כדור:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/חילוצי_כדור_בחצי_היריבה/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/חילוצי_כדור_בחצי_היריבה') {
            const search = 'חילוצי כדור בחצי היריבה'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'חילוצי כדור בחצי היריבה:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/חילוצי_כדור_בחצי_הגנתי/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/חילוצי_כדור_בחצי_הגנתי') {
            const search = 'חילוצי כדור בחצי הגנתי'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'חילוצי כדור בחצי הגנתי:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/איומים_שנבלמו/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/איומים_שנבלמו') {
            const search = 'איומים שנבלמו'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איומים שנבלמו:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/איבודי_כדור/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/איבודי_כדור') {
            const search = 'איבודי כדור'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איבודי כדור:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/איבודי_כדור_בחצי_קבוצתו/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/איבודי_כדור_בחצי_קבוצתו') {
            const search = 'איבודי כדור בחצי קבוצתו'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'איבודי כדור בחצי קבוצתו:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/שערים_עצמיים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/שערים_עצמיים') {
            const search = 'שערים עצמיים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'שערים עצמיים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/החמצות_פנדל/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/החמצות_פנדל') {
            const search = 'החמצות פנדל'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'החמצות פנדל:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/צהובים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/צהובים') {
            const search = 'צהובים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'צהובים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/אדומים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/אדומים') {
            const search = 'אדומים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'אדומים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/עבירות/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/עבירות') {
            const search = 'עבירות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'עבירות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/עבירות_יריבות/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/עבירות_יריבות') {
            const search = 'עבירות - יריבות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'עבירות - יריבות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/נבדלים/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/נבדלים') {
            const search = 'נבדלים'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'נבדלים:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/הופעות/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/הופעות') {
            const search = 'הופעות'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'הופעות:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/הוחלף/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/הוחלף') {
            const search = 'הוחלף'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'הוחלף:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/נכנס_כמחליף/, async (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/נכנס_כמחליף') {
            const search = 'נכנס כמחליף'
            try {
                const arr = await statistics.find({})
                const stats = arr.length ? arr[0].stats : []

                const topArr = stats.find((k, v) => {
                    return k[search]
                })
                let str = 'נכנס כמחליף:\n\n'
                topArr[search].forEach(item => {
                    const { name, count, position, href } = item
                    const arr = position.split('|')[1]
                    str += `${name}: ${arr}, ${count} \n`
                    str += `סטיסטיקות שחקן: ${href}\n\n`
                })

                botTest.sendMessage(chatId, str);
            }
            catch (err) {

            }
        }

    });
    botTest.onText(/\/stats/, (msg, match) => {
        const chatId = msg.chat.id;
        const { text } = msg
        if (text === '/stats') {
            let str = 'סטטיסטיקות מנהלת לכדורגל:\n\n/שערים\n/בישולים\n/איומים_לשער\n/דקות_משחק\n/מסירות_מפתח_ניסיונות\n/מסירות_מפתח_מדוייקות\n/מסירות\n/איומים_מתוך_הרחבה\n/איומים_מחוץ_לרחבה\n/איומים_מחוץ_למסגרת\n/כדורי_רוחב\n/מסירות_מדויקות\n/מאבקי_אוויר\n/מאבקי_אוויר_מוצלחים\n/מאבקי_קרקע\n/מאבקי_קרקע_מוצלחים\n/דריבלים\n/דריבלים_מוצלחים\n/תיקולים\n/תיקולים_מוצלחים\n/חילוצי_כדור\n/חילוצי_כדור_בחצי_היריבה\n/חילוצי_כדור_בחצי_הגנתי\n/איומים_שנבלמו\n/איבודי_כדור\n/איבודי_כדור_בחצי_קבוצתו\n/החמצות_פנדל\n/צהובים\n/אדומים\n/עבירות\n/עבירות_יריבות\n/נבדלים\n/הופעות\n/הוחלף\n/נכנס_כמחליף\n'
            botTest.sendMessage(chatId, str);


        }

    });

    // end - stats








}
module.exports.ahanhala = async function () {
    const updateTo = moment().utc().format('YYYY[-]MM[-]DD');

    const botTest = new TelegramBot(elazToken, { polling: true });
    nodeSchedule.scheduleJob('00 20 * * 3', async () => {

        const data = {
            updateTo,
            subjects: ['1', '2', '3']
        }
        await wednesdeySubjects.findOneAndUpdate({}, data, { upsert: true, new: true })
    })

    // });



    botTest.onText(/\נושא:/, async (msg, match) => {
        console.log('msg', msg)
        const chatId = msg.chat.id;
        const text = msg.text.substring(0, 5)
        let str = ``
        if (text === 'נושא:' && !(msg.text.includes('בטל'))) {
            let input = msg.text.substring(5, msg.text.length).trim()
            if (input !== '') {
                const subjectsarray = await wednesdeySubjects.find({})
                const { subjects = [] } = subjectsarray[0]

                const isThere = subjects.find(o => { return o.trim() === input.trim() })
                if (isThere) {
                    str += `יש נושא כזה כבר.. למה אתה משגע אותי`
                } else {
                    subjects.push(input)
                    const data = {
                        updateTo,
                        subjects
                    }
                    await wednesdeySubjects.findOneAndUpdate({}, data, { upsert: true, new: true });

                    str = sentensesAdd[Math.floor(Math.random() * sentensesAdd.length)];

                }

            } else {
                str += `אל תנסה אותי.. תרשום נושא לנושא`

            }
            botTest.sendMessage(chatId, str);

        }
        else if (text === 'בטל נ') {
        } else {
            str += 'פקודה לא חוקית יא נקניק'

            botTest.sendMessage(chatId, str);
        }

    });

    //jsa kv,rx
    botTest.onText(/(.+)/, async (msg, match) => {
        console.log('msg1', msg)
        const chatId = msg.chat.id;
        let str = ``
        const { text } = msg
        console.log('text', text)

        if (text === '🧐') {
            console.log('text', text)

            const { reply_to_message } = msg
            if (reply_to_message) {
                let input = reply_to_message.text.substring(5, reply_to_message.text.length).trim()
                console.log('input', input)
                const subjectsarray = await wednesdeySubjects.find({})
                const { subjects = [] } = subjectsarray[0]
                let isThere = subjects.find(o => { return o.trim() === input.trim() })
                if (isThere) {
                    isThere += ` ${text}`
                    console.log('isThere', isThere)

                }


            }
            // let input = msg.text.substring(5, msg.text.length).trim()
            // if (input !== '') {
            //     const subjectsarray = await wednesdeySubjects.find({})
            //     const { subjects = [] } = subjectsarray[0]

            //     const isThere = subjects.find(o => { return o.trim() === input.trim() })
            //     if (isThere) {
            //         str += `יש נושא כזה כבר.. למה אתה משגע אותי`
            //     } else {
            //         subjects.push(input)
            //         const data = {
            //             updateTo,
            //             subjects
            //         }
            //         await wednesdeySubjects.findOneAndUpdate({}, data, { upsert: true, new: true });

            //         str = sentensesAdd[Math.floor(Math.random() * sentensesAdd.length)];

            //     }

            // } else {
            //     str += `אל תנסה אותי.. תרשום נושא לנושא`

            // }
            // botTest.sendMessage(chatId, str);

        }


    });
    botTest.onText(/\+1/, async (msg, match) => {
        console.log('msg1', msg)
        const chatId = msg.chat.id;
        let str = ``
        const { text } = msg

        if (text === '+1') {
            const { reply_to_message } = msg
            if (reply_to_message) {
                let input = reply_to_message.text.substring(5, reply_to_message.text.length).trim()
                console.log('input', input)
                const subjectsarray = await wednesdeySubjects.find({})
                let { subjects = [] } = subjectsarray[0]
                let isThere = subjects.find(o => { return o.trim() === input.trim() })
                if (isThere) {
                    isThere += ` (${text})`
                    console.log('subjects', subjects)
                    const index = subjects.indexOf(input)
                    console.log('index', index)
                    subjects[index] = isThere
                    const data = {
                        updateTo,
                        subjects
                    }
                    await wednesdeySubjects.findOneAndUpdate({}, data, { upsert: true, new: true })


                }


            }


        }


    });

    botTest.onText(/\הסר:/, async (msg, match) => {
        const chatId = msg.chat.id;
        const text = msg.text.substring(0, 4)
        const { username } = msg.from
        let str = ``
        if (text === 'הסר:') {
            if (username === 'falustang') {
                str += `רשימת הנושאים: \n`

                const data = {
                    updateTo,
                    subjects: ['1', '2', '3']
                }
                await wednesdeySubjects.findOneAndUpdate({}, data, { upsert: true, new: true })
                for (let i = 1; i <= data.subjects.length; i++) {
                    str += `${i}: ${data.subjects[i - 1]}\n`
                }


            }

            else {
                str += `מי אתה חושב שאתה ${username}? !רק המזכל יכול למחוק את כל הנושאים`

            }
        }
        else {
            str += 'פקודה לא חוקית יא נקניק'
        }
        botTest.sendMessage(chatId, str);

    });
    botTest.onText(/\בטל נושא:/, async (msg, match) => {
        const chatId = msg.chat.id;
        const text = msg.text.substring(0, 9)
        console.log('text', text)

        let str = ``
        if (text === 'בטל נושא:') {
            let input = msg.text.substring(9, msg.text.length).trim()
            if (input !== "1" && input !== "2" && input !== "3") {
                console.log('input2', input)


                const subjectsarray = await wednesdeySubjects.find({})
                const { subjects = [] } = subjectsarray[0]
                console.log('subjects', subjects)
                const index = subjects.indexOf(input)
                console.log('index', index)

                if (index === -1) {
                    str += `אין נושא כזה :)`
                } else {
                    subjects.splice(index, 1);
                    const data = {
                        updateTo,
                        subjects
                    }
                    await wednesdeySubjects.findOneAndUpdate({}, data, { upsert: true, new: true });
                    str = sentensesRemove[Math.floor(Math.random() * sentensesRemove.length)];

                }


            } else {
                str += ' פחחחחחח, עלק מנסה להוריד נושא קבוע. מה יש לך?'

            }

        }
        else {
            str += 'פקודה לא חוקית יא נקניק'
        }
        botTest.sendMessage(chatId, str)


    });
    botTest.onText(/\נושאים:/, async (msg, match) => {
        const chatId = msg.chat.id;
        const text = match[0]
        let str = ``
        if (text === 'נושאים:') {
            const subjectsarray = await wednesdeySubjects.find({})
            const { subjects = [] } = subjectsarray[0]
            str += `רשימת הנושאים: \n`
            for (let i = 1; i <= subjects.length; i++) {
                str += `${i}: ${subjects[i - 1]}\n`
            }


        }
        else {
            str += 'פקודה לא חוקית יא נקניק'
        }
        botTest.sendMessage(chatId, str);

    });

}
module.exports.stocks = async function () {
    const updateTo = moment().utc().format('YYYY[/]MM[/]DD');

    const botTest = new TelegramBot(stockToken, { polling: true });
    const yahooStockAPI = require('yahoo-stock-api');
    const yahooStockPrices = require('yahoo-stock-prices')


    // });



    // botTest.onText(/\/stock/, async (msg, match) => {
    //     const yahooStockAPI = require('yahoo-stock-api');
    //     const chatId = msg.chat.id;
    //     console.log('chatId:', chatId)
    //     const { text } = msg
    //     const stock = 'TLV:LUMI'
    //     console.log('stock:', stock)
    //     const date = new Date(updateTo);
    //     let str = ``
    //     const data = await yahooStockAPI.getHistoricalPrices(date, date, stock, '1d')
    //     const { response = [] } = data
    //     console.log(data); // { currency: 'USD', price: 132.05 }
    //     if (response.length) {
    //         const { date, open, high, low, close, volume, adjclose } = response[0]
    //         str += `${stock}:\n`
    //         str += `Price: ${close}\n`


    //         botTest.sendMessage(chatId, str)
    //     }


    // });

    botTest.onText(/\//, async (msg, match) => {
        const chatId = msg.chat.id;
        // console.log('chatId:', chatId)
        const { text } = msg
        let stock = text.substring(1, text.length).toUpperCase()
        console.log('stock:', stock)
        let str = ``
        try {
            const date = new Date(updateTo);
            const data = await yahooStockPrices.getCurrentData(stock);
            // const data2 = await yahooStockAPI.getHistoricalPrices(date, date, stock, '1d');
            // console.log('data:', data)
            // console.log('data2:', data2)
            const preData = await yahooStockAPI.getSymbol(stock)
            // console.log('preData:', preData)
            // let { response = [] } = data2
            // let { close = 1 } = response[0]
            let { previousClose, open } = preData.response

            const { price = 0, currency } = data
            const symbol = currency === 'USD' ? '$' : ''
            let percentage = ((Number(previousClose) - Number(price)) / Number(previousClose) * 100).toFixed(2).toString()
            const arrow = price < previousClose ? '-' : (previousClose < price ? '+' : '')
            percentage = percentage < 0 ? percentage.substring(1, percentage.length) + '%' : percentage + '%'
            //  const opts = {
            //     reply_markup:{
            //       keyboard: [
            //         ['FAQ'],
            //         ['Buy']
            //       ]
            //     },
            //     parse_mode: 'HTML'
            //   };

            if (price > 0) {
                str += `${stock}:\n`
                str += `Price: ${symbol}${price}, ${arrow} ${percentage}\n`
                botTest.sendMessage(chatId, str)
            }

        } catch (err) {

            const browser = await puppeteer
                .launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })


            //opening a new page and navigating to Fleshscore
            const page = await browser.newPage();

            await page.goto(`https://www.google.com/finance/quote/${stock}`);
            await page.waitForSelector('body');

            try {
                //manipulating the page's content
                let allStats = await page.evaluate(() => {
                    let price = document.body.querySelector('.YMlKec.fxKbKc').innerText;
                    let movment = document.body.querySelector('.NydbP.VOXKNe.tnNmPe').innerText;
                    const stats = []

                    //storing the post items in an array then selecting for retrieving content
                    // allStock.forEach(stock => {

                    //     let price = stock.innerText;
                    stats.push(price)
                    stats.push(movment)


                    // });


                    return stats;
                });
                // await browser.close();
                if (allStats.length) {
                    const price = allStats[0]
                    let arr = allStats[1].split('\n')
                    const arrow = arr[0].includes('down') ? '-' : '+';
                    const percentage = arr[1] ? arr[1] : '0%';
                    str += `${stock}:\n`
                    str += `Price: ${price}, ${arrow} ${percentage}\n`
                    botTest.sendMessage(chatId, str)

                    //outputting the scraped data
                }
                //closing the browser
            }
            catch (err) {
                botTest.sendMessage(chatId, `Cant find your stock..`)



            }
            finally {
                console.log('closing browser - stock')
                await browser.close();

            }



        }



    });


}


