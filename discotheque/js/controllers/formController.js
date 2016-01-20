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
		var newAlbumId = AlbumService.createAlbum(newAlbum);
	
		// reset form
		form.$setPristine();
		form.$setUntouched();
		Object.keys(album).forEach(function (k) {
			album[k] = '';
		})
		
		// go to table
		//$location.path("/table");
		
		// go to detail
		$location.path("/detail/" + newAlbumId);
	}
})