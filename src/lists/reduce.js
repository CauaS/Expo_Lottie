const { getPeople } = require('./service');

Array.prototype.myReduce = function(callcack, initialValue) {
    let finalValue = typeof initialValue != undefined ? initialValue : this[0];

    for(let index = 0; index <= this.length -1; index ++){
        finalValue = callcack(finalValue, this[index], this);
    }

    return finalValue;
}

async function main(){
    try {
        const { results } = await getPeople(`a`);

        const mass = results.map(item => {

            //!isNaN = return values that are a numbers
            if(!isNaN(item.mass)){
                return parseInt(item.mass)
            }
            return 0;
        }, 0);

        const totalMass = mass.reduce((last, next) => {
            return last + next;
        });

        console.log(totalMass);

        const names = [
            ['John', 'Catia'], ['Cali', 'Claudia']
        ];

        //join return all element inline between ',';
        const allNames = names.myReduce((last, next) => {
            return last.concat(next);
        }, []).join(', ');

        console.log(allNames);

    } catch (error) {
        console.log(`Erro: ${error}`);
    }

}

main()