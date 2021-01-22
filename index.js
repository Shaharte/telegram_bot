const express = require('express')
const app = express();
const {telegramTest} = require('./telegram/main');

const port = process.env.PORT || 8000

// MongoDb Database
const mongoose = require('mongoose');
const mongoDb =  'mongodb+srv://shahart:ziko1234@shahar.nkwyi.mongodb.net/local_library?retryWrites=true&w=majority?authSource=admin'

mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


mongoose.set('useFindAndModify', false);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
// telegramTest()
