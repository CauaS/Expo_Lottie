const { getPeople } = require('./service');

Array.prototype.myFilter = function (callback){
    const list = [];

    for(index in this){

        const item = this[index];
        const result = callback(item, index, this);

        //if result was false
        if(!result) continue;

        list.push(item)
    }
    return list;
}


async function main(){
    try {

        const { results } = await getPeople(`a`);

        const larsFamily = results.filter(item => {

            // if it doesn't found  =  -1
            // if it found = returns array's position

            const result = item.name.toLowerCase().indexOf(`lars`) !== -1;

            return result;
        });
        
        const names = larsFamily.map(person => {
            return person.name;
        })

        console.log(names);
        
    } catch (error) {
        console.log(`Erro: ${error}`);
    }

}

main()