app.factory('AlbumService', function(formats, genres) {
	//private
	var id = 0;
	var albums = generateAlbums(10);

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
	
	//public
	return {
		getAlbums () {
			return albums;
		},
		
		getAlbum (id) {
			/*return this.albums.find(function(album) {
				return album.id === id;
			})*/
			
			return albums.find(x => x.id === id)
		},
		
		createAlbum (album) {			
			album.id = ++id;
			albums.push(album);
			
			return album.id;
		}
	}
})