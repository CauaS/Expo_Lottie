const { readFile } = require('fs'); // module from node to read files
const { promisify } = require('util'); // promisify is begin used to turn callback to promise

const readFileAsync = promisify(readFile); // tranforming

class DataBase {

    constructor() {
        // FILE_NAME has json file name;
        this.FILE_NAME = "heroes.js";

    }
    
    async getDataFile(){

        const file = await readFileAsync(this.FILE_NAME, 'utf8');

        //file is coming as buffer type. It should be parsed to string.
        return JSON.parse(file.toString());
    }

    writeFile(){

    }
    
    async listar(id){

        const data = await this.getDataFile();

        const filteredData = data.filter(item =>{
            return ( id ? item.id === id : true );
        });
        
        return filteredData;
    }

}

module.exports = new DataBase();