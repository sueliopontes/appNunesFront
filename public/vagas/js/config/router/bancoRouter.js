angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/banco/:id", {
		templateUrl: "view/banco/banco.html",
		controller: "bancoCtrl",
		resolve:{
			bancos:function(bancoAPI,$route) {
				return bancoAPI.getBancoUser($route.current.params.id);
			},
			bancoId: function ($route) {
				console.log("controler banco: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}
	});
	$routeProvider.when("/bancoNew/:id", {
		templateUrl: "view/banco/bancoNew.html",
		controller: "bancoNewCtrl",
		resolve: {			
			bancoId: function ($route) {
				console.log("controler new: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}				
	});

	$routeProvider.when("/bancoEdit/:id", {
		templateUrl: "view/banco/bancoEdit.html",
		controller: "bancoEditCtrl",
		resolve: {
			banco: function (bancoAPI, $route) {
				return bancoAPI.getBanco($route.current.params.id);
			}
		}
	});	
	
	
});