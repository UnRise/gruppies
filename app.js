const express = require('express')
const attackService = require('./services/attackService')
const path = require('path');
// const indexPage = require('./templates/index.html')
const app = express()
//server config
const port = 8080
//attack config

app.use('/public', express.static(path.join(__dirname,'public')));

app.get('/start', function(req, res){
    console.log('Someone visit (/start) page')
    res.sendFile(path.join(__dirname+'/templates/index.html'))
})

app.get('/attack/:number/:count', (req, res) => {
    const victimsNumber = req.params.number
    const count = req.params.count
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    attackService.attack(victimsNumber, count)
    res.send(`successful attack on ${victimsNumber}`)
})

app.listen(port, function(reg, res){
    console.log(`Sever listen`)
})