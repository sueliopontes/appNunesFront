angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/contato/:id", {
		templateUrl: "view/contato/contato.html",
		controller: "contatoCtrl",
		resolve: {
			contatos: function (contatoAPI, $route) {
				return contatoAPI.getContatoUser($route.current.params.id);
			},
			locatarioId: function ($route) {
				console.log("controler contato: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}
	});	



	$routeProvider.when("/contatoNew/:id", {
		templateUrl: "view/contato/contatoNew.html",
		controller: "contatoNewCtrl",
		resolve: {			
			locatarioId: function ($route) {
				console.log("controler new: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}			
	});

	$routeProvider.when("/contatoEdit/:id", {
		templateUrl: "view/contato/contatoEdit.html",
		controller: "contatoEditCtrl",
		resolve: {
			contato: function (contatoAPI, $route) {
				return contatoAPI.getContato($route.current.params.id);
			}
		}
	});	
	
	
});