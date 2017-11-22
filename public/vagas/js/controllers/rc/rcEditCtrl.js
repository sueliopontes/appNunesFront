angular.module("app").controller("rcEditCtrl", function ($scope, $routeParams, rc,rcAPI,$location) {
	$scope.rc = rc.data;
	$scope.saveRC = function (id,rc) {		
		rcAPI.updateRC(id,rc).success(function (data) {
			delete $scope.rc;
			
			$location.path("/rc/"+rc.user);
			$scope.contatoForm.$setPristine();
			
		});
	};
});