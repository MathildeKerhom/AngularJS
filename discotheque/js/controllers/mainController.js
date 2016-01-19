app.controller('MainCtrl', function() {
	this.albums = generateAlbums(12);
	this.formats = formats;
	this.genres = genres;
	
	this.headers = Object.keys(this.albums[0]);
	
	this.orderPredicate = 'id';
	this.orderReverse = false;
	
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
	
	this.selectedAlbum = {};
})