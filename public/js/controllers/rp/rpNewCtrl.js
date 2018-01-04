angular.module("app").controller("rpNewCtrl", function ($timeout,$scope,rpAPI,$location,pessoaId) {	
    $scope.msg="vazio";
    $scope.pessoaId=pessoaId;	
    
        $scope.adicionarRP = function (rp) {	
            rp.user_id=pessoaId;		
            rpAPI.saveRP(rp).success(function (data) {
                //delete $scope.rp;
                //$scope.rpForm.$setPristine();
                //$location.path("/rp/"+locatarioId);
               
                $scope.msg="Cadastro salvo com sucesso!!";			
                var tempo = $timeout(function() {
                    $scope.msg="vazio";
                    $location.path("/rp/"+pessoaId);
             }, 2500); // delay 250 ms
            });
        };	
        
    });