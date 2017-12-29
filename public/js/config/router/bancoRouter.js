angular.module("app").config(function ($routeProvider) {
		
	$routeProvider.when("/bancoNew/:id", {
		templateUrl: "view/banco/bancoNew.html",
		controller: "bancoNewCtrl",
		resolve: {			
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}				
	});

	$routeProvider.when("/bancoEdit/:id", {
		templateUrl: "view/banco/bancoEdit.html",
		controller: "bancoEditCtrl",
		resolve: {
			banco: function (bancoAPI, $route) {
				return bancoAPI.getBanco($route.current.params.id);
			},
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}
	});	
	
	
});