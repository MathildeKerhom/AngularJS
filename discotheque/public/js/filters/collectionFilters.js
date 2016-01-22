app.filter('pluck', function() {
	//return function (input, field) {
		/*var arr = []
		for (var i=0; i<input.length; i++) {
			arr.push(input[i][field]);
		}
		
		return arr;*/
		
		// map - pour eviter la boucle for
		/*return input.map(function (v) {
			return v[field];
		})*/
		
		// map avec les fonctions fleches
		return (input, field) => input.map(v => v[field]);
	//}
})