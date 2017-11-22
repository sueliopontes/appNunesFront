angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/rp/:id", {
		templateUrl: "view/rp/rp.html",
		controller: "rpCtrl",
		resolve:{
			rps:function(rpAPI) {
				return rpAPI.getRPUser($route.current.params.id);
			},
			locatarioId: function ($route) {
				console.log("controler contato: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}
	});	
	$routeProvider.when("/rpNew/:id", {
		templateUrl: "view/rp/rpNew.html",
		controller: "rpNewCtrl",
		resolve: {			
			locatarioId: function ($route) {
				console.log("controler new: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}			
	});

	$routeProvider.when("/rpEdit/:id", {
		templateUrl: "view/rp/rpEdit.html",
		controller: "rpEditCtrl",
		resolve: {
			rp: function (rpAPI, $route) {
				return rpAPI.getRP($route.current.params.id);
			}
		}
	});	
	
	
});