angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/ocupacao/:id", {
		templateUrl: "view/ocupacao/ocupacao.html",
		controller: "ocupacaoCtrl",
		resolve:{
			ocupacaos:function(ocupacaoAPI, $route) {
				return ocupacaoAPI.getOcupacaoUser($route.current.params.id);
			},
			ocupacaoId: function ($route) {
				console.log("controler contato: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}
	});	
	$routeProvider.when("/ocupacaoNew/:id", {
		templateUrl: "view/ocupacao/ocupacaoNew.html",
		controller: "ocupacaoNewCtrl",
		resolve: {			
			ocupacaoId: function ($route) {
				console.log("controler new: "+$route.current.params.id);
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
			}
		}
	});	
	
	
});