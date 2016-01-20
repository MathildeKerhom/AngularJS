app.config(function ($routeProvider) {
	$routeProvider
		.when('/',  {
			template: '<h1>Bienvenue sur la discothèque</h1>'
		})
		.when('/detail/:id', {
			templateUrl: 'views/detail.html',
			controller: 'DetailCtrl',
			controllerAs: 'detail'
		})
		.when('/form', {
			templateUrl: 'views/form.html'
			controller: 'FormCtrl',
			controllerAs: 'form'
		})
		.when('/table',  {
			templateUrl: 'views/table.html'
			controller: 'TableCtrl',
			controllerAs: 'table'
		})
		.otherwise({
			redirectTo: '/'
		})
})