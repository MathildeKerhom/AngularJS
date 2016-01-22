app.controller('TableCtrl', function(AlbumService){
	//var self = this;
	
	this.albums = [];
	this.headers = [];
	//old line
	//this.albums = AlbumService.getAlbums();
	
	//with promise
	var albumsPromise = AlbumService.getAlbums();
	albumsPromise.then(
		(albums) => {
			/*self.albums = result.data;
			self.headers = Object.keys(self.albums[0]); */
			this.albums = albums;
			this.headers = Object.keys(this.albums[0]);
		},
		function (error) {
			console.error(error); // pour l'afficher sur le navigateur
		}
	)
	
	this.search = {};
	this.orderPredicate = 'id';
	this.orderReverse = false;
})

/*Attention au "this" dynamique ! Le "this" du controller n'est pas le meme que le "this" du scope httpPromise.then.
3 techniques pour palier au pb:

1 : déclarer une variable "self = this" en haut du controller et utiliser "self" partout ou le "this" est utilisé.

2 : 	function (result) {
			this.albums = result.data;
			this.headers = Object.keys(self.albums[0]); 
		}.bind(this),
		function (error) {
			console.error(error);
		}
	bind le "this" a la fin de la fonction utilisant "this"
	
3 : fonction flèche !!!
*/