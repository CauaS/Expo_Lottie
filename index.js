function getUser(callback){
    setTimeout(function() {
        return callback(null, {
            id: 1,
			name: 'Caligiuri',
			age: 23,
			birthDate: new Date()
        });
    }, 1000);
}

function getPhoneNumber(userId, callback){
    setTimeout(() => { 
        return callback( null, {
            phoneNumber: '997308053'
        });
    }, 2000);
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

function resolveUser(erro, user) {
    console.log(user);
}

getUser( function resolveUser(erro, user){

    // null || "" || 0 = false;
    if(erro){
        console.erro('ERRO USER', erro);
        return;
    }
    getPhoneNumber( user.id, function resolvePhoneNumber(erro1, phoneNumber){
        if(erro){
            console.erro('ERRO PHONE', erro1);
            return;
        }

        getAddress( user.id, function resolveAddress(erro2, address){
            if(erro){
                console.erro('ERRO ADDRESS', erro2);
                return;
            }


        console.log(`
            O senhor ${user.name} com a idade de ${user.age} mora no endereço ${address.street} nro: ${address.number}
            bairro ${address.address} que possui o telefone ${phoneNumber.phoneNumber}.
        `);
    });
});
    


});
//const phoneNumber = getPhoneNumber(user.id);