angular.module("app").controller("conjugeEditCtrl", function ($timeout,$scope, $routeParams,pessoaId, conjuge,conjugeAPI,$location) {
	$scope.conjuge = conjuge.data;
	$scope.pessoaId=pessoaId;	
	$scope.msg="vazio";
	
	$scope.saveConjuge = function (conjuge) {		
		conjugeAPI.updateConjuge(conjuge).success(function (data) {					
			//$scope.conjugeForm.$setPristine();			
			//delete $scope.conjuge;		
			//$location.path("/conjuge/"+pessoaId);	

			$scope.msg="Cadastro salvo com sucesso!!";			
			var tempo = $timeout(function() {
				$scope.msg="vazio";
			}, 2500); // delay 250 ms

		});
	};
});