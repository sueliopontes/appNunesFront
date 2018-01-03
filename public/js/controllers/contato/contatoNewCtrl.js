angular.module("app").controller("contatoNewCtrl", function ($timeout,$scope,contatoAPI,$location,pessoaId) {	
    $scope.msg="vazio";
    $scope.pessoaId=pessoaId;
       
    $scope.adicionarContato = function (contato) {
        contato.user_id=pessoaId;		
        contatoAPI.saveContato(contato).success(function (data) {
            // delete $scope.contato;
            //$scope.contatoForm.$setPristine();
            //$location.path("/contato/"+locatarioId);
           
            $scope.msg="Cadastro salvo com sucesso!!";			
            var tempo = $timeout(function() {
                $scope.msg="vazio";
                $location.path("/contatoEdit/"+pessoaId);
           
            }, 2500); // delay 250 ms

            });
        };	
        
    });


   