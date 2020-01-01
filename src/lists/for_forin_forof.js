const service = require('./service');

async function main() {
    try {
        const result = await service.getPeople('a');
        const names = [];

      //For 
        console.time('for');  
        for(let i=0; i<=result.results.length -1; i++){
            const person = result.results[i];

            names.push(person.name);
        }
        console.timeEnd('for');
                
    //for in
    console.time('for_in');  
        for(let i in result.results){
            const person = result.results[i];

            names.push(person.name);
        }
        console.timeEnd('for_in');   
    //for of
    console.time('for_of');  
        for(person of result.results){
            names.push(person.name);
        }

        console.log(names);

    console.timeEnd('for_of');  
    }catch(error){
        console.error('Error = ', error);
    }
}

main();