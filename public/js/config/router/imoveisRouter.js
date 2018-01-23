angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/imoveis", {
		templateUrl: "view/imoveis/imoveis.html",
		controller: "imoveisCtrl",
		resolve:{
			imoveis:function(imoveisAPI) {
				return imoveisAPI.getImoveis();
			}
		}
	});
	$routeProvider.when("/imoveisNew", {
		templateUrl: "view/imoveis/imoveisNew.html",
		controller: "imoveisNewCtrl",
		resolve: {			
			locadores:function(pessoaAPI) {
				return pessoaAPI.getLocadores();
			}
		}			
	});

	$routeProvider.when("/imoveisEdit/:id", {
		templateUrl: "view/imoveis/imoveisEdit.html",
		controller: "imoveisEditCtrl",
		resolve: {
			imovel: function (imoveisAPI, $route) {
				return imoveisAPI.getImovel($route.current.params.id);
			},
			locadores:function(pessoaAPI) {
				return pessoaAPI.getLocadores();
			}
		}
	});	
	
	
	
});