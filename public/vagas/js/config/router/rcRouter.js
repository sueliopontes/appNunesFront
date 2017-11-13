angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/rc", {
		templateUrl: "view/rc/rc.html",
		controller: "rcCtrl",
		resolve:{
			rcs:function(rcAPI) {
				return rcAPI.getRCs();
			}
		}
	});
	$routeProvider.when("/rcNew", {
		templateUrl: "view/rc/rcNew.html",
		controller: "rcNewCtrl"			
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