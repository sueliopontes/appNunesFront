angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/contrato/:id", {
		templateUrl: "view/contrato/contrato.html",
		controller: "contratoCtrl",
		resolve:{
			contratos:function(contratoAPI,$route) {
				return contratoAPI.getcontratosUser($route.current.params.id);
			},
			pessoaId: function ($route) {
				console.log("controler contrato: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}
	});
	$routeProvider.when("/contratoNew", {
		templateUrl: "view/contrato/contratoNew.html",
		controller: "contratoNewCtrl",
		resolve: {
			locatarios:function(locatarioAPI,$route) {
				return locatarioAPI.getLocatarios();
			},			
			locatarios: function ($route) {
				console.log("controler new: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}				
	});

	$routeProvider.when("/contratoEdit/:id", {
		templateUrl: "view/contrato/contratoEdit.html",
		controller: "contratoEditCtrl",
		resolve: {
			contrato: function (contratoAPI, $route) {
				return contratoAPI.getcontrato($route.current.params.id);
			}
		}
	});	
	
	
});