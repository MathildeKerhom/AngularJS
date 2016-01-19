app.config(function ($routeProvider) {
	$routeProvider
		.when('/',  {
			template: '<h1>Bienvenue sur la discothèque</h1>'
		})
		.when('/detail', {
			templateUrl: 'views/detail.html'
		})
		.when('/form', {
			templateUrl: 'views/form.html'
		})
		.when('/table',  {
			templateUrl: 'views/table.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})