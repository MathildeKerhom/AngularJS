app.controller('TableCtrl', function(){
	this.albums = generateAlbums(12);
	this.formats = formats;
	this.genres = genres;
	
	this.headers = Object.keys(this.albums[0]);
	
	this.search = {};
	this.orderPredicate = 'id';
	this.orderReverse = false;
})