angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/imoveis", {
		templateUrl: "view/imoveis/imoveis.html",
		controller: "imoveisCtrl",
		resolve:{
			imoveiss:function(imoveisAPI) {
				return imoveisAPI.getImoveiss();
			}
		}
	});
	$routeProvider.when("/imoveisNew", {
		templateUrl: "view/imoveis/imoveisNew.html",
		controller: "imoveisNewCtrl"			
	});

	$routeProvider.when("/imoveisEdit/:id", {
		templateUrl: "view/imoveis/imoveisEdit.html",
		controller: "imoveisEditCtrl",
		resolve: {
			imoveis: function (imoveisAPI, $route) {
				return imoveisAPI.getImoveis($route.current.params.id);
			}
		}
	});	
	
	
	
});