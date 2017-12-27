angular.module("app").config(function ($routeProvider) {
	$routeProvider.when("/inicio", {
		templateUrl: "view/inicio.html",
		controller: "painelCtrl",
		resolve: {
			imoveis:function(imoveisAPI) {
				return imoveisAPI.getImoveis();
			},
			locatarios:function(pessoaAPI) {
				return pessoaAPI.getLocatarios();
			},
			locadores:function(pessoaAPI) {
				return pessoaAPI.getLocadores();
			}
			
		}
	});	
	
	
	
	
});