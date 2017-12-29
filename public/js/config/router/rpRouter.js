angular.module("app").config(function ($routeProvider) {
		
	$routeProvider.when("/rpNew/:id", {
		templateUrl: "view/rp/rpNew.html",
		controller: "rpNewCtrl",
		resolve: {			
			pessoaId: function ($route) {				
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
			},
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}
	});	
	
	
});