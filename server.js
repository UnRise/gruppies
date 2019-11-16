const express = require('express')
const attackService = require('./services/attackService')
const app = express()
//server config
const port = 8080
//attack config
const count = 1

app.get('/start', function(req, res){
    console.log('Someone visit (/start) page')
})

app.get('/attack/:number', (req, res) => {
    const victimsNumber = req.params.number
    attackService.attack(victimsNumber)
    res.send(`successful attack on ${victimsNumber}`)
})

app.listen(port,  function(reg, res){
    console.log('Server is running and ready to work!')
    console.log('Port: '+port)
})