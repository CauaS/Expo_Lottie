const service = require('./service');

//creating a new map
Array.prototype.myMap = function(callback){
    const newArray = [];
    // this represent the list;

    for(let index = 0; index<=this.length -1; index++){
        const result = callback(this[index], index);
        
        newArray.push( result);
    }

    return newArray;
}

async function main(){
    try {
        const result = await service.getPeople('a');

        //const names = [];
       
        /*
        //Using forEach we have to create a const names previouly
        result.results.forEach(item => {
            names.push(item.name);
        });
        */

       /*
       //Using map the const name have to be created like:
        const names = result.results.map(item => {
            return item.name
        });
        */

        const names = result.results.myMap((person, index)=>{
            return person.name;
        })
        console.table(names);
        
    }catch(error){
        console.error(error);
    }
}

main();