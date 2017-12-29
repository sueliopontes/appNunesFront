angular.module("app").controller("ocupacaoNewCtrl", function ($scope,ocupacaoAPI,$location,pessoaId) {	
    
         $scope.pessoaId=pessoaId;	         
    
        $scope.adicionarOcupacao = function (ocupacao) {
            ocupacao.user=pessoaId;			
            ocupacaoAPI.saveOcupacao(ocupacao).success(function (data) {
                //delete $scope.ocupacao;
                //$scope.ocupacaoForm.$setPristine();
                //$location.path("/ocupacao/"+locatarioId);
                $location.path("/bancoNew/"+pessoaId);
            });
        };	
        
    });