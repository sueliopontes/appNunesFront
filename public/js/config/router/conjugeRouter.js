angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/conjuge/:id", {
		templateUrl: "view/conjuge/conjuge.html",
		controller: "conjugeCtrl",
		resolve: {
			conjuges: function (conjugeAPI, $route) {
				return conjugeAPI.getConjuges($route.current.params.id);
			},
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}
	});	



	$routeProvider.when("/conjugeNew/:id", {
		templateUrl: "view/conjuge/conjugeNew.html",
		controller: "conjugeNewCtrl",
		resolve: {			
			pessoaId: function ($route) {				
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
			},
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}
	});	
	
	
});