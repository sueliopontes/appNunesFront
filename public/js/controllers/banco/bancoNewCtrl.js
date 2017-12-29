angular.module("app").controller("bancoNewCtrl", function ($scope,bancoAPI,$location,pessoaId) {	
    
         $scope.pessoaId=pessoaId;	
    
        $scope.adicionarBanco = function (banco) {
            banco.user=pessoaId;			
            bancoAPI.saveBanco(banco).success(function (data) {
                //delete $scope.banco;
                //$scope.bancoForm.$setPristine();
                //$location.path("/banco/"+locatarioId);
                $location.path("/rpNew/"+pessoaId);
            });
        };	
        
    });