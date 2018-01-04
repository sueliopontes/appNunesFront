angular.module("app").controller("ocupacaoNewCtrl", function ($timeout,$scope,ocupacaoAPI,$location,pessoaId) {	
    $scope.msg="vazio";
         $scope.pessoaId=pessoaId;	         
    
        $scope.adicionarOcupacao = function (ocupacao) {
            ocupacao.user_id=pessoaId;			
            ocupacaoAPI.saveOcupacao(ocupacao).success(function (data) {
                //delete $scope.ocupacao;
                //$scope.ocupacaoForm.$setPristine();
                //$location.path("/ocupacao/"+locatarioId);
                
                $scope.msg="Cadastro salvo com sucesso!!";			
                var tempo = $timeout(function() {
                    $scope.msg="vazio";
                    $location.path("/ocupacaoEdit/"+pessoaId);
             }, 2500); // delay 250 ms
            });
        };	
        
    });