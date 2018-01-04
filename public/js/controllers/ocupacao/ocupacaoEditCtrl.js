angular.module("app").controller("ocupacaoEditCtrl", function ($timeout,$scope, $routeParams, pessoaId, ocupacao,ocupacaoAPI,$location) {
	$scope.ocupacao = ocupacao.data;
	$scope.pessoaId=pessoaId;
	$scope.msg="vazio";
	
	$scope.saveOcupacao = function (ocupacao) {		
		ocupacaoAPI.updateOcupacao(ocupacao).success(function (data) {
			//delete $scope.ocupacao;
			//$scope.contatoForm.$setPristine();			
			//$location.path("/ocupacaoEdit/"+pessoaId);			
			$scope.msg="Cadastro salvo com sucesso!!";			
			var tempo = $timeout(function() {
				$scope.msg="vazio";
			}, 2500); // delay 250 ms

		});
	};
});