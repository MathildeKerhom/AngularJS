app.controller('DetailCtrl', function($routeParams, AlbumService){
	this.selectedAlbum = AlbumService.getAlbum(Number($routeParams.id));
})