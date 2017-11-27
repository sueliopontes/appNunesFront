angular.module("app").controller("locadorEditCtrl", function ($scope, $routeParams, locador,locadorAPI,$location) {
	$scope.locador = locador.data;
	$scope.saveLocador = function (id,locador) {		
		locadorAPI.updateLocador(id,locador).success(function (data) {
			delete $scope.locador;
			$scope.locadorForm.$setPristine();
			$location.path("/locador");
			
		});
	};
});