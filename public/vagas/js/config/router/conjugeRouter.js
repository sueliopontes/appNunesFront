angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/conjuge/:id", {
		templateUrl: "view/conjuge/conjuge.html",
		controller: "conjugeCtrl",
		resolve: {
			conjuges: function (conjugeAPI, $route) {
				return conjugeAPI.getConjugeUser($route.current.params.id);
			},
			locatarioId: function ($route) {				
				return $route.current.params.id;
			}
		}
	});	



	$routeProvider.when("/conjugeNew/:id", {
		templateUrl: "view/conjuge/conjugeNew.html",
		controller: "conjugeNewCtrl",
		resolve: {			
			locatarioId: function ($route) {				
				return $route.current.params.id;
			}
		}			
	});

	$routeProvider.when("/conjugeEdit/:id", {
		templateUrl: "view/conjuge/conjugeEdit.html",
		controller: "conjugeEditCtrl",
		resolve: {
			conjuge: function (conjugeAPI, $route) {
				return conjugeAPI.getConjuge($route.current.params.id);
			}
		}
	});	
	
	
});