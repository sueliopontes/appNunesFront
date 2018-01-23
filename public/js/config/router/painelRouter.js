angular.module("app").config(function ($routeProvider) {
	$routeProvider.when("/inicio", {
		templateUrl: "view/inicio.html",
		controller: "painelCtrl",
		resolve: {			
			locatarios:function(pessoaAPI) {
				return pessoaAPI.getLocatarios();
			},
			locadores:function(pessoaAPI) {
				return pessoaAPI.getLocadores();
			}
			,
			imoveis:function(imoveisAPI) {
				return imoveisAPI.getImoveis();
			}
		}
	});	
	
	
	
	
});