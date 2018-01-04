angular.module("app").controller("conjugeNewCtrl", function ($timeout,$scope,conjugeAPI,$location,pessoaId) {	
    $scope.msg="vazio";
        $scope.pessoaId=pessoaId;
        
        $scope.adicionarConjuge = function (conjuge) {
            conjuge.user_id=pessoaId;		
            conjugeAPI.saveConjuge(conjuge).success(function (data) {
                //delete $scope.conjuge;
                //$scope.conjugeForm.$setPristine();
               
                $scope.msg="Cadastro salvo com sucesso!!";			
                var tempo = $timeout(function() {
                    $scope.msg="vazio";
                    $location.path("/conjuge/"+pessoaId); 
             }, 2500); // delay 250 ms
              
            });
        };	
        
    });