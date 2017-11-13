angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/ocupacao", {
		templateUrl: "view/ocupacao/ocupacao.html",
		controller: "ocupacaoCtrl",
		resolve:{
			ocupacaos:function(ocupacaoAPI) {
				return ocupacaoAPI.getOcupacoes();
			}
		}
	});
	$routeProvider.when("/ocupacaoNew", {
		templateUrl: "view/ocupacao/ocupacaoNew.html",
		controller: "ocupacaoNewCtrl"			
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