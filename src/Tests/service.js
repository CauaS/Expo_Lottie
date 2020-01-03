const { get } = require('axios');
const URL = 'https://swapi.co/api/people';

//install nock pack to simulate requisition

async function getPeople(name){

    const url = `${URL}/?search=${name}&format=json`;
    const  result = await get(url);

    return result.data.results.map(mapPeople);
}

function mapPeople(item){
    return {
        name: item.name,
        mass: item.mass
    }
}

module.exports = {
    getPeople
}