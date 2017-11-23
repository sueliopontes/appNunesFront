angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/locatario", {
		templateUrl: "view/locatario/locatario.html",
		controller: "locatarioCtrl",
		resolve:{
			locatarios:function(locatarioAPI) {
				return locatarioAPI.getLocatarios();
			}
		}
	});
	$routeProvider.when("/locatarioNew", {
		templateUrl: "view/locatario/locatarioNew.html",
		controller: "locatarioNewCtrl"			
	});

	$routeProvider.when("/locatarioEdit/:id", {
		templateUrl: "view/locatario/locatarioEdit.html",
		controller: "locatarioEditCtrl",
		resolve: {
			locatario: function (locatarioAPI, $route) {
				return locatarioAPI.getLocatario($route.current.params.id);
			}
		}
	});	
	
	
});