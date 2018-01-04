angular.module("app").controller("contratoNewCtrl", function ($scope,contratoAPI,$location,pessoaId) {	
    
         $scope.pessoaId=pessoaId;	
    
        $scope.adicionarContrato = function (contrato) {
            contrato.user=pessoaId;			
            contratoAPI.saveContrato(contrato).success(function (data) {
                delete $scope.contrato;
                $scope.contratoForm.$setPristine();
                $location.path("/contrato/"+pessoaId);
            });
        };	
        
    });