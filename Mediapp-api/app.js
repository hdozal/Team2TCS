const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017')

let port = 3300
const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";



let apiRoutes = require('./routes/routes')

app.use('/api',apiRoutes)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/weather',(req,res) => {
    request(url, (err,response,body) =>{
        if(err){
            console.log(err);
        } else {
           
            const output = JSON.parse(body);
            res.send(output);
        }
    });
});