angular.module("app").controller("ocupacaoEditCtrl", function ($scope, $routeParams, ocupacao,ocupacaoAPI,$location) {
	$scope.ocupacao = ocupacao.data;
	$scope.saveOcupacao = function (id,ocupacao) {		
		ocupacaoAPI.updateOcupacao(id,ocupacao).success(function (data) {
			delete $scope.ocupacao;
			
			$location.path("/ocupacao/"+ocupacao.user);
			$scope.contatoForm.$setPristine();
			
		});
	};
});