angular.module("app").controller("locatarioEditCtrl", function ($scope, $routeParams, locatario,locatarioAPI,$location) {
	$scope.locatario = locatario.data;
	$scope.savelocatario = function (id,locatario) {		
		locatarioAPI.updateLocatario(id,locatario).success(function (data) {
			delete $scope.locatario;
			$scope.locatarioForm.$setPristine();
			$location.path("/locatario");
			
		});
	};
});