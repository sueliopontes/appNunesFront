angular.module("app").config(function ($routeProvider) {	

	$routeProvider.when("/ocupacaoNew/:id", {
		templateUrl: "view/ocupacao/ocupacaoNew.html",
		controller: "ocupacaoNewCtrl",
		resolve: {			
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}					
	});

	$routeProvider.when("/ocupacaoEdit/:id", {
		templateUrl: "view/ocupacao/ocupacaoEdit.html",
		controller: "ocupacaoEditCtrl",
		resolve: {
			ocupacao: function (ocupacaoAPI, $route) {
				return ocupacaoAPI.getOcupacao($route.current.params.id);
			},
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}
	});	
	
	
});