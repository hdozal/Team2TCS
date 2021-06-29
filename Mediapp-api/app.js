const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const http = require('http').createServer(app)
const io  = require('socket.io')(http)

const addNews = require('./routes/addNews')
const auth = require('./routes/auth')

const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";
let port = 3000

mongoose.connect(
    //'mongodb://mongo-db:27017/taskManager',
    'mongodb://localhost:27017/MediaApp',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err) => err ? console.log('Something got wrong', err) : console.log('DB Connected')
)

app.use(cors({origin: '*'}))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

app.use('/news', addNews)

app.use('/auth', auth)

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('message', (msg)=>{
        console.log(msg)
        socket.broadcast.emit('message-broadcast',msg)
    })
})

http.listen(port, () => {
    console.log(`started on port: ${port}`)
})

app.get('/weather',(req,res) => {
    request(url, (err,response,body) =>{
        if(err){
            console.log(err)
        } else {
            const output = JSON.parse(body)
            res.send(output)
        }
    })
})

module.exports = app