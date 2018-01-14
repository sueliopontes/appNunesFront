angular.module("app").config(function ($routeProvider) {

	$routeProvider.when("/enderecoNew/:id", {
		templateUrl: "view/endereco/enderecoNew.html",
		controller: "enderecoNewCtrl",
		resolve: {			
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}				
	});

	$routeProvider.when("/enderecoEdit/:id/:user_tipo", {
		templateUrl: "view/endereco/enderecoEdit.html",
		controller: "enderecoEditCtrl",
		resolve: {
			endereco: function (enderecoAPI, $route) {
				return enderecoAPI.getEndereco($route.current.params.id);
			},
			pessoaId: function ($route) {				
				return $route.current.params.id;
			},
			user_tipo:function($route){
				return $route.current.params.user_tipo;
			}
		}
	});	
	
	
});