angular.module("app").controller("contratoNewCtrl", function ($scope,contratoAPI,$location,locatarioId) {	
    
         $scope.locatarioId=locatarioId;	
    
        $scope.adicionarContrato = function (contrato) {
            contrato.user=locatarioId;			
            contratoAPI.saveContrato(contrato).success(function (data) {
                delete $scope.contrato;
                $scope.contratoForm.$setPristine();
                $location.path("/contrato/"+locatarioId);
            });
        };	
        
    });