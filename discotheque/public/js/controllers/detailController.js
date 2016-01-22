app.controller('DetailCtrl', function($routeParams, AlbumService){
	//this.selectedAlbum = AlbumService.getAlbum(Number($routeParams.id));
	
	AlbumService.getAlbum(Number($routeParams.id))
		.then((album) => {
		this.selectedAlbum = album;
		})
})