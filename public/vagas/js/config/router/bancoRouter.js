angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/banco", {
		templateUrl: "view/banco/banco.html",
		controller: "bancoCtrl",
		resolve:{
			bancos:function(bancoAPI) {
				return bancoAPI.getBancos();
			}
		}
	});
	$routeProvider.when("/bancoNew", {
		templateUrl: "view/banco/bancoNew.html",
		controller: "bancoNewCtrl"			
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