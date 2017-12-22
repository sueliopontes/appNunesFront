angular.module("app").controller("ocupacaoNewCtrl", function ($scope,ocupacaoAPI,$location,locatarioId,locatarioId) {	
    
         $scope.locatarioId=locatarioId;	 
         
    
        $scope.adicionarOcupacao = function (ocupacao) {
            ocupacao.user=locatarioId;			
            ocupacaoAPI.saveOcupacao(ocupacao).success(function (data) {
                //delete $scope.ocupacao;
                //$scope.ocupacaoForm.$setPristine();
                //$location.path("/ocupacao/"+locatarioId);
                $location.path("/bancoNew/"+locatarioId);
            });
        };	
        
    });