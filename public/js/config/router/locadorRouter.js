angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/locador", {
		templateUrl: "view/locador/locador.html",
		controller: "locadorCtrl",
		resolve:{
			locadors:function(locadorAPI) {
				return locadorAPI.getlocadors();
			}
		}
	});
	$routeProvider.when("/locadorNew", {
		templateUrl: "view/locador/locadorNew.html",
		controller: "locadorNewCtrl"			
	});

	$routeProvider.when("/locadorEdit/:id", {
		templateUrl: "view/locador/locadorEdit.html",
		controller: "locadorEditCtrl",
		resolve: {
			locador: function (locadorAPI, $route) {
				return locadorAPI.getlocador($route.current.params.id);
			}
		}
	});	
	
	
});