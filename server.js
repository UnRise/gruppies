const express = require('express')
const method = require('./main.js')
const app = express()
//server config
const port = 8080
//attack config
const count = 1
const number = ''

method.attack(number)

app.get('/start', function(req, res){
    console.log('Someone visit (/start) page')
})

app.listen(port,  function(reg, res){
    console.log('Server is running and ready to work!')
    console.log('Port: '+port)
})