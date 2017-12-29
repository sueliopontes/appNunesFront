angular.module("app").controller("bancoEditCtrl", function ($scope, $routeParams, pessoaId,banco,bancoAPI,$location) {
	$scope.banco = banco.data;
	$scope.pessoaId=pessoaId;

	$scope.saveBanco = function (id,banco) {		
		bancoAPI.updateBanco(id,banco).success(function (data) {
			delete $scope.banco;			
			$location.path("/banco/"+banco.user);
			$scope.contatoForm.$setPristine();
			
		});
	};
});