const axios = require('axios');

const URL = 'https://swapi.co/api/people'

async function getPeople(name) {
    const url = `${URL}/?search=${nome}&format=json`;

    const response = await axios.get(url);
    return response.data;
}

getPeople('r2').then(result => {
    console.log('Result = ',result);
}).catch(error => {
    console.error('Error = ', error);
})