angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/", {
		templateUrl: "view/inicio.html"
	});
	

	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});

	$routeProvider.when("/noPage", {
		templateUrl: "view/noPage.html"
	});

	$routeProvider.otherwise({redirectTo: "/noPage"});
});