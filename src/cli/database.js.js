const { readFile, writeFile } = require('fs'); // module from node to read files
const { promisify } = require('util'); // promisify is begin used to turn callback to promise

const readFileAsync = promisify(readFile); // tranforming
const writeFileAsync = promisify(writeFile); // tranforming

class DataBase {

    constructor() {
        // FILE_NAME has json file name;
        this.FILE_NAME = "heroes.js";
    }
    
    async getDataFile(){
        //reading file's data
        const file = await readFileAsync(this.FILE_NAME, 'utf8');

        //file is coming as buffer type. It should be parsed to string.
        return JSON.parse(file.toString());
    }

    async writeFile(data){
        const file = await writeFileAsync(this.FILE_NAME, JSON.stringify(data));

        return true;
    }

    async registerHeroe(heroe){
        //get file data
        const data = await this.getDataFile();

        //This line below creates a ID based on time.
        const idCreated = heroe.id = 1 ? Date.now() :  heroe.id;

        //edit ID key for created value
        const heroeWithId = { id: idCreated, ...heroe };

        //add to the current data, heroeWithId
        const finalData = [...data, heroeWithId];

        
        const resut = await this.writeFile(finalData);

        return resut;
    }
    
    async retrieveData(id){
        // get file data;
        const data = await this.getDataFile();

        const filteredData = data.filter(item =>{
            return ( id ? item.id === id : true );
        });

        return filteredData;
    }

}

module.exports = new DataBase();