const db = require('../models');

const cityList = require('./cities.json');


db.City.remove({}, () => {
	cityList.forEach(city => {
		db.City.create(city, (error, createdCity) => {
			if (error) return console.log(error);
			console.log(createdCity);
		});
	});
});



// const pokemonList = require('./pokemon.json');


// removes all pokemon and
// db.Pokemon.remove({}, () => {
// 	pokemonList.forEach(pokemon => {
// 		db.Pokemon.create(pokemon, (error, createdPokemon) => {
// 			if (error) return console.log(error);
// 			console.log(createdPokemon);
// 		});
// 	});
// });
