angular.module("app").controller("locatarioEditCtrl", function ($scope, $routeParams, locatario,pessoaAPI,$location) {
	$scope.locatario = locatario.data;
	$scope.savePessoa = function (id,locatario) {		
		pessoaAPI.updatePessoa(id,locatario).success(function (data) {
			delete $scope.locatario;
			$scope.locatarioForm.$setPristine();
			$location.path("/locatario");
			
		});
	};
});