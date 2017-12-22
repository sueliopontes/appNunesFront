angular.module("app").controller("conjugeNewCtrl", function ($scope,conjugeAPI,$location,locatarioId) {	
   
        $scope.locatarioId=locatarioId;
        
        $scope.adicionarConjuge = function (conjuge) {
            conjuge.user=locatarioId;		
            conjugeAPI.saveConjuge(conjuge).success(function (data) {
                //delete $scope.conjuge;
                //$scope.conjugeForm.$setPristine();
                //$location.path("/conjuge/"+locatarioId);
                $location.path("/ocupacaoNew/"+locatarioId);
            });
        };	
        
    });