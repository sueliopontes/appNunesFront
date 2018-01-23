angular.module("app").controller("bancoNewCtrl", function ($timeout,$scope,bancoAPI,$location,pessoaId) {	        	
    $scope.msg="vazio";
    $scope.pessoaId=pessoaId;
        $scope.adicionarBanco = function (banco) {
            banco.user_id=pessoaId;
            bancoAPI.saveBanco(banco).success(function (data) {
                //delete $scope.banco;
                //$scope.bancoForm.$setPristine();
                $scope.msg="Cadastro salvo com sucesso!!";			
			        var tempo = $timeout(function() {
                    $scope.msg="vazio";
                    $location.path("/bancoEdit/"+pessoaId);  
			    }, 1500); // delay 250 ms
                              
            });
        };	
        
    });