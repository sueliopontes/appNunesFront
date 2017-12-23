angular.module("app").controller("locadorNewCtrl", function ($scope,pessoaAPI,$location) {	
    
        $scope.adicionarLocador = function (locador) {		
            pessoaAPI.savePessoa(locador).success(function (data) {
                delete $scope.locador;
                $scope.locadorForm.$setPristine();
                $location.path("/locador");
            });
        };	
        
    });