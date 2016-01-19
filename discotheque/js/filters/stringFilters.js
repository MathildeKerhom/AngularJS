app.filter('truncate', function() {
	return function(input, length) {
		if (typeof input !== 'string') {
			return input;
		}
		length = length || 25;
		return input.substr(0, length) + '...';
	}
})

app.filter('rot13', function() {
	function rot13 (s) {
		return s.replace(/[a-zA-Z]/g,function(c){
			return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);
		});
	}
	
	return function (input) {
		if (typeof input !== 'string') {
				return input;
		}
		
		return rot13(input);
	}
})