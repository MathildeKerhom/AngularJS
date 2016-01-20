app.controller('TableCtrl', function(AlbumService){
	this.albums = AlbumService.getAlbums();
	
	this.headers = Object.keys(this.albums[0]);
	
	this.search = {};
	this.orderPredicate = 'id';
	this.orderReverse = false;
})