angular.module("app").controller("rpNewCtrl", function ($scope,rpAPI,$location) {	
    
        $scope.adicionarRP = function (rp) {		
            rpAPI.saveRP(rp).success(function (data) {
                delete $scope.rp;
                $scope.rpForm.$setPristine();
                $location.path("/rp");
            });
        };	
        
    });