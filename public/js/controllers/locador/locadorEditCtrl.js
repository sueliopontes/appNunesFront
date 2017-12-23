angular.module("app").controller("locadorEditCtrl", function ($scope, $routeParams, locador,pessoaAPI,$location) {
	$scope.locador = locador.data;
	$scope.saveLocador = function (id,locador) {		
		pessoaAPI.updatePessoa(id,locador).success(function (data) {
			delete $scope.locador;
			$scope.locadorForm.$setPristine();
			$location.path("/locador");
			
		});
	};
});