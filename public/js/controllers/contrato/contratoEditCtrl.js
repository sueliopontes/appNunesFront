angular.module("app").controller("contratoEditCtrl", function ($scope, $routeParams, contrato,contratoAPI,$location) {
	$scope.contrato = contrato.data;
	$scope.saveContrato = function (id,contrato) {		
		contratoAPI.updateContrato(id,contrato).success(function (data) {
			delete $scope.contrato;
			
			$location.path("/contrato/"+contrato.user);
			$scope.contatoForm.$setPristine();
			
		});
	};
});