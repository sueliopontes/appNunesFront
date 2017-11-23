angular.module("app").controller("conjugeEditCtrl", function ($scope, $routeParams, conjuge,conjugeAPI,$location) {
	$scope.conjuge = conjuge.data;
	$scope.saveConjuge = function (id,conjuge) {		
		conjugeAPI.updateConjuge(id,conjuge).success(function (data) {					
			//$scope.conjugeForm.$setPristine();				
			$location.path("/conjuge/"+$scope.conjuge.user);	
			delete $scope.conjuge;		
		});
	};
});