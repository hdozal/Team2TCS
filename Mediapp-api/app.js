const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const addNews = require('./routes/addNews')

mongoose.connect(
    //'mongodb://mongo-db:27017/taskManager',
    'mongodb://localhost:27017/MediaApp',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err) => err ? console.log('Something got wrong', err) : console.log('DB Connected')
)

const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

app.use('/news', addNews)

module.exports = app