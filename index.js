const express = require('express')
const app = express();
const { Shishit, Ahanhala,Stocks,Maccabi} = require('./telegram/main');
const { scraperLiveTable} = require('./telegram/scrapper');

const port = process.env.PORT || 8000

// MongoDb Database
const mongoose = require('mongoose');
const mongoDb =  'mongodb+srv://shahart:ziko1234@shahar.nkwyi.mongodb.net/local_library?retryWrites=true&w=majority?authSource=admin'
mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.set('useFindAndModify', false);

// main route
app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


// Ahanhala()
// Stocks()
Shishit()
// Maccabi()
// const testing = async () =>{

//   const teams = await scraperLiveTable()
  
//   let str = `P:  Team                             P     Diff     Points\n`
//   teams.forEach(team => {
//       let { position, isPlaying, points, match_played, teamName, goal_diff, wins, draw, loses } = team
  
//       // teamName = teamName.padEnd(22)
//       str += `${position.padEnd(3)} ${teamName.padEnd(22)} ${isPlaying ==='' ? isPlaying : `(${isPlaying})`}   ${match_played}     ${goal_diff}     ${points} \n`
  
//   })
//   console.log('str',str)
// }
// testing()
