angular.module("app").controller("rcNewCtrl", function ($scope,rcAPI,$location,pessoaId) {	
    
         $scope.pessoaId=pessoaId;
    
        $scope.adicionarRC = function (rc) {		
            rc.user=pessoaId;	
            rcAPI.saveRC(rc).success(function (data) {
                //delete $scope.rc;
                //$scope.rcForm.$setPristine();
                //$location.path("/rc/"+locatarioId);
                $location.path("/locatarioEdit/"+pessoaId);
            });
        };	
        
    });