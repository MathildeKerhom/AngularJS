app.factory('AlbumService', function($http, formats, genres) {
	//private
	/*var id = 0;
	var albums = generateAlbums(50);*/
	//console.log(JSON.stringify(albums, null, 2));
	var albums =  [];

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
			//return albums;
			
			// version longue
			/*var httpPromise = $http({
				method: "GET",
				url: "/albums/"
			})*/
			
			// version courte
			var httpPromise = $http.get('/albums');
			
			var albumsPromise = httpPromise.then((result) => {
				albums = result.data;
				return albums;
			});
			// ou
			/*var albumsPromise = httpPromise.then(function (result) {
				return result.data;
			});*/
			
			return albumsPromise;
			
			/*httpPromise.then(
				function (result) {
					console.log(result);
				},
				function (error) {
					console.error(error);
				}
			)
			return httpPromise;*/
		},
		
		getAlbum (id) {
			/*return this.albums.find(function(album) {
				return album.id === id;
			})*/
			
			return httpPromise = $http.get('/albums/${id}')
				.then((result) => result.data)
			
			// return albums.find(x => x.id === id)
		},
		
		createAlbum (album) {
			return $http.post('/albums', album)
				.then((result) => {
					albums.push(result.data);
					return result.data;
				})
			/*album.id = ++id;
			albums.push(album);
			
			return album.id;*/
		}
	}
})