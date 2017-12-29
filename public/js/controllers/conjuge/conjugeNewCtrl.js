angular.module("app").controller("conjugeNewCtrl", function ($scope,conjugeAPI,$location,pessoaId) {	
   
        $scope.pessoaId=pessoaId;
        
        $scope.adicionarConjuge = function (conjuge) {
            conjuge.user=pessoaId;		
            conjugeAPI.saveConjuge(conjuge).success(function (data) {
                //delete $scope.conjuge;
                //$scope.conjugeForm.$setPristine();
                //$location.path("/conjuge/"+locatarioId);
                $location.path("/ocupacaoNew/"+pessoaId);
            });
        };	
        
    });