angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/rp", {
		templateUrl: "view/rp/rp.html",
		controller: "rpCtrl",
		resolve:{
			rps:function(rpAPI) {
				return rpAPI.getRPs();
			}
		}
	});
	$routeProvider.when("/rpNew", {
		templateUrl: "view/rp/rpNew.html",
		controller: "rpNewCtrl"			
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