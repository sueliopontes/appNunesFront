angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/imoveis/:id", {
		templateUrl: "view/imoveis/imoveis.html",
		controller: "imoveisCtrl",
		resolve:{
			imoveiss:function(imoveisAPI,$route) {
				return imoveisAPI.getimoveisUser($route.current.params.id);
			},
			locatarioId: function ($route) {
				console.log("controler imoveis: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}
	});
	$routeProvider.when("/imoveisNew/:id", {
		templateUrl: "view/imoveis/imoveisNew.html",
		controller: "imoveisNewCtrl",
		resolve: {			
			locatarioId: function ($route) {
				console.log("controler new: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}				
	});

	$routeProvider.when("/imoveisEdit/:id", {
		templateUrl: "view/imoveis/imoveisEdit.html",
		controller: "imoveisEditCtrl",
		resolve: {
			imoveis: function (imoveisAPI, $route) {
				return imoveisAPI.getimoveis($route.current.params.id);
			}
		}
	});	
	
	
});