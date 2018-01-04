angular.module("app").controller("enderecoNewCtrl", function ($timeout,$scope,enderecoAPI,$location,pessoaId) {	
    $scope.msg="vazio";
         $scope.pessoaId=pessoaId;
    
        $scope.adicionarEndereco = function (endereco) {
            endereco.user_id=pessoaId;			
            enderecoAPI.saveEndereco(endereco).success(function (data) {
                //delete $scope.endereco;
                //$scope.enderecoForm.$setPristine();
                //$location.path("/endereco/"+locatarioId);
               
                $scope.msg="Cadastro salvo com sucesso!!";			
                var tempo = $timeout(function() {
                    $scope.msg="vazio";
                    $location.path("/enderecoEdit/"+pessoaId);
             }, 2500); // delay 250 ms
            });
        };	
        
    });