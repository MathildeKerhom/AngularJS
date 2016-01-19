app.filter('average', function(sumFilter) {
	return function(numbers) {
		return sumFilter(numbers)/numbers.length;
	}
})

app.filter('sum', function() {
	//return function(input) {
		/*var sum = 0;
		for (var i=0; i<input.length; i++) {
			sum += Number(input[i]);
		}*/
		
		// reduction
		function add(a, b) {
			return Number(a) + Number(b);
		}
		
		return function (input) {
			return input.reduce(add, 0); // 0 : valeur de depart
		}
	//}
})