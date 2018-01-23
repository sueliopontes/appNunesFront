angular.module("app").controller("rcNewCtrl", function ($timeout,$scope,rcAPI,$location,pessoaId) {	
    $scope.msg="vazio";
         $scope.pessoaId=pessoaId;
    
        $scope.adicionarRC = function (rc) {		
            rc.user_id=pessoaId;	
            rcAPI.saveRC(rc).success(function (data) {
                //delete $scope.rc;
                //$scope.rcForm.$setPristine();
                //$location.path("/rc/"+locatarioId);
               
                $scope.msg="Cadastro salvo com sucesso!!";			
                var tempo = $timeout(function() {
                    $scope.msg="vazio";
                    $location.path("/rc/"+pessoaId);
             }, 1500); // delay 250 ms
            });
        };	
        
    });