
const host = '127.0.0.1'
const port = '8080'
function action(){
    const number = document.getElementById('number').value
    const count = document.getElementById('count').value
    console.log(`http://${host}:${port}/attack/${number}/${count}`)
    fetch(`http://${host}:${port}/attack/${number}/${count}`,{
        method:'get'
    })
    .then(r => r.status)
    .then(r => console.log(r))
    .catch(e => console.log(e))   
}