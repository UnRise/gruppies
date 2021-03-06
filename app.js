const express = require('express')
const bodyParser = require('body-parser')
const attackService = require('./services/attackService')
const path = require('path')
// const indexPage = require('./templates/index.html')
const app = express()
//server config
const host = '127.0.0.1'
const port = 8080
//attack config

app.use('/public', express.static(path.join(__dirname,'public')));
app.use(bodyParser.json())

app.get('/start', function(req, res){
    res.sendFile(path.join(__dirname+'/templates/index.html'))
})

app.post('/attack', (req, res) => {
    let data = req.body
    let number = data.number
    let count = data['count']

    attackService.attack(number, count)
    res.send('200')
})

app.post('/popup', (req, res) => {
    let data = req.body
    let number = data.number

    console.log(`request from extension, data is ${number}`)
    attackService.attack(number, 1)
    res.send('200')
})

app.listen(port, function(reg, res){
    console.log(`Demon RUN - OK!`)
})
