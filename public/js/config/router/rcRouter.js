angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/rc/:id", {
		templateUrl: "view/rc/rc.html",
		controller: "rcCtrl",
		resolve: {	
			rcs: function (rcAPI, $route) {
				return rcAPI.getRCS($route.current.params.id);
			},		
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}			
	});
	
	$routeProvider.when("/rcNew/:id", {
		templateUrl: "view/rc/rcNew.html",
		controller: "rcNewCtrl",
		resolve: {			
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}			
	});

	$routeProvider.when("/rcEdit/:id/:pessoaId", {
		templateUrl: "view/rc/rcEdit.html",
		controller: "rcEditCtrl",
		resolve: {
			rc: function (rcAPI, $route) {
				return rcAPI.getRC($route.current.params.id);
			},
			pessoaId: function ($route) {				
				return $route.current.params.pessoaId;
			}
		}
	});	
	
	
});