angular.module("app").config(function ($routeProvider) {
	
	
	$routeProvider.when("/contato2/:id", {
		templateUrl: "view/contato2/contato.html",
		controller: "contato2Ctrl",
		resolve: {
			contatos: function (contato2API, $route) {
				return contato2API.getContatoUser($route.current.params.id);
			},
			locatarioId: function ($route) {
				console.log("controler contato: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}
	});	



	$routeProvider.when("/contato2New/:id", {
		templateUrl: "view/contato2/contatoNew.html",
		controller: "contato2NewCtrl",
		resolve: {			
			locatarioId: function ($route) {
				console.log("controler new: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}			
	});

	$routeProvider.when("/contato2Edit/:id", {
		templateUrl: "view/contato2/contatoEdit.html",
		controller: "contato2EditCtrl",
		resolve: {
			contato: function (contato2API, $route) {
				return contato2API.getContato($route.current.params.id);
			}
		}
	});	
	
	
});