angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/endereco2/:id", {
		templateUrl: "view/endereco2/endereco.html",
		controller: "endereco2Ctrl",
		resolve:{
			enderecos:function(endereco2API, $route) {
				return endereco2API.getEnderecoUser($route.current.params.id);
			},
			locatarioId: function ($route) {
				console.log("controler contato: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}
	});
	$routeProvider.when("/endereco2New/:id", {
		templateUrl: "view/endereco2/enderecoNew.html",
		controller: "endereco2NewCtrl",
		resolve: {			
			locatarioId: function ($route) {
				console.log("controler new: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}				
	});

	$routeProvider.when("/endereco2Edit/:id", {
		templateUrl: "view/endereco2/enderecoEdit.html",
		controller: "endereco2EditCtrl",
		resolve: {
			endereco: function (endereco2API, $route) {
				return endereco2API.getEndereco($route.current.params.id);
			}
		}
	});	
	
	
});