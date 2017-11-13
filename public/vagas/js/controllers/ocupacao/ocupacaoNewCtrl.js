angular.module("app").controller("ocupacaoNewCtrl", function ($scope,ocupacaoAPI,$location) {	
    
        $scope.adicionarOcupacao = function (ocupacao) {		
            ocupacaoAPI.saveOcupacao(ocupacao).success(function (data) {
                delete $scope.ocupacao;
                $scope.ocupacaoForm.$setPristine();
                $location.path("/ocupacao");
            });
        };	
        
    });