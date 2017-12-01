angular.module("app").controller("contato2EditCtrl", function ($scope, $routeParams, contato,contato2API,$location) {
	$scope.contato = contato.data;
	$scope.saveContato = function (id,contato) {		
		contato2API.updateContato(id,contato).success(function (data) {					
			//$scope.contatoForm.$setPristine();				
			$location.path("/contato2/"+$scope.contato.user);	
			delete $scope.contato;		
		});
	};
});