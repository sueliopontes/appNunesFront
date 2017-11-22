angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/endereco/:id", {
		templateUrl: "view/endereco/endereco.html",
		controller: "enderecoCtrl",
		resolve:{
			enderecos:function(enderecoAPI, $route) {
				return enderecoAPI.getEnderecoUser($route.current.params.id);
			},
			locatarioId: function ($route) {
				console.log("controler contato: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}
	});
	$routeProvider.when("/enderecoNew/:id", {
		templateUrl: "view/endereco/enderecoNew.html",
		controller: "enderecoNewCtrl",
		resolve: {			
			locatarioId: function ($route) {
				console.log("controler new: "+$route.current.params.id);
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
			}
		}
	});	
	
	
});