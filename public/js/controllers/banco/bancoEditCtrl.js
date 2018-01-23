angular.module("app").controller("bancoEditCtrl", function ($scope, $routeParams, pessoaId,banco,bancoAPI,$location,$timeout) {
	$scope.banco = banco.data;
	$scope.pessoaId=pessoaId;
	$scope.msg="vazio";

	$scope.saveBanco = function (banco) {		
		bancoAPI.updateBanco(banco).success(function (data) {
			$scope.msg="Cadastro salvo com sucesso!!";			
			var tempo = $timeout(function() {
				$scope.msg="vazio";
			}, 1500); // delay 250 ms

			//delete $scope.banco;			
			//$scope.contatoForm.$setPristine();
			//$location.path("/pessoaEdit/"+pessoaId);
			
		});
	};
});