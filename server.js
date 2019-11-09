const express = require('express')
const method = require('./main.js')
const app = express()
//server config
const port = 8080
//attack config
const count = 1
const number = '+79930141902'

app.get('/', function(req, res){
    for (let i = 0; i < count; i++){
        method.attack(number)
    }
})


app.listen(port,  function(reg, res){
    console.log('Server is running and ready to work!')
    console.log('Port: '+port)
})