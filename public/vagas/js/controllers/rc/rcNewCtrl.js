angular.module("app").controller("rcNewCtrl", function ($scope,rcAPI,$location) {	
    
        $scope.adicionarRC = function (rc) {		
            rcAPI.saveRC(rc).success(function (data) {
                delete $scope.rc;
                $scope.rcForm.$setPristine();
                $location.path("/rc");
            });
        };	
        
    });