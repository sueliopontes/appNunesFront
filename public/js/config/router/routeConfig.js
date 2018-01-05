angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/", {
		redirectTo: "/inicio"
	});
	$routeProvider.when("/manutencao", {
		templateUrl: "view/manutencao.html"
	});	

	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});

	$routeProvider.when("/noPage", {
		templateUrl: "view/noPage.html"
	});

	$routeProvider.otherwise({redirectTo: "/noPage"});
});