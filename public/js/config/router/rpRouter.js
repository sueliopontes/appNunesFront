angular.module("app").config(function ($routeProvider) {
	
	$routeProvider.when("/rp/:id", {
		templateUrl: "view/rp/rp.html",
		controller: "rpCtrl",
		resolve: {	
			rps: function (rpAPI, $route) {
				return rpAPI.getRPS($route.current.params.id);
			},		
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}			
	});
	

	$routeProvider.when("/rpNew/:id", {
		templateUrl: "view/rp/rpNew.html",
		controller: "rpNewCtrl",
		resolve: {			
			pessoaId: function ($route) {				
				return $route.current.params.id;
			}
		}			
	});

	$routeProvider.when("/rpEdit/:id/:pessoaId", {
		templateUrl: "view/rp/rpEdit.html",
		controller: "rpEditCtrl",
		resolve: {
			rp: function (rpAPI, $route) {
				return rpAPI.getRP($route.current.params.id);
			},
			pessoaId: function ($route) {				
				return $route.current.params.pessoaId;
			}
		}
	});	
	
	
});