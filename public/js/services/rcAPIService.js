angular.module("app").factory("rcAPI", function ($http,val) {
	
	var _getRCS = function (id) {
		return $http.get(val.baseUrl + "/rcs/" + id);
	};

	var _getRC = function (id) {
		return $http.get(val.baseUrl + "/rc/" + id);
	};

	var _saveRC = function (rc) {		
		return $http.post(val.baseUrl + "/rc", rc);
	};

	var _updateRC = function (rc) {		
		return $http.put(val.baseUrl + "/rc/" + rc.id, rc);
	};
	var _deleteRC = function (id) {		
		return $http.delete(val.baseUrl + "/rc/" + id);
	};

	return {		
		getRC: _getRC,
		getRCS: _getRCS,		
		saveRC: _saveRC,
		updateRC: _updateRC,
		deleteRC: _deleteRC
	};
});