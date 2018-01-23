angular.module("app").controller("locadorEditCtrl", function ($timeout,$scope, $routeParams, locador,pessoaAPI,$location) {
	$scope.locador = locador.data;
	$scope.msg="vazio";
	
	$scope.saveLocador = function (id,locador) {		
		pessoaAPI.updatePessoa(id,locador).success(function (data) {
			//delete $scope.locador;
			//$scope.locadorForm.$setPristine();
			//$location.path("/locador");
			$scope.msg="Cadastro salvo com sucesso!!";			
			var tempo = $timeout(function() {
				$scope.msg="vazio";
			}, 1500); // delay 250 ms

			
		});
	};
});