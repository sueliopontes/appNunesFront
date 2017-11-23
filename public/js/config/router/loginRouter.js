angular.module("app").config(function ($routeProvider) {
	

	$routeProvider.when("/login", {
		templateUrl: "view/login/login.html",
		controller: "loginCtrl"
	});	
});