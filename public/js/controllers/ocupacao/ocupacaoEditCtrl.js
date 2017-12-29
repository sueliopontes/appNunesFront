angular.module("app").controller("ocupacaoEditCtrl", function ($scope, $routeParams, pessoaId, ocupacao,ocupacaoAPI,$location) {
	$scope.ocupacao = ocupacao.data;
	$scope.pessoaId=pessoaId;
	
	$scope.saveOcupacao = function (id,ocupacao) {		
		ocupacaoAPI.updateOcupacao(id,ocupacao).success(function (data) {
			delete $scope.ocupacao;
			//$scope.contatoForm.$setPristine();			
			$location.path("/ocupacao/"+ocupacao.user);			
		});
	};
});