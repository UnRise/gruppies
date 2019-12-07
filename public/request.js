
const host = '127.0.0.1'
const port = '8080'
function action(){
    const number = document.getElementById('number').value
    const count = document.getElementById('count').value
    data = {number: number,
        count: count}

    axios.post('/attack', {
        number:number,
        count:count
        },
        {
            headers:{contentType: "application/json; charset=utf-8"}}
    )
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}