angular.module("app").factory("rcAPI", function ($http,val) {
	

	var _getRC = function (id) {
		return $http.get(val.baseUrl + "/rc/" + id);
	};

	var _saveRC = function (rc) {		
		return $http.post(val.baseUrl + "/rc", rc);
	};

	var _updateRC = function (id,rc) {
		console.log(rc);
		return $http.put(val.baseUrl + "/rc/" + id, rc);
	};
	var _deleteRC = function (id) {		
		return $http.delete(val.baseUrl + "/rc/" + id);
	};

	return {		
		getRC: _getRC,		
		saveRC: _saveRC,
		updateRC: _updateRC,
		deleteRC: _deleteRC
	};
});