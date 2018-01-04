angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/locatario", {
		templateUrl: "view/locatario/locatario.html",
		controller: "locatarioCtrl",
		resolve:{
			locatarios:function(pessoaAPI) {
				return pessoaAPI.getLocatarios();
			}
		}
	});
	
	$routeProvider.when("/locatarioNew", {
		templateUrl: "view/locatario/locatarioNew.html",
		controller: "locatarioNewCtrl"			
	});

	$routeProvider.when("/locatarioEdit/:id", {
		templateUrl: "view/locatario/locatarioEdit.html",
		controller: "locatarioEditCtrl",
		resolve: {
			locatario: function (pessoaAPI, $route) {
				return pessoaAPI.getPessoa($route.current.params.id);
			}
		}
	});	
	
	
});