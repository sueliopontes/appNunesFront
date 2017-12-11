angular.module("app").config(function ($routeProvider) {
	$routeProvider.when("/inicio", {
		templateUrl: "view/inicio.html",
		controller: "painelCtrl",
		resolve: {
			imoveis:function(imoveisAPI) {
				return imoveisAPI.getImoveis();
			},
			locatarios:function(locatarioAPI) {
				return locatarioAPI.getLocatarios();
			},
			locadors:function(locadorAPI) {
				return locadorAPI.getLocadors();
			}
			
		}
	});	
	
	
	
	
});