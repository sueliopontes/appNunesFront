angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/endereco", {
		templateUrl: "view/endereco/endereco.html",
		controller: "enderecoCtrl",
		resolve:{
			enderecos:function(enderecoAPI) {
				return enderecoAPI.getEnderecos();
			}
		}
	});
	$routeProvider.when("/enderecoNew", {
		templateUrl: "view/endereco/enderecoNew.html",
		controller: "enderecoNewCtrl"			
	});

	$routeProvider.when("/enderecoEdit/:id", {
		templateUrl: "view/endereco/enderecoEdit.html",
		controller: "enderecoEditCtrl",
		resolve: {
			endereco: function (enderecoAPI, $route) {
				return enderecoAPI.getEndereco($route.current.params.id);
			}
		}
	});	
	
	
});