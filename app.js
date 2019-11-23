const express = require('express')
const attackService = require('./services/attackService')
const path = require('path');
// const indexPage = require('./templates/index.html')
const app = express()
//server config
const port = 8080
const host = '172.31.22.66'
//attack config

app.get('/', function(req, res){
   res.send("Hello World!");
});

app.get('/start', function(req, res){
    console.log('Someone visit (/start) page')
    res.sendFile(path.join(__dirname+'/templates/index.html'))
})

app.get('/attack/:number', (req, res) => {
    const victimsNumber = req.params.number
    attackService.attack(victimsNumber)
    res.send(`successful attack on ${victimsNumber}`)
})

app.listen(port, host, function(reg, res){
    console.log(`Sever listen on http://${host}:${port}`)
})
