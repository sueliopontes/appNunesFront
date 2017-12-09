angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/endereco3/:id", {
		templateUrl: "view/endereco3/endereco.html",
		controller: "endereco3Ctrl",
		resolve:{
			enderecos:function(endereco3API, $route) {
				return endereco3API.getEnderecoUser($route.current.params.id);
			},
			locatarioId: function ($route) {
				console.log("controler contato: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}
	});
	$routeProvider.when("/endereco3New/:id", {
		templateUrl: "view/endereco3/enderecoNew.html",
		controller: "endereco3NewCtrl",
		resolve: {			
			locatarioId: function ($route) {
				console.log("controler new: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}				
	});

	$routeProvider.when("/endereco3Edit/:id/:imovel", {
		templateUrl: "view/endereco3/enderecoEdit.html",
		controller: "endereco3EditCtrl",
		resolve: {
			endereco: function (endereco3API, $route) {
				return endereco3API.getEndereco($route.current.params.id);
			},
			imovelId: function ($route) {
				return $route.current.params.imovel;
			}			
		}
	});	
	
	
});