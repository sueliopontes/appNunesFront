angular.module("app").controller("rpNewCtrl", function ($scope,rpAPI,$location,pessoaId) {	
    
         $scope.pessoaoId=pessoaId;	
    
        $scope.adicionarRP = function (rp) {	
            rp.user=pessoaId;		
            rpAPI.saveRP(rp).success(function (data) {
                //delete $scope.rp;
                //$scope.rpForm.$setPristine();
                //$location.path("/rp/"+locatarioId);
                $location.path("/rcNew/"+pessoaId);
            });
        };	
        
    });