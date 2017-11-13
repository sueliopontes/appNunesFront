angular.module("app").controller("bancoEditCtrl", function ($scope, $routeParams, banco,bancoAPI,$location) {
	$scope.banco = banco.data;
	$scope.saveBanco = function (id,banco) {		
		bancoAPI.updateBanco(id,banco).success(function (data) {
			delete $scope.banco;
			$scope.bancoForm.$setPristine();
			$location.path("/banco");
			
		});
	};
});