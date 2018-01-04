angular.module("app").config(function ($routeProvider) {

	$routeProvider.when("/contatoNew/:id", {
		templateUrl: "view/contato/contatoNew.html",
		controller: "contatoNewCtrl",
		resolve: {			
			pessoaId: function ($route) {				
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
			},
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}
	});	
	
	
});