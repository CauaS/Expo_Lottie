const { deepEqual, ok } = require('assert');

const database = require('./database.js');

const DEFAULT_ITEM_INPUT = { id: 1, name: 'Flash', power: 'Speed' };

//initialise a new switch of tests
describe('Heroes Manipulation Switch', () => {

    it('Should retrieve a heroe by files', async () => {
        const expected = DEFAULT_ITEM_INPUT;
        const [result] = await database.retrieveData(expected.id);
        
        deepEqual(result, expected);
    })
    
    it('Should register heroes by files', async () => {
        const expected = DEFAULT_ITEM_INPUT;

        // result will receive true or false
        const result = await database.registerHeroe(DEFAULT_ITEM_INPUT); 

        const [actual] = await database.retrieveData(DEFAULT_ITEM_INPUT.id);

        deepEqual(actual, expected);
    })
    
})