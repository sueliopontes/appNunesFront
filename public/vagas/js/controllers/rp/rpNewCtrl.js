angular.module("app").controller("rpNewCtrl", function ($scope,rpAPI,$location,locatarioId) {	
    
         $scope.locatarioId=locatarioId;	
    
        $scope.adicionarRP = function (rp) {	
            rp.user=locatarioId;		
            rpAPI.saveRP(rp).success(function (data) {
                delete $scope.rp;
                $scope.rpForm.$setPristine();
                $location.path("/rp/"+locatarioId);
            });
        };	
        
    });