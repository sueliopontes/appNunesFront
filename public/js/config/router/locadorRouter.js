angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/locador", {
		templateUrl: "view/locador/locador.html",
		controller: "locadorCtrl",
		resolve:{
			locadores:function(pessoaAPI) {
				return pessoaAPI.getLocadores();
			}
		}
	});
	$routeProvider.when("/locadorNew", {
		templateUrl: "view/locador/locadorNew.html",
		controller: "locadorNewCtrl"			
	});

	$routeProvider.when("/locadorEdit/:id", {
		templateUrl: "view/locador/locadorEdit.html",
		controller: "locadorEditCtrl",
		resolve: {
			locador: function (pessoaAPI, $route) {
				return pessoaAPI.getPessoa($route.current.params.id);
			}
		}
	});	
	
	
});