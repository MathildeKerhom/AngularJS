var id = 0;
var formats = ['CD', 'Vinyl', 'K7'];
var genres = ['Classic', 'Pop', 'Rock', 'Country', 'Rap'];

function generateAlbum() {
	return {
		id: ++id,
		artiste: chance.name(),
		title: chance.sentence(),
		year: chance.year({min: 1950, max: 2015}),
		format: chance.pick(formats),
		tracksCount: chance.integer({min: 3, max: 15}),
		duration: chance.integer({min: 1, max: 74}),
		rating: chance.integer({min: 1, max: 5}),
		description: chance.paragraph(),
		genre: chance.pick(genres),
		email: chance.email(),
		live: chance.bool()
	}
}

function generateAlbums(count) {
	count = count || 50;
	var albums = [];
	
	for (var i = 0; i<count; i++) {
		albums.push(generateAlbum());
	}
	
	return albums;
}
// angular
var app = angular.module('app', ["ngMessages"]);