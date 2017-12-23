angular.module("app").config(function ($routeProvider) {

	$routeProvider.when("/enderecoNew/:id", {
		templateUrl: "view/endereco/enderecoNew.html",
		controller: "enderecoNewCtrl",
		resolve: {			
			id: function ($route) {				
				return $route.current.params.id;
			}
		}				
	});

	$routeProvider.when("/enderecoEdit/:id", {
		templateUrl: "view/endereco/enderecoEdit.html",
		controller: "enderecoEditCtrl",
		resolve: {
			endereco: function (enderecoAPI, $route) {
				return enderecoAPI.getEndereco($route.current.params.id);
			},
			id: function ($route) {				
				return $route.current.params.id;
			}
		}
	});	
	
	
});