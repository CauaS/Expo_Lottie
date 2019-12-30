//USING PROMISE METHOD

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

const userPromise = getUser();

userPromise
    .then(user => {
        return getPhoneNumber(user.id)
            .then(result => {
                return {
                   user: {
                       name: user.name,
                       id: user.id
                   },
                   phoneNumber: {
                       number: result
                   }
                }
            })
    })
    .then(results => {
        const address = getAddressAsync(results.user.id);

        return address.then(result => {
            return {
                user: results.user,
                phone: results.phoneNumber,
                address: result
            }
        })
    })
    .then(result => {
        console.table(result);
    })
    .catch(error => {
        console.table("Erro = ", error);
    });

