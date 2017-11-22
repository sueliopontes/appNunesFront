angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/rc/:id", {
		templateUrl: "view/rc/rc.html",
		controller: "rcCtrl",
		resolve:{
			rcs:function(rcAPI) {
				return rcAPI.getRCUser($route.current.params.id);
			},
			rcId: function ($route) {
				console.log("controler contato: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}
	});	
	$routeProvider.when("/rcNew/:id", {
		templateUrl: "view/rc/rcNew.html",
		controller: "rcNewCtrl",
		resolve: {			
			rcId: function ($route) {
				console.log("controler new: "+$route.current.params.id);
				return $route.current.params.id;
			}
		}			
	});

	$routeProvider.when("/rcEdit/:id", {
		templateUrl: "view/rc/rcEdit.html",
		controller: "rcEditCtrl",
		resolve: {
			rc: function (rcAPI, $route) {
				return rcAPI.getRC($route.current.params.id);
			}
		}
	});	
	
	
});