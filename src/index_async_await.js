//USING ASYNC / AWAIT METHOD

const util = require('util');

//node's module named util has promisify which transform a callback to promise.
const getAddressAsync = util.promisify(getAddress);

function getUser(){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function() {
            return resolve({
                id: 1,
                name: 'Caligiuri',
                age: 23,
                birthDate: new Date()
            });
        }, 1000);
    });
}

function getPhoneNumber(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            return resolve({
                phoneNumber: '997308053'
            });
        }, 2000);
    })
}

function getAddress(userId, callback){
	setTimeout(() => {
		return callback(null, {
			street: 'Otto Engelmann',
			number: 315,
			neighbour: 'Centro'
		});
	},  1000);
}

async function main() {
    try {

        const user = await getUser();
        //const phone = await getPhoneNumber(user.id);
        //const address = await getAddressAsync(user.id);

        const result = await Promise.all([
            getPhoneNumber(user.id),
            getAddressAsync(user.id)
        ]);

        const phone = result[0];
        const address = result[1];

        console.table(user);
        console.table(phone);
        console.table(address);
    }
    catch(error) {
        console.log('Error', error);
    }
}

main();

