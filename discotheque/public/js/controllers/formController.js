app.controller('FormCtrl', function($location, formats, genres, AlbumService){
	this.formats = formats;
	this.genres = genres;
	
	this.createAlbum = function (form, album) {
		if(form.$invalid) {
			return;
		}
		
		// save album
		var newAlbum = angular.copy(album);
		if (!form.live.isChecked) {
			album.live = false;
		}
		AlbumService.createAlbum(newAlbum)
			.then((album) => {
				// go to detail
				$location.path("/detail/" + album.id);
			})
	
		// reset form
		form.$setPristine();
		form.$setUntouched();
		Object.keys(album).forEach(function (k) {
			album[k] = '';
		})
		
		// go to table
		//$location.path("/table");

	}
})