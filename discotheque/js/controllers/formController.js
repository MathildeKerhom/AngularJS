app.controller('FormCtrl', function(){
	this.formats = formats;
	this.genres = genres;
	
	this.createAlbum = function (form, album) {
		if(form.$invalid) {
			return;
		}
		
		// save album
		var newAlbum = angular.copy(album);
		if (!form.live.isChecked) {
			newAlbum.live = false;
		}			
		newAlbum.id = ++id;
		this.albums.push(newAlbum);
	
		// reset form
		form.$setPristine();
		form.$setUntouched();
		Object.keys(album).forEach(function (k) {
			album[k] = '';
		})
	}
})