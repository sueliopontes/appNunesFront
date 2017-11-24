angular.module("app").controller("rpEditCtrl", function ($scope, $routeParams, rp,rpAPI,$location) {
	$scope.rp = rp.data;
	$scope.saveRP = function (id,rp) {		
		rpAPI.updateRP(id,rp).success(function (data) {
			delete $scope.rp;
			//$scope.contatoForm.$setPristine();			
			$location.path("/rp/"+rp.user);			
		});
	};
});